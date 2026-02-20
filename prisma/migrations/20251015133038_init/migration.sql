-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "subtitle" TEXT,
    "category" TEXT,
    "comment" TEXT,
    "views" INTEGER NOT NULL DEFAULT 0,
    "tags" TEXT,
    "images" TEXT,
    "highlightPoints" TEXT,
    "notes" TEXT,
    "content" TEXT,
    "authorName" TEXT,
    "authorImage" TEXT,
    "authorDesignation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
