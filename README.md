# Rolemetry

> ⚠️ Development stage — not ready for production use.

AI-powered ATS (Applicant Tracking System) score calculator. Upload a CV in `.pdf`, `.docx`, or `.txt` and get an ATS compatibility score calculated against a job description.

Built with Express 5, TypeScript, Pg-Promise, and PostgreSQL.

## Setup from a fresh checkout

```bash
pnpm install
docker compose up -d        # start Postgres
pnpm dev                    # run the app in watch mode
```

Requires a `.env` file with a `DATABASE_URL` pointing at the running Postgres.

## Database

Start the PostgreSQL database with Docker Compose:

```bash
docker compose up -d
```

This creates a `rolemetry` database with user `postgres` / password `postgres`, exposed on port `5432`.

To stop it:

```bash
docker compose down
```

To stop and remove the container **and** its data volume:

```bash
docker compose down -v
```