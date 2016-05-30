import { connect } from 'react-redux'
import * as components from './components'
import { addEntry, getEntries } from './actions'

export const EntriesList = connect(
    function mapStateToProps(state) {
        return { entries: state }
    },
    function mapDispatchToProps(dispatch) {
        return {

        }
    }
)(components.EntriesList)