import { MappedError } from './types.js';

export const FALLBACK_ERROR: MappedError = {
  status: 500,
  code: 'INTERNAL_ERROR',
  message: 'Internal server error.',
};