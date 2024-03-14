
var niveis = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Ascendente', 'Imortal', 'Radiante']
var nivel = ''

function nivelDoHeroi (nome, xp) {
    for (let i = 0; i < niveis.length; i++) {
        if (xp > 0 && xp <= 1000) {
            nivel = niveis[0];
        } else if (xp > 1001 && xp <= 2000) {
            nivel = niveis[1];
        } else if (xp > 2001 && xp <= 5000) {
            nivel = niveis[2];
        } else if (xp > 5001 && xp <= 7000) {
            nivel = niveis[3];
        } else if (xp > 7001 && xp <= 8000) {
            nivel = niveis[4];
        } else if (xp > 8001 && xp <= 9000) {
            nivel = niveis[5];
        } else if (xp > 9001 && xp <= 10000) {
            nivel = niveis[6];
        } else {
            nivel = niveis[7];
        }
    }

    console.log(`O Herói de nome ${nome} está no nível ${nivel}`)
}

nivelDoHeroi('Wesley', 500)