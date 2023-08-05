import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ModalProvider from './context/ModalProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ModalProvider>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </ModalProvider>
  </BrowserRouter>,
);
