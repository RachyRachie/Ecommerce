import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsProvider from './contexts/Productscontext.jsx'
//sidebar provider
import SidebarProvider from './contexts/SidebarContext.jsx'
import CartProvider from './contexts/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
<ProductsProvider>
<StrictMode>
    <App />
  </StrictMode>,
</ProductsProvider>
</CartProvider> 
</SidebarProvider>
);
