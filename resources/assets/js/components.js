import React from 'react'

export function Entry(props) {
    const { entry } = props

    return (
        <div>
            This is an Entry component
        </div>
    )
}

export function EntryForm() {
    return (
        <div>
            <div className="form-group">
                <input type="text" className="form-control input-lg" placeholder="Title" name="title"/>
            </div>

            <div className="form-group">
                <textarea name="content" id="" cols="30" rows="5" className="form-control input-lg"
                    placeholder="Content"></textarea>
            </div>

            <div className="form-group">
                <div className="btn-group pull-right">
                    <button className="btn btn-primary">Publish</button>
                </div>
            </div>
        </div>
    )
}

export function EntryList() {
    return (
        <div className="panel panel-default entry">
            <div className="panel-body">
                <h3><code>title</code></h3>
                <hr/>
                <p><code>content</code></p>
                <small><em>Written by: <code>username</code> on <code>created_at</code></em></small>
                <div className="pull-right">
                    <button className="btn btn-sm btn-link">Delete</button>
                </div>
            </div>
        </div>
    )
}
