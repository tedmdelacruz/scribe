import React, { Component } from 'react'
import { markdown } from 'markdown'

class Entry extends Component {
    render() {
        const { entry, deleteEntry } = this.props
        const entryPermalink = `${window.baseUrl}/${entry.slug}`

        function handleDelete(event) {
            event.preventDefault()
            deleteEntry(this.props.entry)
        }

        const deleteBtn = deleteEntry
            ? <a href="#" onClick={ handleDelete.bind(this) } className="btn btn-default">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </a>
            : null

        return (
            <div className="entry clearfix">
                { entry.title ? <h1>{ entry.title }</h1> : null }
                { entry.author ? <p><em>Written by { entry.author }</em></p> : null }
                <div className="entry-content"
                    dangerouslySetInnerHTML={{ __html: markdown.toHTML(entry.content)}}></div>
                <div className="entry-footer pull-right">
                    <div className="btn-group">
                        <a className="btn btn-default" target="_blank" href={ entryPermalink }>
                            <i className="fa fa-link" aria-hidden="true"></i>
                        </a> 
                        { deleteBtn }
                    </div>
                </div>
            </div>
        )
    }
}

class Spinner extends Component {
    render() {
        return (
            <div className="spinner">Fetching entries...</div>
        )
    }
}

export class EntryList extends Component {
    componentWillMount() {
        this.props.fetchEntries()
    }

    render() {
        let { isFetching, entries, user, deleteEntry } = this.props

        if ( ! user) {
            deleteEntry = null
        }

        return (
            <div class="entry-list">
                { isFetching ? <Spinner /> : null }
                { entries.map((entry, index) => {
                    return <Entry entry={ entry } key={ index }
                        deleteEntry={ deleteEntry }/>
                }) }
            </div>
        )
    }
}
