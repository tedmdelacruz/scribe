import React, { Component } from 'react'
import { markdown } from 'markdown'

class Entry extends Component {
    render() {
        let { entry, index } = this.props

        return (
            <div className="entry" key={index}>
                <h1>{entry.title}</h1>
                <div className="entry-content"
                    dangerouslySetInnerHTML={{ __html: markdown.toHTML(entry.content)}}></div>
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
        let { isFetching, entries } = this.props

        return (
            <div class="entry-list">
                {isFetching ? <Spinner /> : null}
                {entries.map((entry, index) => {
                    return <Entry entry={entry} index={index} />
                })}
            </div>
        )
    }
}
