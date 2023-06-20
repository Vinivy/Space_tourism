//Área de imagem
let Picture = document.querySelector('.img')
//textos de conteudos
let Foguete = document.querySelector('.Foguete')
let PortoE = document.querySelector('.EstacaoE')
let Capsula = document.querySelector('.Capsula')

function Espace(explore) {
  switch (explore) {
    case 'F':
      //imagem
      Picture.setAttribute('src', './technology/image-one.png')
      //textos
      Foguete.style.display = 'inline'
      PortoE.style.display = 'none'
      Capsula.style.display = 'none'
      break
    case 'E':
      //imagem
      Picture.src = './technology/image-spaceport-portrait.jpg'
      //textos
      Foguete.style.display = 'none'
      PortoE.style.display = 'inline'
      Capsula.style.display = 'none'
      break
    case 'C':
      //imagem
      Picture.src = './technology/image-space-capsule-portrait.jpg'
      //texto
      Foguete.style.display = 'none'
      PortoE.style.display = 'none'
      Capsula.style.display = 'inline'
      break
    default:
      alert('ALGO DEU ERRADO')
      break
  }
}
