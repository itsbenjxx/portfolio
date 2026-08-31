-- CreateEnum
CREATE TYPE "ProjectSize" AS ENUM ('large', 'medium', 'small', 'horizontal');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "linkText" TEXT NOT NULL,
    "linkRef" TEXT NOT NULL,
    "linkIcon" TEXT NOT NULL,
    "image" TEXT,
    "icon" TEXT,
    "size" "ProjectSize",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
