var niveis = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal'];
var nivel;

function Ranking(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

const vitorias = 100;
const derrotas = 90;
const saldoVitorias = Ranking(vitorias, derrotas);

if (saldoVitorias <= 10) {
    nivel = niveis[0];
} else if (saldoVitorias > 11 && saldoVitorias <= 20) {
    nivel = niveis[1];
} else if (saldoVitorias > 21 && saldoVitorias <= 50) {
    nivel = niveis[2];
} else if (saldoVitorias > 51 && saldoVitorias <= 80) {
    nivel = niveis[3];
} else if (saldoVitorias > 81 && saldoVitorias <= 90) {
    nivel = niveis[4];
} else if (saldoVitorias > 91 && saldoVitorias <= 100) {
    nivel = niveis[5];
} else {
    nivel = niveis[6];
}

console.log(`O Herói tem um saldo de ${vitorias} está no nível ${nivel}`);
