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
        <form>
            <div className="form-group">
                <input type="text" className="form-control input-lg" placeholder="Title" name="title" />
            </div>

            <div className="form-group">
                <textarea name="content" id="" cols="30" rows="20" className="form-control input-lg"
                    placeholder="Content"></textarea>
            </div>

            <div className="form-group">
                <div className="btn-group pull-right">
                    <button className="btn btn-primary btn-lg">Publish</button>
                </div>
            </div>
        </form>
    )
}

export function RenderContainer() {
    return (
        <div></div>
    )
}
