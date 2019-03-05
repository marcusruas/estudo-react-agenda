import axios from 'axios'

const TodosContatos = () => axios.get('https://localhost:5001/api/ContatoAPI/GetTodos')
const Adicionar = contato => axios.post('https://localhost:5001/api/ContatoAPI/AdicionarContato', contato) 
const Remover = contato => axios.delete('https://localhost:5001/api/ContatoAPI/RemoverContato', { data: contato })

export {
    TodosContatos,
    Adicionar,
    Remover
}