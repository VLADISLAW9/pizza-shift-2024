import { useState } from 'react';
import { useForm, zodResolver } from '@mantine/form';

import { useCreateOtpMutation } from '@/shared/graphql/__generated__';

import type { OtpStageSchema } from '../constants/otpStageSchema';
import { otpStageSchema } from '../constants/otpStageSchema';
import type { PhoneStageSchema } from '../constants/phoneStageSchema';
import { phoneStageSchema } from '../constants/phoneStageSchema';

const RETRY_DELAY = 10000;

export const useAuthForm = () => {
  const [createOtpMutation, createOtpStates] = useCreateOtpMutation();

  const [submittedPhones, setSubmittedPhones] = useState<{
    [key: string]: number;
  }>({});

  const [stage, setStage] = useState<'phone' | 'otp'>('phone');

  const form = useForm<PhoneStageSchema | OtpStageSchema>({
    mode: 'uncontrolled',
    validate: zodResolver(stage === 'phone' ? phoneStageSchema : otpStageSchema)
  });

  const handleCreateOtpCode = async (formValues: PhoneStageSchema) => {
    const { phone } = formValues;

    await createOtpMutation({ variables: { phone } });

    setSubmittedPhones({
      ...submittedPhones,
      [phone]: Date.now() + RETRY_DELAY
    });

    setStage('otp');
  };

  const handleLogin = (formValues: OtpStageSchema) => {
    console.log(formValues);
  };

  const onLogin = (formValues: PhoneStageSchema | OtpStageSchema) => {
    if (stage === 'phone') {
      handleCreateOtpCode(formValues as PhoneStageSchema);
      setStage('otp');
    }
    if (stage === 'otp') {
      handleLogin(formValues as OtpStageSchema);
    }
  };

  const onSubmit = form.onSubmit((values) => {
    onLogin(values as PhoneStageSchema);
  });

  return {
    form,
    state: {
      stage,
      loading: createOtpStates.loading,
      error: createOtpStates.error?.message || createOtpStates.data?.createOtp.reason
    },
    functions: {
      onSubmit
    }
  };
};
