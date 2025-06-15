import { CostsChart } from '@/components/costs-chart';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex flex-col gap-8">
      <h1 className="text-2xl font-bold">My Finances</h1>

      <CostsChart />
      <Button onClick={() => navigate('/add-cost')}>Add Cost</Button>
    </div>
  );
}