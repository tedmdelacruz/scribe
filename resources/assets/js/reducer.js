import { RENDER_MARKDOWN } from './actions'

const init = { title: '', text: '', content: '' }

function reducer(state = init, action) {
    switch(action.type) {
        case RENDER_MARKDOWN: {
            return {
                text:  action.payload.text,
                content:  action.payload.text // FIXME Render logic here
            }
        }
        default:
            return state
    }
}

export default reducer 
