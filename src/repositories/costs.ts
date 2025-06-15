import { createCost, getCosts } from '@/db/costs';
import db from '@/db';
import { Cost } from '@/db/types';

export const costsRepository = {
  create: async (cost: Cost) => {
    const response = await createCost(cost);

    db.saveDatabase();

    return {
      success: !!response,
    };
  },
  get: async () => {
    const costs = await getCosts();
    return costs;
  },
};
