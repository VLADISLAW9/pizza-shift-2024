import ClockIcon from '@assets/icons/clock.svg';
import UserIcon from '@assets/icons/user.svg';
import { ROUTES } from '@constants/routes';
import { ToPathOption } from '@tanstack/react-router';

interface NavItem {
  path: ToPathOption;
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
        path: ROUTES.INDEX,
        text: 'Профиль',
        authOnly: true
      },
      {
        Icon: ClockIcon,
        path: ROUTES.AUTH,
        text: 'Билеты',
        authOnly: true
      }
    );
  }

  return navItemsList;
};
