import { Button } from '@/components/ui/button';
import { DatePickerInput } from '@/components/ui/date-picker-input';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import SelectComponent from '@/components/select-component';
import { costsRepository } from '@/repositories/costs';
import { useEffect } from 'react';
import { useCostsForm } from '@/utils/hooks/useCostsForm';
import { Cost } from '@/db/types';

export default function CostsPage() {
  const { register, handleSubmit, errors, setValue } = useCostsForm();

  useEffect(() => {
    costsRepository.get().then((costs) => {
      console.log(costs);
    });
  }, []);

  async function onSubmit(data: Cost) {
    await costsRepository.create(data);
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Add new cost</h1>

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

        <Button>Add Cost</Button>
      </form>
    </div>
  )
}