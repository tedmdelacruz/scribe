export const RENDER_MARKDOWN = 'RENDER_MARKDOWN'
export function renderMarkdown(entry) {
    return {
        type: RENDER_MARKDOWN,
        entry
    }
}

export const REQUEST_PUBLISH_ENTRY = 'REQUEST_PUBLISH_ENTRY'
export function publish(entry) {
    return {
        type: REQUEST_PUBLISH_ENTRY,
        entry
    }
}
