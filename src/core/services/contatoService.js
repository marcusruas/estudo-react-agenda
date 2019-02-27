import * as ContatoApi from '../api/contatoApi'
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
        return response.data
    } catch (error) {
        throw error
    }
}

export { ObterTodosContatos, AdicionarContato }
