import React, { Component } from 'react'
import { StaggeredMotion, spring, presets } from 'react-motion'
import range from 'lodash.range'
import { markdown } from 'markdown'

class EntryListItem extends Component {
    render() {
        const { entry, isAuth, deleteEntry } = this.props
        const entryPermalink = `${window.baseUrl}/${entry.slug}`

        function handleDelete() {
            deleteEntry(this.props.entry)
        }

        return (
            <div className="entry">
                { entry.title ? <h1>{ entry.title }</h1> : null }
                { entry.author ? <p><em>Written by { entry.author }</em></p> : null }

                <div className="entry-content"
                    dangerouslySetInnerHTML={{ __html: markdown.toHTML(entry.content)} }></div>
                { isAuth ? <button className="btn btn-link btn-sm"
                    onClick={ handleDelete.bind(this) }>Delete</button> : null }

                <div className="entry-footer">
                    <a target="_blank" href={ entryPermalink }><i className="fa fa-link" aria-hidden="true"></i></a>
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

    getStyles(prevStyles) {
        let styles = prevStyles.map((_, i) => {
            return i === 0
                ? { posY: 0 }
                : { posY: spring(prevStyles[i - 1].posY, presets.gentle) }
        })
        return styles
    }

    render() {
        let { isFetching, entries, user, deleteEntry } = this.props

        return (
            <StaggeredMotion
                defaultStyles={ range(entries.size).map(() => ({ posY: -25 })) }
                styles={ this.getStyles }
            >
                { interpolatedStyles => 
                    <div class="entry-list">
                        <code>{ interpolatedStyles }</code>
                        { isFetching ? <Spinner /> : null }
                        { interpolatedStyles.map(({ posY }, index) => {
                            return <EntryListItem entry={ entries.get(index) } key={ index }
                                isAuth={ user ? true : false } deleteEntry={ deleteEntry }
                                style={{ transform: `translate3d(0, ${posY}px, 0)` }}/>
                        }) }
                    </div>
                }
            </StaggeredMotion>
        )
    }
}
