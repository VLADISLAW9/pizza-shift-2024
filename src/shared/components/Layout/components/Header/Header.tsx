import CartIcon from '@assets/icons/cart.svg';
import ExitIcon from '@assets/icons/exit.svg';
import { AuthForm } from '@components/AuthForm/AuthForm';
import { Routes } from '@constants/routes';
import { UnstyledButton } from '@ui/buttons/UnstyledButton';
import { Link } from '@ui/Link';
import { Logo } from '@ui/Logo';
import { Modal } from '@ui/Modal';
import { Text } from '@ui/typography/Text';

import { useHeader } from './hooks/useHeader';

import styles from './Header.module.css';

export const Header = () => {
  const { state, functions } = useHeader();

  return (
    <>
      <Modal onClose={functions.closeAuthModal} opened={state.isOpenAuthModal}>
        <AuthForm />
      </Modal>
      <header className={styles.header}>
        <Link to={Routes.HOME}>
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {state.navItemsList.map(({ path, text, Icon }) => (
              <li key={path}>
                <Link className={styles.nav_link} to={path}>
                  <Icon />
                  <Text size='sm'>{text}</Text>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles.actions_list}>
          <li className={styles.actions_button_wrapper}>
            <UnstyledButton className={styles.actions_button} variant='clear'>
              <CartIcon />
              <Text size='sm'>Корзина</Text>
            </UnstyledButton>
          </li>
          <li className={styles.actions_button_wrapper}>
            {state.isLoggedIn ? (
              <UnstyledButton
                onClick={functions.onLogout}
                className={styles.actions_button}
                variant='clear'
              >
                <ExitIcon />
                <Text size='sm'>Выйти</Text>
              </UnstyledButton>
            ) : (
              <UnstyledButton
                onClick={functions.onLogin}
                className={styles.actions_button}
                variant='clear'
              >
                <ExitIcon />
                <Text size='sm'>Войти</Text>
              </UnstyledButton>
            )}
          </li>
        </ul>
      </header>
    </>
  );
};
