-- CreateTable
CREATE TABLE "analyses" (
    "id" UUID NOT NULL,
    "file_name" TEXT NOT NULL,
    "extracted_text" TEXT NOT NULL,
    "job_description" TEXT,
    "score" INTEGER NOT NULL,
    "breakdown" JSONB NOT NULL,
    "suggestions" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "analyses_pkey" PRIMARY KEY ("id")
);
