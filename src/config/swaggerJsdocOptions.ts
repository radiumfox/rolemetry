export const swaggerJsdocOptions = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Rolemetry by Elena Fisak',
      version: '0.1.0',
      description: 'AI-powered ATS (Applicant Tracking System) score calculator. Upload a CV in .pdf, .docx, or .txt and get an ATS compatibility score calculated against a job description.',
      contact: {
        name: 'Elena Fisak',
        url: 'elenafisak-dev.vercel.app',
        email: 'elenafisak.dev@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/**/*.ts']
};