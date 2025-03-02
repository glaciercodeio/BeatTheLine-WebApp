import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { email, password, name, lastname } = await req.json();

    // Sign up user in Supabase Auth
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    const user = data.user;

    // Store additional user info in the `users` table
    const { error: dbError } = await supabase
      .from("users")
      .insert([{ auth_id: user.id, email, name, lastname, role: "user" }]);

    if (dbError) {
      return Response.json({ error: dbError.message }, { status: 400 });
    }

    return Response.json(
      { message: "User created successfully", user },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
