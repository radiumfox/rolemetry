/**
 * @openapi
 * components:
 *   schemas:
 *     Analysis:
 *       type: object
 *       required:
 *         - id
 *         - file_name
 *         - extracted_text
 *         - score
 *         - breakdown
 *         - suggestions
 *         - created_at
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: 77d1147d-36dc-4d5a-b167-9ad8cf5ee107
 *         file_name:
 *           type: string
 *           example: cv.pdf
 *         extracted_text:
 *           type: string
 *         job_description:
 *           type: string
 *         score:
 *           type: integer
 *           minimum: 0
 *           maximum: 100
 *           example: 100
 *         breakdown:
 *           type: object
 *           additionalProperties: true
 *         suggestions:
 *           type: array
 *           items:
 *             type: string
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: '2020-01-01T04:15:00Z'
 *     CreateAnalysisRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/Analysis'
 *     DeleteAnalysisResponse:
 *       type: object
 *       required:
 *         - deleted
 *       properties:
 *         deleted:
 *           type: boolean
 *     ErrorResponse:
 *       type: object
 *       required:
 *         - status
 *         - code
 *         - message
 *       properties:
 *         status:
 *           type: integer
 *         code:
 *           type: string
 *         message:
 *           type: string
 *     ValidationErrorResponse:
 *       type: object
 *       required:
 *         - error
 *         - details
 *       properties:
 *         error:
 *           type: string
 *           example: Validation failed
 *         details:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               path:
 *                 type: array
 *                 items: {}
 *               message:
 *                 type: string
 *   parameters:
 *     AnalysisId:
 *       name: id
 *       in: path
 *       required: true
 *       schema:
 *         type: string
 *         format: uuid
 *   responses:
 *     ValidationError:
 *       description: Request validation failed
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ValidationErrorResponse'
 *     ApiError:
 *       description: The request could not be completed
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ErrorResponse'
 */
