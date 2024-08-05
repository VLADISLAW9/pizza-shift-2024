import { IMaskInput } from 'react-imask';
import { CountDownButton } from '@components/Layout/components/AuthForm/components/CountDownButton/CountDownButton';
import type { PhoneStageSchema } from '@components/Layout/components/AuthForm/constants/phoneStageSchema';
import { useAuthForm } from '@components/Layout/components/AuthForm/hooks/useAuthForm';
import { Button } from '@ui/buttons/Button';
import { Input } from '@ui/Input';
import { Text } from '@ui/typography/Text';
import { Title } from '@ui/typography/Title';

import styles from './AuthForm.module.css';

export const AuthForm = () => {
  const { form, functions, state } = useAuthForm();

  return (
    <form className={styles.auth_form} onSubmit={functions.onSubmit}>
      <Title order={2}>Авторизация</Title>
      <Text size='sm'>
        Введите номер телефона для входа <br /> в личный кабинет
      </Text>
      <Input
        {...form.getInputProps('phone')}
        key={form.key('phone')}
        component={IMaskInput}
        mask='+7 000 000 00 00'
        placeholder='Телефон'
      />
      {state.stage === 'otp' && (
        <Input
          {...form.getInputProps('code')}
          component={IMaskInput}
          mask={Number}
          maxLength={6}
          key={form.key('code')}
          placeholder='Код'
        />
      )}
      {state.stage === 'otp' && (
        <CountDownButton
          onRetrySendOtpCode={functions.handleCreateOtpCode}
          loading={state.loading}
          endTime={state.submittedPhones[(form.values as PhoneStageSchema).phone]}
        />
      )}
      {state.error && (
        <Text size='xs' className={styles.auth_form_error}>
          {state.error}
        </Text>
      )}
      <Button loading={state.loading} type='submit' variant='filled'>
        Продолжить
      </Button>
    </form>
  );
};
