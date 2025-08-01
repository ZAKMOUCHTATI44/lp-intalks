import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD, // Fixed typo
  },
  port: 465,
});

export async function POST(request: Request) {
  const {
    fullName,
    mediaHandle,
    mainProfile,
    email,
    platforms,
    followerCount,
    phone,
    country,
    terms,
    contact,
  } = await request.json();

  const lead = await prisma.creatorLead.create({
    data: {
      fullName,
      mediaHandle,
      mainProfile,
      email,
      platforms,
      followerCount,
      phone,
      country,
      terms,
      contact,
    },
  });

  const url = "https://delicate-kashata-8cdf37.netlify.app"; // Replace with your actual URL
  const response = await axios.get(url);
  const htmlContent = response.data; // Get the HTML content

  await transporter.sendMail({
    from: process.env.MAIL_USERNAME,
    to: lead.email,
    subject: "Welcome to Hypeo Early Access",
    html: htmlContent,
  });

  return NextResponse.json({ lead }, { status: 201 });
}
