import * as ContatoService from '../../core/services/contatoService'

function ObterTodosContatos(){
    return {
        type: 'OBTER_CONTATOS',
        payload: ContatoService.ObterTodosContatos()
    }
}

export {
    ObterTodosContatos
}