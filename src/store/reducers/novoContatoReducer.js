import * as ContatoService from '../../core/services/contatoService'

const estadoInicial = {Nome: '', Sexo: 'M', Idade: null, Telefone: ''}

export default function(state = estadoInicial, action){
    switch(action.type){
        case 'NOME_ATUALIZADO':
            return {...state, Nome: action.payload }
        case 'SEXO_ATUALIZADO':
            return {...state, Sexo: action.payload}
        case 'IDADE_ATUALIZADA':
            return {...state, Idade: action.payload}
        case 'TELEFONE_ATUALIZADO':
            return {...state, Telefone: action.payload}
        case 'CADASTRAR_CONTATO':
            ContatoService.AdicionarContato(state)
            return estadoInicial
        default: 
            return state
    }
}