import db from '@/db';
import { createCost, getCosts } from '@/db/costs';
import { Cost } from '@/db/types';

export const costsRepository = {
  create: async (cost: Cost) => {
    const newCost = await createCost(cost);
    console.log(newCost);
    db.saveDatabase();
    return newCost;
  },
  get: async () => {
    const costs = await getCosts();
    return costs;
  },
};
