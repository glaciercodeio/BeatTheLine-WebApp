import { NextResponse } from "next/server";
import { createClient as createServerClient } from "@/utils/supabase/server";
//import { createClient as createAdminClient } from "@supabase/supabase-js";
import { createAdminClient } from "@/utils/supabase/adminClient";

export async function GET(request) {
  const supabase = await createServerClient();
  const { data, error } = await supabase.from("users").select("*");
  console.log("aqui");
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request) {
  //const supabase = await createServerClient();
  const supabaseAdmin = createAdminClient();

  const body = await request.json();

  // Insert the new user into the "users" table.
  //const { data, error } = await supabase.from("users").insert(body);

  const { data, error } = await supabaseAdmin.auth.admin.createUser(body);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const user = data.user;

  // Store additional user info in the `users` table
  const { error: dbError } = await supabaseAdmin.from("users").insert([
    {
      auth_id: user.id,
      email: user.email,
      name: body.name,
      lastname: body.lastname,
      role: body.role,
    },
  ]);

  if (dbError) {
    return Response.json({ error: dbError.message }, { status: 400 });
  }

  const { error: resetError } = await supabaseAdmin.auth.resetPasswordForEmail(
    body.email,
    {
      //redirectTo: 'https://your-app.com/set-password', // your password set route
    }
  );

  if (resetError) {
    throw resetError;
  }

  return NextResponse.json(data, { status: 201 });
}

export async function PATCH(request) {
  const supabaseAdmin = createAdminClient();

  // Parse the JSON body of the request.
  const body = await request.json();

  // Extract the email (or id) and the updated data.
  // If possible, consider using a unique id instead of email.
  const { id, ...updates } = body;

  if (!id) {
    return NextResponse.json(
      { error: "Missing ID identifier" },
      { status: 400 }
    );
  }

  // Retrieve the current user record to obtain the auth_id.
  const { data: userData, error: fetchError } = await supabaseAdmin
    .from("users")
    .select("auth_id")
    .eq("id", id)
    .single();

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  const auth_id = userData.auth_id;

  // Update the user record matching the given email.
  const { data, error } = await supabaseAdmin
    .from("users")
    .update(updates)
    .eq("id", id); // Replace with .eq("id", id) if using a unique identifier.

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // If the email is updated, update the Supabase Auth table as well.
  if (updates.email && auth_id) {
    const { error: authError } = await supabaseAdmin.auth.admin.updateUserById(
      auth_id,
      {
        email: updates.email,
      }
    );
    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 500 });
    }
  }

  return NextResponse.json(data);
}

export async function DELETE(request) {
  const supabaseAdmin = createAdminClient();
  const body = await request.json();
  let { ids, id } = body;

  // Convert a single id to an array if needed.
  if (!ids && id) {
    ids = [id];
  }

  if (!ids || !Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json(
      { error: "Missing or invalid IDs" },
      { status: 400 }
    );
  }

  // Delete users from Supabase Auth and log any errors.
  const authDeletionResults = await Promise.all(
    ids.map(async (id) => {
      const result = await supabaseAdmin.auth.admin.deleteUser(id);
      if (result.error) {
        console.error(
          `Failed to delete auth user with id ${id}:`,
          result.error
        );
      }
      return result;
    })
  );

  // Delete user records from the "users" table in one query using `.in()`
  const { data: dbData, error: dbError } = await supabaseAdmin
    .from("users")
    .delete()
    .in("auth_id", ids);

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  return NextResponse.json({
    authDeletionResults,
    dbData,
  });
}
