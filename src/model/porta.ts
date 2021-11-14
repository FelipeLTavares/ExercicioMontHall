export default class PortaModel {
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor (numero: number, temPresente=false, selecionada=false, aberta=false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }
    //Métodos GET
    get numero () {
        return this.#numero
    }
    get temPresente () {
        return this.#temPresente
    }
    get selecionada () {
        return this.#selecionada
    }
    get aberta () {
        return this.#aberta
    }
    
    get fechada () {
        return !this.#aberta
    }

    //Métodos alternar
    alternarSelecao () {
        const selecionada = !this.selecionada
        return new PortaModel (this.numero, this.temPresente, selecionada, this.aberta)
    }
    desselecionar  () {
        const selecionada = false
        return new PortaModel (this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir () {
        const aberta = true
        return new PortaModel (this.numero, this.temPresente, this.selecionada, aberta)
    }

}