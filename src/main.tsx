import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';          // Estilos principales de PrimeReact
import 'primeicons/primeicons.css';                        // Iconos de PrimeReact
import 'primeflex/primeflex.css';                          // Sistema de diseño de PrimeFlex

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
