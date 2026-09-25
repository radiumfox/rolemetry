import { API_PREFIX } from './config/constants.js';
import { analysisRouter } from '@/modules/analysis/index.js';
import cors from 'cors';
import express from 'express';
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';

import { env } from '@/config/env.js';

export const app = express();

app.disable('x-powered-by');

app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(
  rateLimit({
    windowMs: 60_000,
    limit: env.NODE_ENV === 'test' ? 1_000 : 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
  })
);

app.use(`${API_PREFIX}/analyses`, analysisRouter);