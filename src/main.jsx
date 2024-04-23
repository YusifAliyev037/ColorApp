import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from './store/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
    </BrowserRouter>
  </ChakraProvider>
)
