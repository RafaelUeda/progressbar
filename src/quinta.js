// Função para calcular a porcentagem de progresso com base no tempo
function atualizarProgresso() {
    const inicioTrabalho = new Date();
    inicioTrabalho.setHours(8, 0, 0); // 08:00

    const fimTrabalho = new Date();
    fimTrabalho.setHours(12, 0, 0); // 12:00

    const agora = new Date();

    // Se a hora atual estiver fora do horário de trabalho, ajusta o progresso
    let progresso = 0;
    if (agora < inicioTrabalho) {
        progresso = 0;
    } else if (agora > fimTrabalho) {
        progresso = 100;
    } else {
        const totalSegundosDia = (fimTrabalho - inicioTrabalho) / 1000;
        const segundosPassados = (agora - inicioTrabalho) / 1000;
        progresso = (segundosPassados / totalSegundosDia) * 100;
    }

    document.getElementById('progress-bar').style.width = progresso + '%';
    document.getElementById('progress-percentage').textContent = Math.floor(progresso) + '%';
}

// Atualiza a barra a cada segundo
setInterval(atualizarProgresso, 1000);
