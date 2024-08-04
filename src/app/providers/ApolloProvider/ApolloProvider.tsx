import type { ReactNode } from 'react';
import * as Apollo from '@apollo/client';

import { authLink } from './constants/authLink';
import { httpLink } from './constants/httpLink';

interface ApolloProviderProps {
  children: ReactNode;
}

const client = new Apollo.ApolloClient({
  connectToDevTools: true,
  devtools: {
    enabled: true
  },
  link: authLink.concat(httpLink),
  cache: new Apollo.InMemoryCache()
});

export const ApolloProvider = ({ children }: ApolloProviderProps) => (
  <Apollo.ApolloProvider client={client}>{children}</Apollo.ApolloProvider>
);
