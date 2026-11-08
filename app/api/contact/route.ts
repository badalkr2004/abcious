import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { inquiries } from "@/lib/db/schema";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        {
          ok: false,
          message: "Database is not configured. Set DATABASE_URL to enable submissions.",
        },
        { status: 503 },
      );
    }

    const db = getDb();
    const [row] = await db
      .insert(inquiries)
      .values({
        name: parsed.data.name,
        email: parsed.data.email,
        budget: parsed.data.budget,
        brief: parsed.data.brief,
      })
      .returning({ id: inquiries.id });

    return NextResponse.json({ ok: true, id: row.id });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Please email us directly." },
      { status: 500 },
    );
  }
}
