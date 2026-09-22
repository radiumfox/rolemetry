import express, { type Request, type Response, type NextFunction } from 'express';
import { analysesService } from "@/modules/analysis/analysis.services.js";

export const analysisRouter = express.Router();
const {
    getAnalyses
} = analysesService();

/**
 * Get all analysis
 */
analysisRouter.get('/', async (req: Request, res: Response) => {
    const analyses = await getAnalyses();
    res.send(analyses);
});

/**
 * Get analysis by id
 */
analysisRouter.get('/:id', (req: Request, res: Response) => {
    res.send('Get specific analysis');
});

/**
 * Create a new analysis
 */
analysisRouter.post('/', (req: Request, res: Response) => {
    res.send('Create a new analysis');
});

/**
 * Delete analysis by id
 */
analysisRouter.delete('/:id', (req: Request, res: Response) => {
    res.send('Delete analysis by id');
});

