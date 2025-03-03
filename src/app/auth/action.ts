"use server"; // Ensure it's a server function
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function resetPassword(formData) {
  try {
    const email = formData.get("email");
    if (!email) {
      throw new Error("Email is required");
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`, // Ensure this matches your reset password page
    });

    if (error) {
      throw new Error(error.message);
    }
    
    return { success: true, message: "A reset link will be sent to your email shortly." };
  } catch (error) {
    return { success: false, message: error.message || "An error occurred." };
  }
}