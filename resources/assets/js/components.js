import React from 'react'

export function EntryForm(props) {
    const { title, text, content, renderMarkdown } = props

    const handleChange = (event) => {
        const textarea = event.target
        const text = textarea.value
        renderMarkdown(text)
    }

    return (
        <form>
            <div className="form-group">
                <input type="text" className="form-control input-lg" placeholder="Title" name="title" />
            </div>

            <div className="form-group">
                <textarea name="content" id="" cols="30" rows="20" className="form-control input-lg"
                    placeholder="Content" onChange={handleChange}></textarea>
            </div>

            <div className="form-group">
                <div className="btn-group pull-right">
                    <button className="btn btn-primary btn-lg">Publish</button>
                </div>
            </div>
        </form>
    )
}

export function RenderContainer(props) {
    const { content } = props

    return (
        <div>{content}</div>
    )
}
