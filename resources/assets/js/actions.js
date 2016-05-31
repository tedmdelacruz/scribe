export const RENDER_MARKDOWN = 'RENDER_MARKDOWN'

export function renderMarkdown(text) {
    return {
        type: RENDER_MARKDOWN,
        payload: {
            text: text
        }
    }
}
