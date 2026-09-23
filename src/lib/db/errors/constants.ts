import type { MappedError } from '@/lib/errors/types.js';

export const PG_ERROR_CODES = {
  UNDEFINED_TABLE: 'UNDEFINED_TABLE',
  NOT_NULL_VIOLATION: 'NOT_NULL_VIOLATION',
  FOREIGN_KEY_VIOLATION: 'FOREIGN_KEY_VIOLATION',
  UNIQUE_VIOLATION: 'UNIQUE_VIOLATION',
  CHECK_VIOLATION: 'CHECK_VIOLATION',
  INVALID_TEXT_REPRESENTATION: 'INVALID_TEXT_REPRESENTATION',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  CONSTRAINT_VIOLATION: 'CONSTRAINT_VIOLATION',
  DATA_ERROR: 'DATA_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  UNKNOWN_DATABASE_ERROR: 'UNKNOWN_DATABASE_ERROR'
} as const;

export const PG_ERROR_INFO_BY_CODE: Readonly<Record<string, MappedError>> = {
  '42P01': {
    status: 404,
    code: PG_ERROR_CODES.UNDEFINED_TABLE,
    message: 'The requested resource does not exist.',
  },
  '23502': {
    status: 409,
    code: PG_ERROR_CODES.NOT_NULL_VIOLATION,
    message: 'A required value is missing.',
  },
  '23503': {
    status: 409,
    code: PG_ERROR_CODES.FOREIGN_KEY_VIOLATION,
    message: 'This record is referenced by other data.',
  },
  '23505': {
    status: 409,
    code: PG_ERROR_CODES.UNIQUE_VIOLATION,
    message: 'A record with this value already exists.',
  },
  '23514': {
    status: 409,
    code: PG_ERROR_CODES.CHECK_VIOLATION,
    message: 'The provided value violates a data constraint.',
  },
  '22P02': {
    status: 400,
    code: PG_ERROR_CODES.INVALID_TEXT_REPRESENTATION,
    message: 'The provided value has an invalid format.',
  },
  '57P03': {
    status: 503,
    code: PG_ERROR_CODES.SERVICE_UNAVAILABLE,
    message: 'The service is temporarily unavailable.',
  },
};

export const DATABASE_FALLBACK_ERROR: MappedError = {
  status: 500,
  code: PG_ERROR_CODES.UNKNOWN_DATABASE_ERROR,
  message: 'A database error occurred.',
};