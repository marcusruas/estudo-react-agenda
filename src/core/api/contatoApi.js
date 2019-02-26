import axios from 'axios'

const TodosContatos = () => axios.get('https://localhost:5001/api/ContatoAPI/GetTodos')
const Adicionar = contato => {
    console.log(contato)
    axios.post('https://localhost:5001/api/ContatoAPI/AdicionarContato', contato) 
}

export {
    TodosContatos,
    Adicionar
}