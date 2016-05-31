import { connect } from 'react-redux'
import * as components from './components'
import { addEntry, getEntries } from './actions'

export const EntryForm = connect(
    function mapStateToProps(state) {
        return {}
    },
    function mapDispatchToProps(dispatch) {
        return {}
    }
)(components.EntryForm)

export const RenderContainer = connect(
    function mapStateToProps(state) {
        return {}
    },
    function mapDispatchToProps(dispatch) {
        return {}
    }
)(components.RenderContainer)
