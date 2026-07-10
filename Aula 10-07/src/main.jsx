import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Tasks from './assets/components/Tasks.jsx'
import AddTask from './assets/components/AddTask.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Tasks />
    <AddTask />
  </StrictMode>,
)
