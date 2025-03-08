import { NextResponse } from "next/server";
import { getUserProfileById } from "@/lib/userProfile";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const data = await getUserProfileById(id);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
