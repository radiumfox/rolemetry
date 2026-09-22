import { prismaClient } from "@/lib/prismaClient.js";

export const analysesService = () => {
    const getAnalyses = () => {
        return prismaClient.analysis.findMany();
    }

    return {
        getAnalyses,
    }
};
