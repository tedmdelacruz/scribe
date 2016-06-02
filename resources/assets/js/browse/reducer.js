import { List } from 'immutable'

import { REQUEST_ENTRIES, RECEIVE_ENTRIES,
    START_DELETE_ENTRY } from './actions'

function reducer(state = {
    isFetching: false,
    entries: new List([])
}, action) {
    switch(action.type) {
        case REQUEST_ENTRIES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_ENTRIES: 
            return Object.assign({}, state, {
                isFetching: false,
                entries: new List(action.entries)
            })
        case START_DELETE_ENTRY: 
            // FIXME
            return state
        default:
            return state
    }
}

export default reducer 
