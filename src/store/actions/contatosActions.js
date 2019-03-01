import * as ContatoService from '../../core/services/contatoService'

function ObterTodosContatos(e){
    return {
        type: 'OBTER_CONTATOS',
        payload: ContatoService.ObterTodosContatos()
    }
}

export {
    ObterTodosContatos
}