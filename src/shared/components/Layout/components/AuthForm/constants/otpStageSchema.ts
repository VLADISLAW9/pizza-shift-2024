import { z } from 'zod';

export const otpStageSchema = z.object({
  code: z
    .string()
    .min(1, 'Поле обязательно для заполнения')
    .regex(/^\d{6}$/, 'Код должен содержать 6 цифр')
    .transform(Number)
});

export type OtpStageSchema = z.infer<typeof otpStageSchema>;
