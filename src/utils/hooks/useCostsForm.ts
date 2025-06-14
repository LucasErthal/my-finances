import { z } from 'zod/v4';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const costSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  amount: z.coerce
    .number({ message: 'Amount must be a number' })
    .refine((value) => value > 0, { message: 'Amount must be greater than 0' }),
  category: z.string().min(1, { message: 'Category is required' }),
  date: z.date(),
});

export function useCostsForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(costSchema),
    defaultValues: {
      name: '',
      amount: '',
      category: '',
      date: new Date(),
    },
  });

  return { register, handleSubmit, errors, setValue };
}
