import { useState } from 'react';
import type { OtpStageSchema } from '@components/Layout/components/Header/components/AuthForm/constants/otpStageSchema';
import { otpStageSchema } from '@components/Layout/components/Header/components/AuthForm/constants/otpStageSchema';
import type { PhoneStageSchema } from '@components/Layout/components/Header/components/AuthForm/constants/phoneStageSchema';
import { phoneStageSchema } from '@components/Layout/components/Header/components/AuthForm/constants/phoneStageSchema';
import { LOCAL_STORAGE } from '@constants/localStorage';
import { useForm, zodResolver } from '@mantine/form';

import {
  useCreateOtpMutation,
  useGetSessionQuery,
  useSignInMutation
} from '@/shared/graphql/__generated__';
import { convertPhoneToValidFormat } from '@/shared/utils/convertPhoneToValidFormat';

export const useAuthForm = () => {
  const sessionQuery = useGetSessionQuery();
  const [signInMutation, signInStates] = useSignInMutation();
  const [createOtpMutation, createOtpStates] = useCreateOtpMutation();

  const [submittedPhones, setSubmittedPhones] = useState<{
    [key: string]: number;
  }>({});

  const [stage, setStage] = useState<'phone' | 'otp'>('phone');
  const [currentPhone, setCurrentPhone] = useState<string>();

  const form = useForm<PhoneStageSchema | OtpStageSchema>({
    mode: 'uncontrolled',
    validate: zodResolver(stage === 'phone' ? phoneStageSchema : otpStageSchema),
    transformValues: (values: PhoneStageSchema | OtpStageSchema) => {
      const { phone } = values as PhoneStageSchema;

      return {
        ...values,
        phone: convertPhoneToValidFormat(phone)
      };
    }
  });

  const handleCreateOtpCode = async (formValues?: PhoneStageSchema) => {
    const phone = formValues?.phone ?? currentPhone;

    if (!phone) throw new Error('Отсутвует номер телефона');

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

    setCurrentPhone(phone);
    setStage('otp');
  };

  const handleLogin = async (formValues: OtpStageSchema & PhoneStageSchema) => {
    const signInResponse = await signInMutation({
      variables: {
        phone: formValues.phone,
        code: Number(formValues.code)
      }
    });

    if (
      !signInResponse.data?.signin.success ||
      !signInResponse.data ||
      signInResponse.data.signin.reason
    ) {
      return form.setErrors({
        phone:
          signInResponse.data?.signin.reason ??
          'Произошла неизвестная ошибка при создании кода. Попробуйте еще раз'
      });
    }

    localStorage.setItem(LOCAL_STORAGE.AUTH_TOKEN, signInResponse.data.signin.token);
    sessionQuery.refetch();
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
      currentPhone,
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
