const estadoInicial = {dados: [], travaContato: null}

export default function(state = estadoInicial, action){
    switch(action.type){
        case 'OBTER_CONTATOS':
            return{ ...state, dados: action.payload, travaContato: null }
        case 'EDITAR_CONTATO':
            return{ ...state, travaContato: state.travaContato? null : action.payload}
        default: 
            return state
    }
}