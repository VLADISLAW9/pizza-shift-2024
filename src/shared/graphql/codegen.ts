import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/shared/graphql/schema.gql',
  documents: './src/shared/graphql/documents/**/*.gql',
  generates: {
    './src/shared/graphql/__generated__.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  },
  ignoreNoDocuments: true,
  config: {
    maybeValue: 'T',
    avoidOptionals: true,
    immutableTypes: true
  }
};

export default config;
