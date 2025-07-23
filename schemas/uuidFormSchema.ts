import {z} from 'zod';

export const uuidFormSchema = z.object({
  uuid: z.string().uuid('Invalid UUID format'),
});