-- CreateTable
CREATE TABLE "Brandlead" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "campaignVolume" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "terms" BOOLEAN NOT NULL,
    "contact" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brandlead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreatorLead" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "mediaHandle" TEXT NOT NULL,
    "mainProfile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "platforms" TEXT NOT NULL,
    "followerCount" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "terms" BOOLEAN NOT NULL,
    "contact" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreatorLead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brandlead_email_key" ON "Brandlead"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CreatorLead_email_key" ON "CreatorLead"("email");
