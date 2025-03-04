const video = document.getElementById('video-background');
const music = document.getElementById('background-music');

// Define o volume da música (50% do volume máximo)
music.volume = 0.2;

// Define o ponto de início do vídeo (em segundos)
const startTimeInSeconds = 120; // 1 minuto e 30 segundos
video.currentTime = startTimeInSeconds;

// Tenta reproduzir o vídeo e a música automaticamente
video.play().catch(error => {
    console.log("Autoplay bloqueado pelo navegador. Aguardando interação do usuário...");
});

music.play().catch(error => {
    console.log("Autoplay de música bloqueado pelo navegador. Aguardando interação do usuário...");
});

// Reproduz o vídeo e a música quando o usuário interagir com a página
document.addEventListener('click', () => {
    video.play();
    music.play();
});

// Lógica do envelope e botões
const envelopeWrapper = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');

// Abrir o envelope ao clicar no coração
heart.addEventListener('click', () => {
    envelopeWrapper.classList.toggle('envelope-open'); // Abre/fecha o envelope
});

// Exibir imagem ao clicar em "Sim"
document.getElementById('sim').addEventListener('click', function() {
    document.getElementById('imagem').classList.remove('hidden');
});

// Mostrar alerta ao clicar em "Não"
document.getElementById('nao').addEventListener('click', function() {
    alert("Pense novamente! 😊");
});