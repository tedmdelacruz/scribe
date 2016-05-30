import { List, Map } from 'immutable';

const init = List([]);

export default function reducer(entries=init, action) {
    switch(action.type) {
        // FIXME
        default:
            return entries
    }
}

