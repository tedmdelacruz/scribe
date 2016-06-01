import { connect } from 'react-redux'

import * as components from './components'
// import { action } from './actions'

export const EntryList = connect(
    function mapStateToProps(state) {
        return state 
    },
    function mapDispatchToProps(dispatch) {
        return {
            // action: (title, content) => dispatch(action(title, content)),
        }
    }
)(components.EntryList)
