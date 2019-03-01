import { combineReducers } from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

import novoContatoReducer from './reducers/novoContatoReducer'

const Reducers = combineReducers({
    contatos: () => ({ dados: [] }),
    novoContato: novoContatoReducer,
    toastr: toastrReducer
})

export default Reducers