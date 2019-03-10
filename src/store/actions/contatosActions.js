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

export function ContatoParaEdicao(contato){
    return {
        type: 'TRAVAR_CONTATO',
        payload: contato
    }
}

export function AtualizarContato(contato){
    return dispatch => {
        ContatoService.AtualizarContato(contato).then(done => dispatch(ObterTodosContatos()))
    }
}

export function AtualizarNome(e){
    return {
        type: 'ATUALIZAR_NOME_CONTATO_TRAVADO',
        payload: e.target.value
    }
}

export function AtualizarSexo(e){
    return {
        type: 'ATUALIZAR_SEXO_CONTATO_TRAVADO',
        payload: e
    }
}

export function AtualizarIdade(e){
    return {
        type: 'ATUALIZAR_IDADE_CONTATO_TRAVADO',
        payload: e
    }
}

export function AtualizarTelefone(e){
    return {
        type: 'ATUALIZAR_TELEFONE_CONTATO_TRAVADO',
        payload: e
    }
}