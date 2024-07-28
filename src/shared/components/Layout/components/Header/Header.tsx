import CartIcon from '@assets/icons/cart.svg';
import ExitIcon from '@assets/icons/exit.svg';
import { Routes } from '@constants/routes';
import { Button } from '@ui/Button';
import { Link } from '@ui/Link';
import { Logo } from '@ui/Logo';
import { Typography } from '@ui/Typography';

import { useHeader } from './hooks/useHeader';

import styles from './Header.module.css';

export const Header = () => {
  const { state, functions } = useHeader();

  return (
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
                <Typography variant='typography16_regular'>{text}</Typography>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className={styles.actions_list}>
        <li className={styles.actions_button_wrapper}>
          <Button
            size='xl'
            leftSection={<CartIcon />}
            className={styles.actions_button}
            variant='clear'
          >
            Корзина
          </Button>
        </li>
        <li className={styles.actions_button_wrapper}>
          {state.isLoggedIn ? (
            <Button
              onClick={functions.onLogin}
              leftSection={<ExitIcon />}
              className={styles.actions_button}
              variant='clear'
            >
              Войти
            </Button>
          ) : (
            <Button
              onClick={functions.onLogout}
              leftSection={<ExitIcon />}
              className={styles.actions_button}
              variant='clear'
            >
              Выйти
            </Button>
          )}
        </li>
      </ul>
    </header>
  );
};
