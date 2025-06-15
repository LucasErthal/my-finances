import { getCosts } from '@/db/costs';
import { Cost } from '@/db/types';
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type ChartData = {
  name: string;
  [key: string]: string | number;
}

const colors = [
  '#6A5ACD', // SlateBlue
  '#228B22', // ForestGreen
  '#B22222', // FireBrick
  '#4682B4', // SteelBlue
  '#7B68EE', // MediumSlateBlue
  '#A0522D', // Sienna
];

export function CostsChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  async function fetchData() {
    const costs: Cost[] = await getCosts();

    // Use reduce to accumulate totals for each category
    const totals = costs.reduce<Record<string, number>>((acc, cost) => {
      const category = cost.category;
      const amount = Number(cost.amount);
      acc[category] = (acc[category] || 0) + amount;
      return acc;
    }, {});

    // Get unique categories for the legend
    const categoryNames = Object.keys(totals);
    setCategories(categoryNames);

    // Create chart data with a single row containing all category totals
    const chartData: ChartData[] = [{ name: 'Total', ...totals }];
    setData(chartData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={false} />
        <YAxis />
        <Tooltip />
        <Legend />
        {categories.map((category, index) => (
          <Bar
            key={category}
            dataKey={category}
            fill={colors[index % colors.length]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}