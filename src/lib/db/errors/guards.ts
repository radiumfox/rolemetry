import type { PgDatabaseError } from './types.js';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const isPgDatabaseError = (error: unknown): error is PgDatabaseError => {
  if (!(error instanceof Error) || !isRecord(error)) {
    return false;
  }

  const { severity, code, position, routine } = error;

  return typeof severity === 'string'
    && typeof code === 'string'
    && typeof position === 'string'
    && typeof routine === 'string';
};