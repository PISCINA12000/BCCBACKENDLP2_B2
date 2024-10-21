import CategoriaDAO from "../Persistencia/categoriaDAO.js";

export default class Categoria{
    #codigo;
    #nome;

    constructor(codigo, nome) {
        this.#codigo = codigo;
        this.#nome = nome;
    }

    getCodigo() {
        return this.#codigo;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    setCodigo(codigo) {
        this.#codigo = codigo;
    }

    toJSON() {
        return {
            "codigo": this.#codigo,
            "nome": this.#nome
        };
    }

    async gravar(){
        const catDAO = new CategoriaDAO()
        await catDAO.gravar(this)
    }

    async editar(){
        const catDAO = new CategoriaDAO()
        await catDAO.editar(this)
    }

    async excluir(){
        const catDAO = new CategoriaDAO()
        await catDAO.excluir(this)
    }

    async consultar(){
        const catDAO = new CategoriaDAO()
        return await catDAO.consultar(this)
    }
}