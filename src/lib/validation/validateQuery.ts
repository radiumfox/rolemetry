import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const validateQuery = function <T extends z.ZodType<Request['query']>>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.query = schema.parse(req.query);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Invalid query',
          details: error.issues,
        });
      }

      next(error);
    }
  };
};