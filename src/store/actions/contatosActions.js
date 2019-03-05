import * as ContatoService from '../../core/services/contatoService'

function ObterTodosContatos(){
    return {
        type: 'OBTER_CONTATOS',
        payload: ContatoService.ObterTodosContatos()
    }
}

function RemoverContato(contato){
    return {
        type: 'REMOVER_CONTATO',
        payload: ContatoService.RemoverContato(contato)
    }
}

export {
    ObterTodosContatos,
    RemoverContato
}