import { useState } from 'react';
import { useForm, zodResolver } from '@mantine/form';

import { useCreateOtpMutation, useSignInMutation } from '@/shared/graphql/__generated__';

import type { OtpStageSchema } from '../constants/otpStageSchema';
import { otpStageSchema } from '../constants/otpStageSchema';
import type { PhoneStageSchema } from '../constants/phoneStageSchema';
import { phoneStageSchema } from '../constants/phoneStageSchema';
import { useApolloClient } from '@apollo/client';

export const useAuthForm = () => {
  const client = useApolloClient();

  const [createOtpMutation, createOtpStates] = useCreateOtpMutation();
  const [signInMutation, signInStates] = useSignInMutation();

  const [submittedPhones, setSubmittedPhones] = useState<{
    [key: string]: number;
  }>({});

  const [stage, setStage] = useState<'phone' | 'otp'>('phone');

  const form = useForm<PhoneStageSchema | OtpStageSchema>({
    mode: 'uncontrolled',
    validate: zodResolver(stage === 'phone' ? phoneStageSchema : otpStageSchema)
  });

  const handleCreateOtpCode = async (formValues?: PhoneStageSchema) => {
    const phone = formValues?.phone ?? (form.values as PhoneStageSchema)?.phone;

    const createOtpResponse = await createOtpMutation({ variables: { phone } });

    if (
      !createOtpResponse.data?.createOtp.success ||
      !createOtpResponse.data ||
      createOtpResponse.data.createOtp.reason
    ) {
      return form.setErrors({
        phone:
          createOtpResponse.data?.createOtp.reason ??
          'Произошла неизвестная ошибка при создании кода. Попробуйте еще раз'
      });
    }

    setSubmittedPhones({
      ...submittedPhones,
      [phone]: Date.now() + createOtpResponse.data.createOtp.retryDelay
    });

    setStage('otp');
  };

  const handleLogin = async (formValues: OtpStageSchema & PhoneStageSchema) => {
    const signInResponse = await signInMutation({
      variables: formValues
    });

    if (
      !signInResponse.data?.signin.success ||
      !signInResponse.data ||
      !signInResponse.data.signin.reason
    ) {
      return form.setErrors({
        phone:
          signInResponse.data?.signin.reason ??
          'Произошла неизвестная ошибка при создании кода. Попробуйте еще раз'
      });
    }

    // client.watchQuery({
    //   query:
    // })
  };

  const onSubmit = form.onSubmit((formValues) => {
    if (stage === 'phone') {
      handleCreateOtpCode(formValues as PhoneStageSchema);
      setStage('otp');
    }
    if (stage === 'otp') {
      handleLogin(formValues as OtpStageSchema & PhoneStageSchema);
    }
  });

  return {
    form,
    state: {
      stage,
      submittedPhones,
      loading: createOtpStates.loading || signInStates.loading,
      error:
        createOtpStates.error?.message ||
        createOtpStates.data?.createOtp.reason ||
        signInStates.error?.message ||
        signInStates.data?.signin.reason
    },
    functions: {
      handleCreateOtpCode,
      onSubmit
    }
  };
};
