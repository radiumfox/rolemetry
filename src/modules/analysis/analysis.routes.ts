import express from 'express';
import {createAnalysis, deleteAnalysis, getAnalyses, getAnalysisById} from '@/modules/analysis/analysis.controllers.js';

export const analysisRouter = express.Router();

/**
 * Get all analysis
 */
analysisRouter.get('/', getAnalyses);

/**
 * Get analysis by id
 */
analysisRouter.get('/:id', getAnalysisById);

/**
 * Create a new analysis
 */
analysisRouter.post('/', createAnalysis);

/**
 * Delete analysis by id
 */
analysisRouter.delete('/:id', deleteAnalysis);

