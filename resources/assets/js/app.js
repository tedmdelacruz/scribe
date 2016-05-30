import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import reducer from './reducer'
import { EntriesList } from './containers'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <EntriesList />
    </Provider>,
    document.getElementById('app')
)
