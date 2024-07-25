import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import { App } from '@/app/App';
import '@mantine/core/styles.css';
import { MantineProvider } from '@providers/MantineProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
