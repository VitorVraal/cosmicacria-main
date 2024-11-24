

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.style.display = 'none';
  });

  const sectionToShow = document.getElementById(sectionId);
  if (sectionToShow) {
      sectionToShow.style.display = 'block';
  }
}

function showProductDetails(productId) {
    const productDetails = {
      produto1: {
        titulo: 'Mochilas',
        descricao: 'Feita a partir de tecidos reciclados,uma história que vale a pena ser lembrada.',
        imagens: ['produtos/mochila up chefron (2).jpg', 'produtos/mochila3.JPEG', 'produtos/mochila4.JPEG', 'produtos/mochila5.JPEG', 'produtos/mochila6.jpg', 'produtos/mochila7.jpg', 'produtos/mochila8.JPEG', 'produtos/mochilaazul.JPEG', 'produtos/MochilaCam.JPG', 'produtos/MochilaJ.jpg', 'produtos/MochilaK.JPG', 'produtos/Mochilas.JPEG', 'produtos/MochilaZ.JPEG'], 
        linkCompra: 'https://cosmicaupcycle.offstore.me/shop?tagId=696055'
      },
      produto2: {
        titulo: 'Bags',
        descricao: 'A bag CosmicaCria é feita com materiais reciclados, unindo sustentabilidade e estilo. Prática e versátil, ela é perfeita para quem busca um acessório único, funcional e consciente. Carregue não só suas coisas, mas também uma história com cada peça.',
        imagens: ['produtos/BagDeFrente.JPG', 'produtos/BagLateral.JPG'],
        linkCompra: 'https://cosmicaupcycle.offstore.me/shop?tagId=738230'
      },
      produto3: {
        titulo: 'Pochetes',
        descricao: 'Pochetes CosmicaCria, feitas de materiais reciclados, combinam estilo, praticidade e sustentabilidade em um único acessório.',
        imagens: ['produtos/pochete2.JPG', 'produtos/pochete3.JPG'],
        linkCompra: 'https://cosmicaupcycle.offstore.me/shop?tagId=696056'
      }
    };
  
    const produto = productDetails[productId];
    
    if (produto) {
      const modal = document.getElementById('modal');
      modal.querySelector('.modal-titulo').textContent = produto.titulo;
      modal.querySelector('.modal-descricao').textContent = produto.descricao;
      
      const imagemContainer = modal.querySelector('.modal-imagens');
      imagemContainer.innerHTML = ''; // Limpa imagens anteriores
      produto.imagens.forEach(imagem => {
        const img = document.createElement('img');
        img.src = imagem;
        img.alt = produto.titulo;
        imagemContainer.appendChild(img);
      });
  
      modal.querySelector('.modal-link').href = produto.linkCompra;
      modal.style.display = 'block';
    }
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

function moveCarousel() {
  currentIndex = (currentIndex + 1) % totalItems;
  const offset = -currentIndex * 100;
  carouselItems.forEach(item => {
      item.style.transform = `translateX(${offset}%)`;
  });
}

setInterval(moveCarousel, 2000);

document.getElementById('enviar-feedback').addEventListener('click', () => {
  const feedback = document.getElementById('feedback').value;
  if (feedback.trim()) {
      alert('Obrigado pelo seu feedback! Ele será muito importante para nós.');
      document.getElementById('feedback').value = ''; // Limpar campo
  } else {
      alert('Por favor, escreva seu feedback antes de enviar.');
  }
});

function abreMenu() {
    document.getElementById("meuMenu-abrir").style.width = "250px"
}
function fechaMenu() {
    document.getElementById("meuMenu-abrir").style.width = "0"
}


/*Funções para abrir e fechar o menu hambúrguer*/