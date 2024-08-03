import type { ReactNode } from 'react';
import {
  ApolloClient,
  ApolloProvider as ImportedApolloProvider,
  InMemoryCache
} from '@apollo/client';
import { authLink } from './constants/authLink';
import { httpLink } from './constants/httpLink';

interface ApolloProviderProps {
  children: ReactNode;
}

const client = new ApolloClient({
  devtools: {
    enabled: true
  },
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export const ApolloProvider = ({ children }: ApolloProviderProps) => (
  <ImportedApolloProvider client={client}>{children}</ImportedApolloProvider>
);
