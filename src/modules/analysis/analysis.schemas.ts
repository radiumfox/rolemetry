import { z } from 'zod';

export const createAnalysisSchema = z.object({
  id: z.uuid(),
  file_name: z.string(),
  extracted_text: z.string(),
  job_description: z.string().optional(),
  score: z.int().min(0).max(100),
  breakdown: z.json(),
  suggestions: z.array(z.string()),
  created_at: z.iso.datetime(),
});

export const getAnalysisByIdSchema = z.object({
  id: z.uuid()
});

export const deleteAnalysisByIdSchema = z.object({
  id: z.uuid()
});

export type CreateAnalysisInput = z.infer<typeof createAnalysisSchema>;
export type GetAnalysisByIdInput = z.infer<typeof getAnalysisByIdSchema>;
export type DeleteAnalysisByIdInput = z.infer<typeof deleteAnalysisByIdSchema>;
