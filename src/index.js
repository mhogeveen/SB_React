import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

// Stylesheet import
import './sass/styles.scss'

// Component imports
import App from './components/App'

// Create Redux store with middleware
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.querySelector('#root')
)
