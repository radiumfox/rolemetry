import express, { type Request, type Response, type NextFunction } from 'express';

export const analysisRouter = express.Router();

/**
 * Get all analysis
 */
analysisRouter.get('/', (req: Request, res: Response) => {
    res.send('Get all analysis');
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

