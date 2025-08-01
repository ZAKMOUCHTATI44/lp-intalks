import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email } = await request.json();

  const lead = await prisma.newsLetter.create({
    data: {
      email,
    },
  });

  return NextResponse.json({ lead }, { status: 201 });
}
