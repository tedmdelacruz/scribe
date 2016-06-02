import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

import reducer from './reducer'
import { EntryList } from './containers'

const loggerMiddleware = createLogger()
const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

render(
    <Provider store={store}>
        <EntryList />
    </Provider>,
    document.getElementById('entry-list')
)
