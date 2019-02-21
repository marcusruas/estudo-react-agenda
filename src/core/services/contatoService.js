import * as ContatoApi from '../api/contatoApi'
import ContatoFactory from '../models/contatoFactory'

const ObterTodosContatos = async () => {
    try {
        const response = await ContatoApi.TodosContatos()
        const listaRetorno = []
        for(let i = 0; i < response.data.length; i++){
            let obj = ContatoFactory.build(response.data[i])
            listaRetorno.push(obj)
        }
        return listaRetorno
    } catch (error) {
        throw error
    }
}

const AdicionarContato = async (contato) => {
    try {
        const response = await ContatoApi.Adicionar(contato)
    } catch (error) {
        throw error
    }
}

export { ObterTodosContatos, AdicionarContato }
