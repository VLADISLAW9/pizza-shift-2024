import type { DocumentNode, TypedDocumentNode } from '@apollo/client';
import { useApolloClient } from '@apollo/client';

export const useApolloClientReadQuery = <TData>(query: DocumentNode | TypedDocumentNode<TData>) => {
  const client = useApolloClient();

  return client.readQuery({
    query
  });
};
