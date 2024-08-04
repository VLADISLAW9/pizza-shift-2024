import { useModal } from '@hooks/useModal';

import { useGetSessionSuspenseQuery } from '@/shared/graphql/__generated__';

import { getNavItemsList } from '../selectors/getNavItems';

export const useHeader = () => {
  const sessionQuery = useGetSessionSuspenseQuery();

  const isLoggedIn = !!sessionQuery.data?.session.user;

  const [isOpenAuthModal, { open: openAuthModal, close: closeAuthModal }] = useModal();

  const navItemsList = getNavItemsList(isLoggedIn);

  const onLogout = () => {};
  const onLogin = () => {
    openAuthModal();
  };

  return {
    state: {
      isLoggedIn,
      navItemsList,
      isOpenAuthModal
    },
    functions: {
      onLogout,
      onLogin,
      closeAuthModal
    }
  };
};
