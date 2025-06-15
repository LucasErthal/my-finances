import { Button } from '@/components/ui/button';
import { DatePickerInput } from '@/components/ui/date-picker-input';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import SelectComponent from '@/components/select-component';
import { costsRepository } from '@/repositories/costs';
import { useCostsForm } from '@/utils/hooks/useCostsForm';
import { toast } from 'sonner';
import { Cost } from '@/db/types';
import { useNavigate } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';

export default function CostsPage() {
  const { register, handleSubmit, errors, setValue, reset, watch } = useCostsForm();
  const navigate = useNavigate();

  async function onSubmit(data: Cost) {
    const response = await costsRepository.create(data);
    if (response.success) {
      toast.success('Cost added successfully');
      reset();
    } else {
      toast.error('Failed to add cost');
    }
  }

  return (
    <div className="p-4">
      <div className="flex items-center gap-1">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold">Add new cost</h1>
      </div>

      <form className="flex flex-col gap-4 my-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <Label className='font-semibold' htmlFor="name">Cost name</Label>
          <Input {...register('name')} name="name" placeholder='e.g. "Groceries"' />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <Label className='font-semibold' htmlFor="amount">Cost amount</Label>
          <Input {...register('amount')} name="amount" placeholder='e.g. "100"' />
          {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <Label className='font-semibold' htmlFor="category">Cost category</Label>
          <SelectComponent 
            value={watch('category') || ''}
            onChange={(value) => setValue('category', value)}
            placeholder="Select a category" 
            options={[
              { label: 'Supermarket', value: 'supermarket' },
              { label: 'Delivery Food', value: 'delivery-food' },
              { label: 'Online Shopping', value: 'online-shopping' },
              { label: 'Pharmacy', value: 'pharmacy' },
              { label: 'Transport', value: 'transport' },
              { label: 'Other', value: 'other' }
            ]}
          />
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <Label className='font-semibold' htmlFor="date">Cost date</Label>
          <DatePickerInput
            onChange={(date) => setValue('date', date)}
            defaultValue={new Date()}
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>

        <div className="flex justify-end">
          <Button type="submit">Add Cost</Button>
        </div>
      </form>
    </div>
  )
}