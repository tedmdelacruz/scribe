import { RENDER_MARKDOWN, PUBLISH_ENTRY } from './actions'
import { markdown } from 'markdown'
import axios from 'axios'

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
        case PUBLISH_ENTRY: {
            axios.post('/entry', action.payload)
                .then((response) => {
                    // FIXME
                })
                .catch((response) => {
                    // FIXME
                })

            return state
        }
        default:
            return state
    }
}

export default reducer 
