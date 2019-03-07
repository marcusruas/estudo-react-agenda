import * as ContatoApi from '../api/contatoApi'
import { toastr } from 'react-redux-toastr'
import ContatoFactory from '../models/contatoFactory'

const ObterTodosContatos = async () => {
    try {
        const response = await ContatoApi.TodosContatos()
        return response.data.map(ContatoFactory.build)
    } catch (error) {
        throw error
    }
}

const AdicionarContato = async (contato) => {
    try {
        const response = await ContatoApi.Adicionar(contato)
        toastr.success("Sucesso!", `${contato.Nome} Cadastrado com sucesso!`)
        return response.data
    } catch (error) {
        toastr.error("Erro ao cadastrar!", `${error}`)
        throw error
    }
}

const RemoverContato = async (contato) => {
    try{
        const request = await ContatoApi.Remover(contato)
        if(request.data.resultado){
            toastr.success("Sucesso!", `${contato.Nome} Removido com sucesso!`)
        }else{
            toastr.error("Erro ao Deletar!", `Houve um problema no banco de dados`)
        }
    } catch (error) {
        toastr.error("Erro ao Deletar!", `${error}`)
        throw error
    }
}

export { ObterTodosContatos, AdicionarContato, RemoverContato }
