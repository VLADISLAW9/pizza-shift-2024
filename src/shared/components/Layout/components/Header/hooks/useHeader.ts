import { useModal } from '@hooks/useModal';

import { getNavItemsList } from '../selectors/getNavItems';

export const useHeader = () => {
  const isLoggedIn = false;

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
