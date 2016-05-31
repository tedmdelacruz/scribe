import { connect } from 'react-redux'

import * as components from './components'
import { renderMarkdown, publish } from './actions'

export const EntryForm = connect(
    function mapStateToProps(state) {
        return state 
    },
    function mapDispatchToProps(dispatch) {
        return {
            renderMarkdown: (title, content) => dispatch(renderMarkdown(title, content)),
            publish: (title, content) => dispatch(publish(title, content))
        }
    }
)(components.EntryForm)

export const RenderContainer = connect(
    function mapStateToProps(state) {
        return state
    }
)(components.RenderContainer)
