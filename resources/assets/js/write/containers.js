import { connect } from 'react-redux'

import * as components from './components'
import { renderMarkdown, publish } from './actions'

export const EntryForm = connect(
    function mapStateToProps(state) {
        return state 
    },
    function mapDispatchToProps(dispatch) {
        return {
            renderMarkdown: (entry) => dispatch(renderMarkdown(entry)),
            publish: (entry) => dispatch(publish(entry))
        }
    }
)(components.EntryForm)

export const RenderContainer = connect(
    function mapStateToProps(state) {
        return state
    }
)(components.RenderContainer)
