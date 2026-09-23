import type { MappedError } from '@/lib/errors/types.js';
import type { PgDatabaseError } from './types.js';
import { DATABASE_FALLBACK_ERROR, PG_ERROR_CODES, PG_ERROR_INFO_BY_CODE } from './constants.js';

const fallbackByPrefix: Readonly<Array<{ prefix: string; info: MappedError }>> = [
  { prefix: '23', info: { status: 409, code: PG_ERROR_CODES.CONSTRAINT_VIOLATION, message: 'The operation conflicts with existing data.' } },
  { prefix: '22', info: { status: 400, code: PG_ERROR_CODES.DATA_ERROR, message: 'The provided data is invalid.' } },
  { prefix: '28', info: { status: 401, code: PG_ERROR_CODES.AUTHENTICATION_ERROR, message: 'Authentication is required.' } },
  { prefix: '53', info: { status: 503, code: PG_ERROR_CODES.SERVICE_UNAVAILABLE, message: 'The service is temporarily unavailable.' } },
];

const pgErrorInfo = (code: string): MappedError => {
  const specificError = PG_ERROR_INFO_BY_CODE[code];

  if (specificError) {
    return specificError;
  }

  const matchedError = fallbackByPrefix.find(({ prefix }) => code.startsWith(prefix));

  if (matchedError) {
    return matchedError.info;
  }

  return DATABASE_FALLBACK_ERROR;
};

export const mapPgDatabaseError = (error: PgDatabaseError): MappedError => pgErrorInfo(error.code);
