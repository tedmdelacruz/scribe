import React from 'react'
import { render } from 'react-dom'
import { markdown } from 'markdown'

const entryContainer = document.getElementById('view-entry')
const entry = JSON.parse(entryContainer.dataset.entry)

render(
    <div className="entry">
        { entry.title ? <h1>{ entry.title }</h1> : null }
        { entry.author ? <p><em>Written by { entry.author }</em></p> : null }
        <div className="entry-content"
            dangerouslySetInnerHTML={{ __html: markdown.toHTML(entry.content)}}></div>
    </div>,
    entryContainer
)
