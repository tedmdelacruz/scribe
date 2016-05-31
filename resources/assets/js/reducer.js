import { RENDER_MARKDOWN } from './actions'
import { markdown } from 'markdown'

const init = {
    title: '',
    content: '',
    renderedContent: ''
}

function reducer(state = init, action) {
    switch(action.type) {
        case RENDER_MARKDOWN: {
            const {title, content} = action.payload

            let renderedContent = markdown.toHTML(content) 

            return { title, content, renderedContent }
        }
        default:
            return state
    }
}

export default reducer 
