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

const user = document.getElementById('entry-list').dataset.user

render(
    <Provider store={store}>
        <EntryList user={user}/>
    </Provider>,
    document.getElementById('entry-list')
)
