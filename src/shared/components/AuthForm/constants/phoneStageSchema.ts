import { z } from 'zod';

export const phoneStageSchema = z.object({
  phone: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(11, { message: 'Номер должен иметь минимум 11 цифр' })
});

export type PhoneStageSchema = z.infer<typeof phoneStageSchema>;
