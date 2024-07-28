import { getNavItemsList } from '../selectors/getNavItems';

export const useHeader = () => {
  const isLoggedIn = true;

  const navItemsList = getNavItemsList(isLoggedIn);

  const onLogout = () => {};
  const onLogin = () => {};

  return {
    state: {
      isLoggedIn,
      navItemsList
    },
    functions: {
      onLogout,
      onLogin
    }
  };
};
