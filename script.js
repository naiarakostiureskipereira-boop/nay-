onst storyNodes = {
  start: {
    text: "O mapa amarelado que você encontrou no sótão de seu avô, em Curitiba, não deixava dúvidas: além do Marumbi e das brumas da Serra do Mar, esconde-se a lendária Cidade Perdida de Krato. Você desembarca na estação de trem de Morretes, onde os trilhos terminam e a fechada Mata Atlântica começa.",
    options: [
      { text: "Seguir o leito do Rio Nhundiaquara de barco", nextNode: "A" },
      { text: "Entrar direto pela Trilha do Itupava a pé", nextNode: "B" }
    ]
  },
  A: {
    text: "Você pega uma voadeira com um pescador veterano. No percurso, ele aponta marcas antigas nas pedras e lhe entrega um velho amuleto de bronze achado no rio.",
    options: [
      { text: "Desembarcar no antigo porto jesuíta abandonado", nextNode: "A1" },
      { text: "Continuar subindo o rio até a nascente oculta", nextNode: "A2" }
    ]
  },
  A1: {
    text: "Nas ruínas tomadas pela vegetação, você encontra uma inscrição em latim. Ao aproximar o amuleto, uma passagem secreta no chão se abre.",
    options: [
      { text: "Descer pelas escadas de pedra para o subterrâneo", nextNode: "F1" },
      { text: "Ignorar a passagem e seguir a trilha de pedras polidas", nextNode: "F2" }
    ]
  },
  A2: {
    text: "A caverna da nascente é escura. O eco revela um abismo subterrâneo com uma ponte de madeira bastante deteriorada.",
    options: [
      { text: "Tentar atravessar a ponte com o equipamento de escalada", nextNode: "F3" },
      { text: "Procurar um caminho alternativo contornando o cânion", nextNode: "F1" }
    ]
  },
  B: {
    text: "O nevoeiro fecha a visibilidade. Subindo o calçamento de pedras irregulares, você escuta um som metálico distante e encontra uma bifurcação.",
    options: [
      { text: "Seguir o som metálico em direção ao Pico do Marumbi", nextNode: "B1" },
      { text: "Manter-se no caminho principal coberto de musgo", nextNode: "B2" }
    ]
  },
  B1: {
    text: "No topo enevoado do Marumbi, você acha uma antiga estação de rádio abandonada com um diário contendo as coordenadas exatas de Krato.",
    options: [
      { text: "Descer de rapel pelo vale do Anhangava", nextNode: "F2" },
      { text: "Seguir a cumeada das montanhas até o portal de pedra", nextNode: "F1" }
    ]
  },
  B2: {
    text: "A névoa se dissipa e você cai em uma armadilha natural de areia movediça que cobre uma antiga vala da cidade.",
    options: [
      { text: "Usar a corda da mochila para se agarrar às raízes de uma araucária", nextNode: "F3" },
      { text: "Cortar as tiras da mochila para aliviar o peso", nextNode: "F3" }
    ]
  },
  F1: {
    text: "🏆 VITÓRIA! O caminho elito leva diretamente ao Vale Dourado. Você descobre as muralhas intactas da Cidade Perdida de Krato, repletas de artefatos históricos e ouro!",
    options: []
  },
  F2: {
    text: "📜 TESOURO PERDIDO: Você alcança as ruínas da cidade, mas descobre que os salões principais foram soterrados há séculos. Você retorna com relatos históricos valiosos, mas sem os tesouros.",
    options: []
  },
  F3: {
    text: "🌧️ PERDIDO NA NÉVOA: Os perigos da Serra do Mar forçam um recuo de emergência. Você resgata sua vida, mas o mapa do seu avô é destruído, deixando o mistério para o futuro.",
    options: []
  }
};

const storyTextElement = document.getElementById('story-text');
const optionsContainerElement = document.getElementById('options-container');
const restartBtn = document.getElementById('restart-btn');

function showStoryNode(nodeKey) {
  const node = storyNodes[nodeKey];
  storyTextElement.innerText = node.text;

  // Limpa botões antigos
  optionsContainerElement.innerHTML = '';

  // Se houver opções, cria os botões
  if (node.options && node.options.length > 0) {
    restartBtn.classList.add('hidden');
    node.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => showStoryNode(option.nextNode));
      optionsContainerElement.appendChild(button);
    });
  } else {
    // Se chegou a um final, mostra botão de reiniciar
    restartBtn.classList.remove('hidden');
  }
}

restartBtn.addEventListener('click', () => showStoryNode('start'));

// Inicia o jogo no nó principal
showStoryNode('start');