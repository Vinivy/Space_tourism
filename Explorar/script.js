const planet = document.querySelector('#planet')
const textLua = document.querySelector('.txt1')
const textMarte = document.querySelector('.txt2')
const textEuropa = document.querySelector('.txt3')
const textTita = document.querySelector('.txt4')

function changeImage(name) {
  switch (name) {
    case 'moon':
      planet.setAttribute('src', './destination/image-moon.png')
      textLua.style.display = 'inline'
      textMarte.style.display = 'none'
      textEuropa.style.display = 'none'
      textTita.style.display = 'none'
      break

    case 'mars':
      planet.setAttribute('src', './destination/image-mars.png')
      textLua.style.display = 'none'
      textMarte.style.display = 'inline'
      textEuropa.style.display = 'none'
      textTita.style.display = 'none'
      break

    case 'aurora':
      planet.setAttribute('src', './destination/image-europa.png')
      textLua.style.display = 'none'
      textMarte.style.display = 'none'
      textEuropa.style.display = 'inline'
      textTita.style.display = 'none'
      break

    case 'titan':
      planet.setAttribute('src', './destination/image-titan.png')
      textLua.style.display = 'none'
      textMarte.style.display = 'none'
      textEuropa.style.display = 'none'
      textTita.style.display = 'inline'
      break
  }
}
