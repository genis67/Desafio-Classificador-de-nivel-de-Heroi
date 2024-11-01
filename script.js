// script.js

// Função para classificar o herói
function classificarHeroi() {
    // Obtém os valores das caixas de texto
    let nome = document.getElementById("nome").value;
    let xp = parseInt(document.getElementById("xp").value);

    // Validação para garantir que `xp` é um número
    if (isNaN(xp)) {
        document.getElementById("resultado").innerText = "Por favor, insira um valor numérico para o XP.";
    } else {
        // Variável para armazenar o nível do herói
        let nivel = "";

        // Estrutura de decisão para definir o nível
        if (xp <= 1000) {
            nivel = "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
            nivel = "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
            nivel = "Prata";
        } else if (xp >= 5001 && xp <= 7000) {
            nivel = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            nivel = "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            nivel = "Imortal";
        } else if (xp >= 10001) {
            nivel = "Radiante";
        }

        // Exibe o resultado na página HTML
        document.getElementById("resultado").innerText = `O Herói de nome ${nome} está no nível de ${nivel}`;
    }
}

// Adiciona um evento de clique ao botão
document.getElementById("submit").addEventListener("click", classificarHeroi);
