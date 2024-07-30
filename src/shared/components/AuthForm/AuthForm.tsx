import { IMaskInput } from 'react-imask';
import { Button } from '@ui/buttons/Button';
import { Input } from '@ui/Input';
import { Text } from '@ui/typography/Text';
import { Title } from '@ui/typography/Title';

import { useAuthForm } from './hooks/useAuthForm';

import styles from './AuthForm.module.css';

export const AuthForm = () => {
  const { form, functions } = useAuthForm();

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
      <Button type='submit' variant='filled'>
        Продолжить
      </Button>
    </form>
  );
};
