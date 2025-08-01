import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
import nodemailer from "nodemailer";
import axios from "axios";

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
    email,
    phone,
    company,
    campaignVolume,
    country,
    industry,
    jobTitle,
    terms,
    contact,
  } = await request.json();

  const lead = await prisma.brandlead.create({
    data: {
      fullName,
      email,
      phone,
      company,
      campaignVolume,
      country,
      industry,
      jobTitle,
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
