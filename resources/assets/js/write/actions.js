import axios from 'axios'

export const RENDER_MARKDOWN = 'RENDER_MARKDOWN'
export function renderMarkdown(entry) {
    return {
        type: RENDER_MARKDOWN,
        entry
    }
}

export const START_PUBLISH = 'START_PUBLISH'
function startPublish() {
    return {
        type:START_PUBLISH 
    }
}

export const FINISH_PUBLISH = 'FINISH_PUBLISH'
function finishPublish(entry) {
    return {
        type: FINISH_PUBLISH,
        entry
    }
}

export const PUBLISH_ENTRY = 'PUBLISH_ENTRY'
export function publish(entry) {
    return dispatch => {
        dispatch(startPublish())
        return axios.post('/entry', entry)
            .then(response => {
                dispatch(finishPublish(response.data))
            })
    }
}
