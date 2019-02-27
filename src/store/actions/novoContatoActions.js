import * as ContatoService from '../../core/services/contatoService'

function MudarNome(e){
    return {
        type: 'NOME_ATUALIZADO',
        payload: e.target.value
    }
}

function MudarSexo(e){
    return {
        type: 'SEXO_ATUALIZADO',
        payload: e
    }
}

function MudarIdade(e){
    return {
        type: 'IDADE_ATUALIZADA',
        payload: e
    }
}

function MudarTelefone(e){
    return {
        type: 'TELEFONE_ATUALIZADO',
        payload: e
    }
}

function CadastrarContato(e){
    e.preventDefault()
    return {
        type: 'CADASTRAR_CONTATO'
    }
}

export {
    MudarNome,
    MudarSexo,
    MudarIdade,
    MudarTelefone,
    CadastrarContato
}