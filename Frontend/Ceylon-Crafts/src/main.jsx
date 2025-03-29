import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <StrictMode>
          <RecoilRoot>
            <ShopContextProvider>
              <App/>
            </ShopContextProvider>
          </RecoilRoot>
      </StrictMode>
  </BrowserRouter>
)
