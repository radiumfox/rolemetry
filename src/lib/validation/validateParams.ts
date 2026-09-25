import {NextFunction, Response, Request} from 'express';
import {z} from 'zod';

export const validateParams = function <T extends z.ZodType<Request['params']>>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.params = schema.parse(req.params);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Invalid params',
          details: error.issues,
        });
      }

      next(error);
    }
  };
};