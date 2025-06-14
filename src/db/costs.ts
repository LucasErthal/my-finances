import { db, dbReady } from '.';
import { Cost } from './types';

const getCollection = async () => {
  await dbReady;
  return db.getCollection<Cost>('costs');
};

export const createCost = async (cost: Cost) => {
  const costs = await getCollection();
  return costs.insert(cost);
};

export const getCosts = async () => {
  const costs = await getCollection();
  return costs.find();
};

export const updateCost = async (cost: Cost) => {
  const costs = await getCollection();
  return costs.update(cost);
};

export const deleteCost = async (id: string) => {
  const costs = await getCollection();
  const item = costs.findOne({ id });
  if (item) {
    costs.remove(item);
  }
};
