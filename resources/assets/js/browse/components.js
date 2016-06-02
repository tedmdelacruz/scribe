import React, { Component } from 'react'
import { markdown } from 'markdown'

class Entry extends Component {
    render() {
        let { entry, isAuth, deleteEntry } = this.props

        function handleDelete() {
            deleteEntry(this.props.entry)
        }

        return (
            <div className="entry">
                { entry.title ? <h1>{ entry.title }</h1> : null }
                { entry.author ? <p><em>by { entry.author }</em></p> : null }
                <div className="entry-content"
                    dangerouslySetInnerHTML={{ __html: markdown.toHTML(entry.content)}}></div>
                { isAuth ? <button className="btn btn-link btn-sm"
                    onClick={ handleDelete.bind(this) }>Delete</button> : null }
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

        return (
            <div class="entry-list">
                { isFetching ? <Spinner /> : null }
                { entries.map((entry, index) => {
                    return <Entry entry={ entry } key={ index }
                        isAuth={ user ? true : false } deleteEntry={ deleteEntry }/>
                }) }
            </div>
        )
    }
}
