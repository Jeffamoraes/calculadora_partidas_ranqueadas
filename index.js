function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no saldo de vitórias
    let nivel;

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    // Monta a mensagem de saída
    const mensagem = `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;

    // Retorna a mensagem
    return mensagem;
}

// Exemplo de uso da função
const vitorias = 60;
const derrotas = 20;
const resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem de saída
console.log(resultado); // Exibirá "O Herói tem um saldo de 40 e está no nível de Ouro"
