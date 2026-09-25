import express from 'express';
import { createAnalysis, deleteAnalysis, getAnalyses, getAnalysisById } from '@/modules/analysis/analysis.controllers.js';
import { validateBody } from '@/lib/validation/validateBody.js';
import {
  createAnalysisSchema,
  deleteAnalysisByIdSchema,
  getAnalysisByIdSchema
} from '@/modules/analysis/analysis.schemas.js';
import { validateParams } from '@/lib/validation/validateParams.js';

export const analysisRouter = express.Router();

/**
 * Get all analysis
 */
analysisRouter.get('/', getAnalyses);

/**
 * Get analysis by id
 */
analysisRouter.get('/:id', validateParams(getAnalysisByIdSchema), getAnalysisById);

/**
 * Create a new analysis
 */
analysisRouter.post('/', validateBody(createAnalysisSchema), createAnalysis);

/**
 * Delete analysis by id
 */
analysisRouter.delete('/:id', validateParams(deleteAnalysisByIdSchema), deleteAnalysis);

