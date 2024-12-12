import { StrictMode } from 'react' // tipo use strict

import { createRoot } from 'react-dom/client' //renderizza la mia applicazione nel div che scrivo

//link bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

//my custom style.css
import './style.css'

// importo il file che è il tag custom che userò nella createRoot
import App from './App.jsx'


//crea l'applicazione .render è un altro metodo che mi permette di renderizzare il primo elemento della radice.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

