import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FormProvider } from "./context/formContext";


createRoot(document.getElementById('root')!).render(
 <FormProvider>
  <App />
</FormProvider>,
)
