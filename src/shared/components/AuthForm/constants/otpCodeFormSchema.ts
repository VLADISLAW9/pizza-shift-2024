import { z } from 'zod';

export const otpCodeFormSchema = z.object({
  otpCode: z
    .string()
    .min(1, 'Поле обязательно для заполнения')
    .regex(/^\d{6}$/, 'Код должен содержать 6 цифр')
    .transform(Number)
});

export type OtpCodeFormSchema = z.infer<typeof otpCodeFormSchema>;
