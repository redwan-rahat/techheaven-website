import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider,} from "react-router-dom";
import router from './components/Routes/Router';
import AuthProvider from './components/AuthProvider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
   <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
</QueryClientProvider>
 
)
