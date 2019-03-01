import { combineReducers } from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

import novoContatoReducer from './reducers/novoContatoReducer'
import contatosReducer from './reducers/contatosReducer'

const Reducers = combineReducers({
    contatos: contatosReducer,
    novoContato: novoContatoReducer,
    toastr: toastrReducer
})

export default Reducers