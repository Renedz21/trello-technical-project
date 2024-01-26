import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { QueryProvider } from '@/lib/react-query/query-provider.tsx'

import './index.css'
import App from './App.tsx'
import ToastProvider from './components/providers/toast-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <ToastProvider />
        <App />
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
