import { RENDER_MARKDOWN, START_PUBLISH,
    FINISH_PUBLISH } from './actions'
import { markdown } from 'markdown'
import axios from 'axios'

function reducer(state = {
    entry: {
        title: '',
        author: '',
        content: '',
        renderedContent: ''
    },
    isEditing: false,
    isPublishing: false,
    isSaved: false
}, action) {
    switch(action.type) {
        case RENDER_MARKDOWN:
            const { title, author, content } = action.entry
            return Object.assign({}, state, {
                entry: {
                    title, author, content, 
                    renderedContent: markdown.toHTML(action.entry.content)
                },
                isPristine: false,
                isSaved: false
            })
        case START_PUBLISH: 
            return Object.assign({}, state, {
                isPublishing: true,
                isSaved: false
            })
        case FINISH_PUBLISH:
            return Object.assign({}, state, {
                isPublishing: false,
                isSaved: true,
                isEditing: true,
                entry: action.entry
            })
        default:
            return state
    }
}

export default reducer 
