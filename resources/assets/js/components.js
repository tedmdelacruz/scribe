import React from 'react'

export function EntryForm(props) {
    const { renderMarkdown } = props
    let { title, content } = props

    const handleTitleChange = (event) => {
        title = event.target.value
        renderMarkdown(title, content)
    }

    const handleContentChange = (event) => {
        content = event.target.value
        renderMarkdown(title, content)
    }

    return (
        <form>
            <div className="form-group">
                <input type="text" className="form-control input-lg"
                    placeholder="Title" onChange={handleTitleChange} />
            </div>

            <div className="form-group">
                <textarea cols="30" rows="20" className="form-control input-lg"
                    placeholder="Content" onChange={handleContentChange}></textarea>
            </div>

            <div className="form-group">
                <div className="btn-group">
                    <button className="btn btn-link">Save as Draft</button>
                    <button className="btn btn-link">Publish</button>
                </div>
            </div>
        </form>
    )
}

export function RenderContainer(props) {
    const { title, renderedContent } = props

    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: renderedContent }}></div>
        </div>
    )
}
