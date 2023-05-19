//conteúdos de informações sobre as pessoas
const textComandante = document.querySelector('.comandante')
const textPiloto = document.querySelector('.piloto')
const textEspMissao = document.querySelector('.espMissao')
const textEngdVooa = document.querySelector('.engdvoo')

//exibição da tripulação
const exibir = document.querySelector('#exb')

function option(nome) {
  switch (nome) {
    case 'cmd':
      exibir.setAttribute('src', './Components/image-douglas-hurley.png')
      textComandante.style.display = 'none'
      textPiloto.style.display = 'inline'
      textEspMissao.style.display = 'none'
      textEngdVooa.style.display = 'none'
      break

    case 'clt':
      exibir.attributes('scr', './Components/image-victor-glover.png')
      textComandante.style.display = 'none'
      textPiloto.style.display = 'flex'
      textEspMissao.style.display = 'none'
      textEngdVooa.style.display = 'none'
      break

    case 'miss':
      exibir.attributes('src', './Components/image-mark-shuttleworth.png')
      textComandante.style.display = 'none'
      textPiloto.style.display = 'none'
      textEspMissao.style.display = 'inline'
      textEngdVooa.style.display = 'none'
      break

    case 'eng':
      exibir.attributes('scr', './Components/image-anousheh-ansari.png')
      textComandante.style.display = 'none'
      textPiloto.style.display = 'none'
      textEspMissao.style.display = 'none'
      textEngdVooa.style.display = 'inline'
      break
  }
}
