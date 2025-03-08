import { createClient as createServerClient } from "@/utils/supabase/server";

export async function getUserProfileById(id) {
  if (!id) {
    throw new Error("Missing id parameter");
  }

  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("auth_id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
