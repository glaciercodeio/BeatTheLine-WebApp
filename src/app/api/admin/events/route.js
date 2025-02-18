//import { supabase } from "@/lib/supabase"; // Adjust the path to your client
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

async function authenticate(supabase) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError || !user) {
    throw new Error("Unauthorized");
  }
  return user;
}

export async function POST(request) {
  try {
    const supabase = await createClient();

    await authenticate(supabase);

    const body = await request.json();

    // Ensure that body is an array of events
    if (!Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid data format" },
        { status: 400 }
      );
    }
    const { error: insertError } = await supabase.from("events").insert(body);

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Events uploaded successfully!" });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    const supabase = await createClient();
    await authenticate(supabase);

    const { data: events, error } = await supabase.from("events").select("*");
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(events);
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(request) {
  try {
    const supabase = await createClient();
    await authenticate(supabase);

    const body = await request.json();
    // Expecting the body to include the event id and the fields to update.
    if (!body.id) {
      return NextResponse.json({ error: "Missing event id" }, { status: 400 });
    }

    const { id, ...updates } = body;

    const { error } = await supabase
      .from("events")
      .update(updates)
      .eq("id", id);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Event updated successfully!" });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const supabase = await createClient();
    await authenticate(supabase);

    const body = await request.json();
    // Expecting the body to include the event id.
    if (!body.id) {
      return NextResponse.json({ error: "Missing event id" }, { status: 400 });
    }
    const { id } = body;
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Event deleted successfully!" });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
