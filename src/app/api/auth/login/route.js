import { supabase } from "@/lib/supabase";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Sign in with Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    const user = data.user;

    // Fetch user role from `users` table
    const { data: userData, error: dbError } = await supabase
      .from("users")
      .select("username, role")
      .eq("auth_id", user.id)
      .single();

    if (dbError) {
      return Response.json({ error: dbError.message }, { status: 400 });
    }

    return Response.json(
      {
        message: "Logged in successfully",
        user,
        userData,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
