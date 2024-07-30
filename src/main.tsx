import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@providers/ApolloProvider/ApolloProvider';
import { MantineProvider } from '@providers/MantineProvider';

import { App } from '@/app/App';

import '@assets/styles/index.css';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </ApolloProvider>
  </React.StrictMode>
);
