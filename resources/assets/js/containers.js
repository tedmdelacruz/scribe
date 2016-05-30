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

export const EntryList = connect(
    function mapStateToProps(state) {
        return {}
    },
    function mapDispatchToProps(dispatch) {
        return {}
    }
)(components.EntryList)