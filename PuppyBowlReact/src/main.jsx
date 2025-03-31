import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { puppyBowlApi } from '../../../src/api/puppyBowlApi'
import App from '../../../src/App'
import './index.css'

// Create the store
const store = configureStore({
  reducer: {
    [puppyBowlApi.reducerPath]: puppyBowlApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(puppyBowlApi.middleware),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
) 