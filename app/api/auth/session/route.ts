import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function GET() {
  // Get the current session from your auth logic
  const session = await auth.session();
  return NextResponse.json(session);
}
