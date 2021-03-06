import axios from 'axios'

export const REQUEST_ENTRIES = 'REQUEST_ENTRIES'
function requestEntries() {
    return {
        type: REQUEST_ENTRIES
    }
}

export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
function receiveEntries(entries) {
    return {
        type: RECEIVE_ENTRIES,
        entries
    }
}

export const FETCH_ENTRIES = 'FETCH_ENTRIES'
export function fetchEntries() {
    return dispatch => {
        dispatch(requestEntries())
        return axios.get('/entries')
            .then(response => {
                dispatch(receiveEntries(response.data))
            })
    }
}

export const START_DELETE_ENTRY = 'START_DELETE_ENTRY'
function startDeleteEntry(entry) {
    return {
        type: START_DELETE_ENTRY,
        entry
    }
}

export const DELETE_ENTRY = 'DELETE_ENTRY'
export function deleteEntry(entry) {
    return dispatch => {
        dispatch(startDeleteEntry(entry))
        return axios.delete('/entry/' + entry.id)
            .then(response => {
                dispatch(fetchEntries())
            })
    }
}
