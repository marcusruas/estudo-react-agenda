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
        await ContatoApi.Adicionar(contato)
    } catch (error) {
        throw error
    }
}

export { ObterTodosContatos, AdicionarContato }
