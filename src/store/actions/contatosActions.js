import * as ContatoService from '../../core/services/contatoService'

export function ObterTodosContatos(){
    return {
        type: 'OBTER_CONTATOS',
        payload: ContatoService.ObterTodosContatos()
    }
}

export function RemoverContato(contato){
    return dispatch => {
        ContatoService.RemoverContato(contato).then(done => dispatch(ObterTodosContatos()))
    }
}

export function AtualizarContato(contato){
    return {
        type: 'EDITAR_CONTATO',
        payload: contato
    }
}