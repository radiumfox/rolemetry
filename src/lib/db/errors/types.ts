export interface PgDatabaseError extends Error {
  severity: string;
  code: string;
  detail?: string;
  hint?: string;
  position: string;
  internalPosition?: string;
  constraint?: string;
  column?: string;
  table?: string;
  schema?: string;
  routine: string;
}
