import ClockIcon from '@assets/icons/clock.svg';
import UserIcon from '@assets/icons/user.svg';
import { Routes } from '@constants/routes';

interface NavItem {
  path: Routes;
  text: string;
  Icon: string;
  authOnly?: boolean;
}

export const getNavItemsList = (isLoggedIn: boolean) => {
  const navItemsList: NavItem[] = [];

  if (isLoggedIn) {
    navItemsList.push(
      {
        Icon: UserIcon,
        path: Routes.HOME,
        text: 'Профиль',
        authOnly: true
      },
      {
        Icon: ClockIcon,
        path: Routes.HOME,
        text: 'Билеты',
        authOnly: true
      }
    );
  }

  return navItemsList;
};
