import { useApolloClient } from '@apollo/client';

import { GetSessionDocument } from '@/shared/graphql/__generated__';

export const useIndexPage = () => {
  const client = useApolloClient();

  const sessionData = client.cache.read({
    query: GetSessionDocument,
    optimistic: true
  });

  console.log(sessionData);

  return {};
};
