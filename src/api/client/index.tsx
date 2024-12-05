import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

interface APIClientProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

export const APIClientProvider = ({children}: APIClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default APIClientProvider;
