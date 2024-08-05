import { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { LOCAL_STORAGE } from '@constants/localStorage';
import { useModal } from '@hooks/useModal';

import { useGetSessionSuspenseQuery } from '@/shared/graphql/__generated__';

import { getNavItemsList } from '../selectors/getNavItems';

export const useHeader = () => {
  const client = useApolloClient();

  const sessionQuery = useGetSessionSuspenseQuery({
    errorPolicy: 'ignore'
  });

  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionQuery.data?.session?.user);

  const [isOpenAuthModal, { open: openAuthModal, close: closeAuthModal }] = useModal();
  const navItemsList = getNavItemsList(isLoggedIn);

  const onLogout = async () => {
    await client.clearStore();
    localStorage.removeItem(LOCAL_STORAGE.AUTH_TOKEN);
    setIsLoggedIn(false);
  };
  const onLogin = () => {
    openAuthModal();
  };

  useEffect(() => {
    if (sessionQuery.data?.session?.user) {
      closeAuthModal();
      setIsLoggedIn(true);
    }
  }, [sessionQuery.data]);

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
