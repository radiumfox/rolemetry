import {mapError} from '@/lib/errors/mapper.js';
import { getQueries } from '@/lib/db/queries.js';
import { type Request, type Response } from 'express';
import {ANALYSIS_ALLOWED_FIELDS} from './config.js';

const {
  getAll,
  getSingleById,
  addSingle,
  deleteSingleById
} = getQueries('analyses');

export const getAnalyses = function (req: Request, res: Response) {
  getAll((error, result) => {
    if (error) {
      const { status, code, message } = mapError(error);

      res.status(status).json({ status, code, message });
    } else {
      res.status(200).json(result);
    }
  });
};


export const getAnalysisById = function (req: Request, res: Response) {
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
};

export const createAnalysis = function (req: Request, res: Response) {
  const id = req.body.id;
  const file_name = req.body.file_name;
  const extracted_text = req.body.extracted_text;
  const job_description = req.body.job_description;
  const score = req.body.score;
  const breakdown = req.body.breakdown;
  const suggestions = req.body.suggestions;
  const created_at = req.body.created_at;

  addSingle(
    ANALYSIS_ALLOWED_FIELDS,
    [id, file_name, extracted_text, job_description, score, breakdown, suggestions, created_at],
    (error, result) => {
      if (error) {
        const { status, code, message } = mapError(error);

        return res.status(status).json({ status, code, message });
      }

      res.status(201).json(result);
    }
  );
};

export const deleteAnalysis = function (req: Request, res: Response) {
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
};