import { setContext } from '@apollo/client/link/context';
import { LOCAL_STORAGE } from '@constants/localStorage';

export const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
