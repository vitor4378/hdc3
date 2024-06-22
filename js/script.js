$(document).ready(() => {  // Espera o documento HTML estar completamente carregado
  let circles = document.querySelectorAll(".circle");  // Seleciona todos os elementos com a classe "circle"
  let progressBars = [];  // Inicializa um array para armazenar as barras de progresso

  circles.forEach(circulo => {  // Para cada elemento com a classe "circle"
    progressBars.push(new ProgressBar.Circle(circulo, {  // Cria uma nova barra de progresso circular
      color: '#65DAF9',  // Cor da barra de progresso
      strokeWidth: 8,  // Espessura da linha da barra de progresso
      duration: 1400,  // Duração da animação em milissegundos
      from: { color: '#aaa' },  // Cor inicial da barra de progresso
      to: { color: '#65DAF9' },  // Cor final da barra de progresso
      step: function (state, circle) {  // Função de passo (step) da animação
        circle.path.setAttribute('stroke', state.color);  // Define a cor do traçado da barra de acordo com o estado atual
        var value = Math.round(circle.value() * 60);  // Calcula o valor atual do progresso (multiplicado por 60)
        circle.setText(value);  // Define o texto dentro da barra de progresso com o valor calculado
      }
    }));
  });

  let dataAreaOffset = $('#data-area').offset();  // Obtém a posição do elemento '#data-area' na página
  let stop = 0;  // Inicializa uma variável para controle

  $(window).scroll(function () {  // Evento disparado quando a janela é rolada (scroll)
    let scroll = $(window).scrollTop();  // Obtém a posição de rolagem atual da janela
    if (scroll > (dataAreaOffset.top - 500) && stop == 0) {  // Se o scroll for além de um ponto específico e 'stop' for 0
      for (const ProgressBar of progressBars) {  // Para cada barra de progresso criada
        ProgressBar.animate(1.0);  // Anima a barra de progresso até 100%
      }
      stop = 1;  // Define 'stop' como 1 para impedir a repetição da animação
    }
  });

  // Parallax
  setTimeout(() => {  // Executa uma função após um intervalo de tempo
    $('#data-area').parallax({ imageSrc: 'img/cidadeparallax.png' });  // Aplica efeito de parallax ao elemento '#data-area'
    $('#apply-area').parallax({ imageSrc: 'img/pattern.png' });  // Aplica efeito de parallax ao elemento '#apply-area'
  }, 250);

  // Filtro portfolio
  $('.filter-btn').on('click', function () {  // Define um evento de clique para botões com a classe 'filter-btn'
    let type = $(this).attr('id');  // Obtém o ID do botão clicado
    let boxes = $('.project-box');  // Seleciona todos os elementos com a classe 'project-box'

    $('.main-btn').removeClass('active');  // Remove a classe 'active' de todos os botões principais
    $(this).addClass('active');  // Adiciona a classe 'active' ao botão clicado

    if (type == 'dsg-btn') {  // Se o tipo for 'dsg-btn'
      eachBoxes('dsg', boxes);  // Filtra as caixas de projeto pelo tipo 'dsg'
    } else if (type == 'dev-btn') {  // Se o tipo for 'dev-btn'
      eachBoxes('dev', boxes);  // Filtra as caixas de projeto pelo tipo 'dev'
    } else if (type == 'seo-btn') {  // Se o tipo for 'seo-btn'
      eachBoxes('seo', boxes);  // Filtra as caixas de projeto pelo tipo 'seo'
    } else {  // Caso contrário
      eachBoxes('all', boxes);  // Mostra todas as caixas de projeto
    }
  });

  function eachBoxes(type, boxes) {  // Função para filtrar as caixas de projeto
    if (type == 'all') {  // Se o tipo for 'all'
      $(boxes).fadeIn();  // Mostra todas as caixas de projeto com efeito de fade-in
    } else {  // Caso contrário
      $(boxes).each(function () {  // Para cada caixa de projeto
        if (!$(this).hasClass(type)) {  // Se não tiver a classe correspondente ao tipo
          $(this).fadeOut('slow');  // Esconde a caixa com efeito de fade-out lento
        } else {  // Caso contrário
          $(this).fadeIn();  // Mostra a caixa com efeito de fade-in
        }
      });
    }
  }

  // Scroll para seções
  let navBtn = $('.nav-item');  // Seleciona todos os itens de navegação

  let bannerSection = $('#mainSlider');  // Seleciona a seção do banner
  let aboutSection = $('#about-area');  // Seleciona a seção 'about'
  let servicesSection = $('#services-area');  // Seleciona a seção 'services'
  let teamSection = $('#team-area');  // Seleciona a seção 'team'
  let portfolioSection = $('#portfolio-area');  // Seleciona a seção 'portfolio'
  let contactSection = $('#contact-area');  // Seleciona a seção 'contact'

  let scrollTo = '';  // Variável para armazenar o elemento a ser rolado

  $(navBtn).click(function () {  // Define um evento de clique para os itens de navegação
    let btnId = $(this).attr('id');  // Obtém o ID do item de navegação clicado

    if (btnId == 'about-menu') {  // Se o ID for 'about-menu'
      scrollTo = aboutSection;  // Rola para a seção 'about'
    } else if (btnId == 'services-menu') {  // Se o ID for 'services-menu'
      scrollTo = servicesSection;  // Rola para a seção 'services'
    } else if (btnId == 'team-menu') {  // Se o ID for 'team-menu'
      scrollTo = teamSection;  // Rola para a seção 'team'
    } else if (btnId == 'portfolio-menu') {  // Se o ID for 'portfolio-menu'
      scrollTo = portfolioSection;  // Rola para a seção 'portfolio'
    } else if (btnId == 'contact-menu') {  // Se o ID for 'contact-menu'
      scrollTo = contactSection;  // Rola para a seção 'contact'
    } else {  // Caso contrário
      scrollTo = bannerSection;  // Rola para a seção de banner
    }

    $([document.documentElement, document.body]).animate({  // Anima o scroll até o elemento escolhido
      scrollTop: $(scrollTo).offset().top - 70  // Desloca para o topo do elemento menos 70 pixels
    }, 1500);  // Duração da animação em milissegundos
  });

});
