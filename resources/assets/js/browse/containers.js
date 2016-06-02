import { connect } from 'react-redux'

import * as components from './components'
import { fetchEntries } from './actions'

export const EntryList = connect(
    function mapStateToProps(state) {
        return state 
    },
    function mapDispatchToProps(dispatch) {
        return {
            fetchEntries: () => dispatch(fetchEntries()),
        }
    }
)(components.EntryList)
