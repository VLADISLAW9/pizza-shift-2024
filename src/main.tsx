import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@providers/MantineProvider';

import { App } from '@/app/App';

import '@assets/styles/index.css';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
