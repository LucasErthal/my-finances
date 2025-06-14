import { Button } from '@/components/ui/button';
import { DatePickerInput } from '@/components/ui/date-picker-input';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import SelectComponent from '@/components/select-component';

export default function CostsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Add new cost</h1>

      <div className="flex flex-col gap-4 my-4">
        <div className="flex flex-col gap-1">
          <Label className='font-semibold' htmlFor="cost-name">Cost name</Label>
          <Input id="cost-name" placeholder='e.g. "Groceries"' />
        </div>

        <div className="flex flex-col gap-1">
          <Label className='font-semibold' htmlFor="cost-amount">Cost amount</Label>
          <Input id="cost-amount" placeholder='e.g. "100"' />
        </div>

        <div className="flex flex-col gap-1">
          <Label className='font-semibold' htmlFor="cost-category">Cost category</Label>
          <SelectComponent 
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
        </div>

        <div className="flex flex-col gap-1">
          <Label className='font-semibold' htmlFor="cost-date">Cost date</Label>
          <DatePickerInput defaultValue={new Date()} />
        </div>
      </div>

      <Button>Add Cost</Button>
    </div>
  )
}