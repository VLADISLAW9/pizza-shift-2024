import type { ReactNode } from 'react';
import {
  ApolloClient,
  ApolloProvider as ImportedApolloProvider,
  InMemoryCache
} from '@apollo/client';

interface ApolloProviderProps {
  children: ReactNode;
}

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache()
});

export const ApolloProvider = ({ children }: ApolloProviderProps) => (
  <ImportedApolloProvider client={client}>{children}</ImportedApolloProvider>
);
