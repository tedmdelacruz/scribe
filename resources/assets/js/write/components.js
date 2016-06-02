import React, { Component } from 'react'

export class EntryForm extends Component {

    render() {
        const { renderMarkdown, publish,
            isPublishing, isPristine, isSaved,
            isEditing} = this.props
        let { entry } = this.props

        const handleTitleChange = (event) => {
            entry.title = event.target.value
            renderMarkdown(entry)
        }

        const handleContentChange = (event) => {
            entry.content = event.target.value
            renderMarkdown(entry)
        }

        const handlePublish = (event) => {
            event.preventDefault()
            publish(entry)
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
                        <button className="btn btn-link" onClick={handlePublish}>
                            { !isPublishing && !isSaved && isEditing ? 'Save Changes' : null }
                            { !isPublishing && !isSaved && !isEditing ? 'Publish' : null }
                            { isPublishing ? 'Publishing' : null }
                            { isSaved ? 'Saved' : null }
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export class RenderContainer extends Component {

    render() {
        const { entry } = this.props
        const { title, renderedContent } = entry

        return (
            <div className="entry">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: renderedContent }}></div>
            </div>
        )
    }
}
