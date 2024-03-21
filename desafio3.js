class Heroi {

    constructor( nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar() {
        const tiposDeAtaque ={
            guerreiro: 'espada',
            mago: 'magia',
            monge: 'artes marciais',
            ninja: 'shuriken'
        }

        const ataque = tiposDeAtaque[this.tipo] || 'ataque desconhecido';
        console.log(`O tipo ${this.tipo} atacou usando ${ataque}`);
    }

}

let heroi1 = new Heroi('napodiniks', 29, 'mago')
heroi1.atacar()
