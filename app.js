

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
        imagens: ['produtos/BagDeFrente.JPG', 'https://images-offstore.map.azionedge.net/compressed/3a8f0b5492493c55e60b13b264e0e118.webp', 'https://images-offstore.map.azionedge.net/compressed/43bc7cfd6a7cdd71b2113be9587ab0b2.webp','https://images-offstore.map.azionedge.net/compressed/3764e55de173306688075b4786b6673a.webp', 'https://images-offstore.map.azionedge.net/compressed/a5348acb8fb12a1b5ea7f5c6e893111c.webp', 'https://images-offstore.map.azionedge.net/compressed/781683420a47ff8826bf991525638394.webp', 'https://images-offstore.map.azionedge.net/compressed/6f1646d727c7a8c9ea0ce0bd31100f44.webp','https://images-offstore.map.azionedge.net/compressed/9373210d751e98c545e2e1b1685c3e75.webp', 'https://images-offstore.map.azionedge.net/compressed/737abfb28da8ca8e5a0c4cf5517f5058.webp' ],
        linkCompra: 'https://cosmicaupcycle.offstore.me/shop?tagId=738230'
      },
     produto3: {
        titulo: 'Pochetes',
        descricao: 'Pochetes CosmicaCria, feitas de materiais reciclados, combinam estilo, praticidade e sustentabilidade em um único acessório.',
        imagens: ['produtos/pochete2.JPG', 'https://images-offstore.map.azionedge.net/compressed/1991d4b3e88861bd0cb913fb4ea0236f.webp', 'https://images-offstore.map.azionedge.net/compressed/94d0a13dbb28fd2f01a8692bd09d53c0.webp','https://images-offstore.map.azionedge.net/compressed/591a2a872f65aed1af5c97497a5c55fd.webp', 'https://images-offstore.map.azionedge.net/compressed/de8d7dde42cb457d9741156c8d03184a.webp', 'https://images-offstore.map.azionedge.net/compressed/f6b486dcc7472841f142fbf67f39b7e5.webp', 'https://images-offstore.map.azionedge.net/compressed/7a8f342b1f0bf110c5fec5ffb2fe2b00.webp'],
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
