export const RENDER_MARKDOWN = 'RENDER_MARKDOWN'
export const PUBLISH_ENTRY = 'PUBLISH_ENTRY'

export function renderMarkdown(title, content) {
    return {
        type: RENDER_MARKDOWN,
        payload: {
            title: title,
            content: content 
        }
    }
}

export function publish(title, content) {
    return {
        type: PUBLISH_ENTRY,
        payload: {
            title: title,
            content: content 
        }
    }
}
