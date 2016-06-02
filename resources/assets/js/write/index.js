import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'
import { EntryForm, RenderContainer, Permalink } from './containers'

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
)

render(
    <Provider store={store}>
        <EntryForm />
    </Provider>,
    document.getElementById('entry-form')
)

render(
    <Provider store={store}>
        <RenderContainer />
    </Provider>,
    document.getElementById('render-container')
)

render(
    <Provider store={store}>
        <Permalink />
    </Provider>,
    document.getElementById('permalink')
)
