import React, { Component } from 'react'

export class EntryForm extends Component {
    render() {
        const { renderMarkdown, publish,
            isPublishing, isPristine, isSaved,
            isEditing} = this.props
        let { entry } = this.props

        const handleTitleChange = event => {
            entry.title = event.target.value
            renderMarkdown(entry)
        }

        const handleContentChange = event => {
            entry.content = event.target.value
            renderMarkdown(entry)
        }

        const handleAuthorChange = event => {
            entry.author = event.target.value
            renderMarkdown(entry)
        }

        const handlePublish = event => {
            event.preventDefault()
            publish(entry)
        }

        return (
            <form>
                <div className="form-group">
                    <input type="text" className="form-control input-lg"
                        placeholder="Title" onChange={ handleTitleChange } />
                </div>

                <div className="form-group">
                    <textarea cols="30" rows="20" className="form-control input-lg"
                        placeholder="Content" onChange={ handleContentChange }></textarea>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control input-lg"
                        placeholder="Author" onChange={ handleAuthorChange } />
                </div>

                <div className="form-group">
                    <div className="btn-group">
                        <button className="btn btn-link" onClick={ handlePublish }>
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
        const { entry, isSaved, isEditing } = this.props
        return (
            <div className="entry">
                { entry.title ? <h1>{ entry.title }</h1> : null }
                { entry.author ? <p><em>by { entry.author }</em></p> : null }
                <div dangerouslySetInnerHTML={{ __html: entry.renderedContent }}></div>
            </div>
        )
    }
}

export class Permalink extends Component {
    render() {
        const { entry } = this.props

        if ( ! entry.id) {
            return null
        }

        const entryPermalink = `${window.baseUrl}/${entry.slug}`

        return (
            <div className="row">
                <div className="col-xs-8 col-xs-offset-4">
                    <div className="row">
                        <div className="col-xs-3">
                            <a href={ entryPermalink } target="_blank" className="btn btn-link">View Entry</a>
                        </div>
            
                        <div className="col-xs-9">
                            <input type="text" className="form-control" value={ entryPermalink }
                                onClick={ event => { event.target.select() } } onChange={() => {}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}