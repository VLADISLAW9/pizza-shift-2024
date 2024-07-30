import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://shift-backend.onrender.com/graphql',
  documents: './src/shared/graphql/documents',
  generates: {
    'src/shared/graphql': {
      preset: 'client',
      plugins: ['typescript', 'typescript-graphql-request', 'typescript-operations']
    }
  }
};

export default config;
