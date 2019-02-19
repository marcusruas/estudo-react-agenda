import Contato from './contato'

export default class ContatoFactory{
    static build(json){
        return new Contato(...json)
    }
}