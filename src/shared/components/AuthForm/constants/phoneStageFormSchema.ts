import { z } from 'zod';

export const phoneStageFormSchema = z.object({
  phone: z
    .string({ required_error: 'Поле обязательно для заполнения' })
    .min(11, { message: 'Номер должен иметь минимум 11 цифр' })
});

export type PhoneStageFormSchema = z.infer<typeof phoneStageFormSchema>;
