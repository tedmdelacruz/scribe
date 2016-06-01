import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import reducer from './reducer'
import { EntryList } from './containers'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <EntryList />
    </Provider>,
    document.getElementById('entry-list')
)
