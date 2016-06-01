import React, { Component } from 'react'

export class EntryForm extends Component {

    render() {
        const { renderMarkdown, publish } = this.props
        let { title, content } = this.props

        const handleTitleChange = (event) => {
            title = event.target.value
            renderMarkdown(title, content)
        }

        const handleContentChange = (event) => {
            content = event.target.value
            renderMarkdown(title, content)
        }

        const handlePublish = (event) => {
            event.preventDefault()
            publish(title, content)
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
                        <button className="btn btn-link" onClick={handlePublish}>Publish</button>
                    </div>
                </div>
            </form>
        )
    }
}

export class RenderContainer extends Component {

    render() {
        const { title, renderedContent } = this.props

        return (
            <div className="entry">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: renderedContent }}></div>
            </div>
        )
    }
}
