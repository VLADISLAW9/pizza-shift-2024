import { Routes } from '@constants/routes';
import { Link } from '@ui/Link';
import { Logo } from '@ui/Logo';

import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <Link to={Routes.HOME}>
      <Logo />
    </Link>
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li>
          <Link to={Routes.HOME}>Профиль</Link>
        </li>
        <li>
          <Link to={Routes.AUTH}>Заказы</Link>
        </li>
      </ul>
    </nav>
  </header>
);
