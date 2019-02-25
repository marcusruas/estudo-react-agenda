import { combineReducers } from 'redux'

const Reducers = combineReducers({
    contatos: () => ({ dados: [] }),
    novoContato: () => ({ Nome: '', Sexo: "M", Idade: 1, Telefone: 1 })
})

export default Reducers