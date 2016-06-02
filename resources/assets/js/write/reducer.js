import { RENDER_MARKDOWN, REQUEST_PUBLISH_ENTRY } from './actions'
import { markdown } from 'markdown'
import axios from 'axios'

function reducer(state = {
    entry: {
        title: '',
        content: '',
        renderedContent: ''
    },
    isPublishing: false,
    isPristine: true,
    isSaved: false
}, action) {
    switch(action.type) {
        case RENDER_MARKDOWN:
            const { title, content } = action.entry
            return Object.assign({}, state, {
                entry: {
                    title, content, 
                    renderedContent: markdown.toHTML(action.entry.content)
                },
                isPristine: false
            })
        case REQUEST_PUBLISH_ENTRY: 
            return Object.assign({}, state, {
                isPublishing: true,
                entry: action.entry
            })
        default:
            return state
    }
}

export default reducer 
