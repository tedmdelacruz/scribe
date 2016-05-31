import { RENDER_MARKDOWN } from './actions'

const init = { title: '', content: '', renderedContent: '' }

function reducer(state = init, action) {
    switch(action.type) {
        case RENDER_MARKDOWN: {
            const {title, content} = action.payload

            // FIXME Render logic here
            let renderedContent = content 

            return { title, content, renderedContent }
        }
        default:
            return state
    }
}

export default reducer 
