export const RENDER_MARKDOWN = 'RENDER_MARKDOWN'

export function renderMarkdown(title, content) {
    return {
        type: RENDER_MARKDOWN,
        payload: {
            title: title,
            content: content 
        }
    }
}
