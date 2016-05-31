import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import reducer from './reducer'
import { EntryForm, RenderContainer } from './containers'

const store = createStore(reducer)

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
