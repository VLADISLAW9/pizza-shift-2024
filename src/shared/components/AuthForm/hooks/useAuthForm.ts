import { useState } from 'react';
import { useForm, zodResolver } from '@mantine/form';

import type { OtpStageFormSchema } from '../constants/otpStageFormSchema';
import { otpStageFormSchema } from '../constants/otpStageFormSchema';
import type { PhoneStageFormSchema } from '../constants/phoneStageFormSchema';
import { phoneStageFormSchema } from '../constants/phoneStageFormSchema';

export const useAuthForm = () => {
  const [stage, setStage] = useState<'phone' | 'otp'>('phone');

  const form = useForm<PhoneStageFormSchema | OtpStageFormSchema>({
    mode: 'uncontrolled',
    validate: zodResolver(stage === 'phone' ? phoneStageFormSchema : otpStageFormSchema)
  });

  const handleCreateOtpCode = (formValues: OtpStageFormSchema) => {
    console.log(formValues);
  };

  const handleLogin = (formValues: PhoneStageFormSchema) => {
    console.log(formValues);
  };

  const onLogin = (formValues: PhoneStageFormSchema | OtpStageFormSchema) => {
    if (stage === 'otp') {
      handleCreateOtpCode(formValues as OtpStageFormSchema);
      setStage('phone');
    }
    if (stage === 'phone') {
      handleLogin(formValues as PhoneStageFormSchema);
    }
  };

  const onSubmit = form.onSubmit((values) => {
    onLogin(values as PhoneStageFormSchema);
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
