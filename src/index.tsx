import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import { ProductProvider } from 'context/ProductContext'
import { ClientProvider } from 'context/UserContext'

import GlobalStyle from 'styles/GlobalStyle'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <ProductProvider>
        <ClientProvider>
          <App />
          <GlobalStyle />
        </ClientProvider>
      </ProductProvider>
    </Suspense>
  </React.StrictMode>,
)
