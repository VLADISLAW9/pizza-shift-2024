import { Button } from '@ui/buttons/Button';
import { Input } from '@ui/Input';

import { useAuthForm } from './hooks/useAuthForm';

export const AuthForm = () => {
  const { form, functions } = useAuthForm();

  return (
    <form onSubmit={functions.onSubmit}>
      <Input placeholder='Телефон' key={form.key('phone')} {...form.getInputProps('phone')} />
      <Button type='submit' variant='filled'>
        Продолжить
      </Button>
    </form>
  );
};
