CREATE TABLE IF NOT EXISTS "inquiries" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "name" varchar(120) NOT NULL,
  "email" varchar(255) NOT NULL,
  "budget" varchar(64) NOT NULL,
  "brief" text NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL
);
