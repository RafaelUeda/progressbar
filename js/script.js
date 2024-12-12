function atualizarProgresso() {
    const agora = new Date();
    const inicioTrabalho = new Date(agora);
    inicioTrabalho.setHours(8, 0, 0, 0);

    const fimTrabalho = new Date(agora);
    fimTrabalho.setHours(18, 0, 0, 0);

    let progresso = 0;
    if (agora >= inicioTrabalho && agora <= fimTrabalho) {
        const totalSegundosDia = (fimTrabalho - inicioTrabalho) / 1000;
        const segundosPassados = (agora - inicioTrabalho) / 1000;
        progresso = (segundosPassados / totalSegundosDia) * 100;
    } else if (agora > fimTrabalho) {
        progresso = 100;
    }

    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    
    progressBar.style.width = `${progresso}%`;
    progressPercentage.textContent = `${Math.floor(progresso)}%`;
}

setInterval(atualizarProgresso, 1000);

