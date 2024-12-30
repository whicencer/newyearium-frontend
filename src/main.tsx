import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TelegramProvider from './providers/TelegramProvider.tsx'
import SubscriptionProvider from './providers/SubscriptionProvider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TelegramProvider>
      <SubscriptionProvider>
        <App />
      </SubscriptionProvider>
    </TelegramProvider>
  </StrictMode>,
)
