import { combineReducers } from 'redux'

import novoContatoReducer from './reducers/novoContatoReducer'

const Reducers = combineReducers({
    contatos: () => ({ dados: [] }),
    novoContato: novoContatoReducer
})

export default Reducers