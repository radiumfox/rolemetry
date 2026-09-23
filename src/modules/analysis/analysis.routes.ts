import express, { type Request, type Response } from 'express';
import { getQueries } from '@/lib/db/queries.js';
import { mapError } from '@/lib/errors/mapper.js';

export const analysisRouter = express.Router();

const {
  getAll,
  getSingleById,
  addSingle,
  deleteSingleById
} = getQueries('analyses');

/**
 * Get all analysis
 */
analysisRouter.get('/', async (req: Request, res: Response) => {
  getAll((error, result) => {
    if (error) {
      const { status, code, message } = mapError(error);

      res.status(status).json({ status, code, message });
    } else {
      res.status(200).json(result);
    }
  });
});

/**
 * Get analysis by id
 */
analysisRouter.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id;

  if(!id || typeof id !== 'string') {
    return res.status(400).json({ message: 'id is missing or invalid' });
  }

  getSingleById(id, (error, result) => {
    if (error) {
      const { status, code, message } = mapError(error);

      res.status(status).json({ status, code, message });
    } else {
      res.status(200).json(result);
    }
  });
});

/**
 * Create a new analysis
 */
analysisRouter.post('/', (req: Request, res: Response) => {
  const id = req.body.id;
  const file_name = req.body.file_name;
  const extracted_text = req.body.extracted_text;
  const job_description = req.body.job_description;
  const score = req.body.score;
  const breakdown = req.body.breakdown;
  const suggestions = req.body.suggestions;
  const created_at = req.body.created_at;

  addSingle(
    ['id', 'file_name', 'extracted_text', 'job_description', 'score', 'breakdown', 'suggestions', 'created_at'],
    [id, file_name, extracted_text, job_description, score, breakdown, suggestions, created_at],
    (error, result) => {
      if (error) {
        const { status, code, message } = mapError(error);

        return res.status(status).json({ status, code, message });
      }

      res.status(201).json(result);
    }
  );
});

/**
 * Delete analysis by id
 */
analysisRouter.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ message: 'id is missing or invalid' });
  }

  deleteSingleById(id, (error, deleted) => {
    if (error) {
      const { status, code, message } = mapError(error);

      return res.status(status).json({ status, code, message });
    }

    res.status(200).json({ deleted });
  });
});

