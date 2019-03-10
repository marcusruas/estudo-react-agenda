const estadoInicial = {dados: [], travaContato: null}

export default function(state = estadoInicial, action){
    switch(action.type){
        case 'OBTER_CONTATOS':
            return{ ...state, dados: action.payload, travaContato: null }
        case 'TRAVAR_CONTATO':
            return{ ...state, travaContato: state.travaContato? null : action.payload}
        case 'ATUALIZAR_NOME_CONTATO_TRAVADO':
            return{ ...state, travaContato: {...state.travaContato, Nome: action.payload}}
        case 'ATUALIZAR_SEXO_CONTATO_TRAVADO':
            return{ ...state, travaContato: {...state.travaContato, Sexo: action.payload}}
        case 'ATUALIZAR_IDADE_CONTATO_TRAVADO':
            return{ ...state, travaContato: {...state.travaContato, Idade: action.payload}}
        case 'ATUALIZAR_TELEFONE_CONTATO_TRAVADO':
            return{ ...state, travaContato: {...state.travaContato, Telefone: action.payload}}
        default: 
            return state
    }
}