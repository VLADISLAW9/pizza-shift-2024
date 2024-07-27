import CartIcon from '@assets/icons/cart.svg';
import ClockIcon from '@assets/icons/clock.svg';
import UserIcon from '@assets/icons/user.svg';
import { Routes } from '@constants/routes';
import { Button } from '@ui/Button';
import { Link } from '@ui/Link';
import { Logo } from '@ui/Logo';
import { Typography } from '@ui/Typography';

import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <Link to={Routes.HOME}>
      <Logo />
    </Link>
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li>
          <Link className={styles.nav_link} to={Routes.HOME}>
            <UserIcon />
            <Typography variant='typography16_regular'>Профиль</Typography>
          </Link>
        </li>
        <li>
          <Link className={styles.nav_link} to={Routes.HOME}>
            <ClockIcon />
            <Typography variant='typography16_regular'>Заказы</Typography>
          </Link>
        </li>
      </ul>
    </nav>
    <ul className={styles.actions_list}>
      <li>
        <Button className={styles.actions_button} variant='transparent'>
          <CartIcon />
          <Typography variant='typography16_regular'>Корзина</Typography>
        </Button>
      </li>
      <li>
        <Button className={styles.actions_button} variant='transparent'>
          <CartIcon />
          <Typography variant='typography16_regular'>Корзина</Typography>
        </Button>
      </li>
    </ul>
  </header>
);
