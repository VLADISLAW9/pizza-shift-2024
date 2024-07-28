import { useState } from 'react';
import type { OtpCodeFormSchema } from '@components/AuthForm/constants/otpCodeFormSchema';
import { otpCodeFormSchema } from '@components/AuthForm/constants/otpCodeFormSchema';
import { useForm, zodResolver } from '@mantine/form';

import type { PhoneStageFormValues } from '../types/PhoneStageFormValues';

export const useAuthForm = () => {
  const [stage, setStage] = useState<'phone' | 'otp'>('otp');

  const form = useForm<OtpCodeFormSchema | PhoneStageFormValues>({
    validate: zodResolver(otpCodeFormSchema)
  });

  const onSubmit = form.onSubmit(() => {
    setStage('phone');
  });

  return {
    form,
    state: {
      stage
    },
    functions: {
      onSubmit
    }
  };
};
