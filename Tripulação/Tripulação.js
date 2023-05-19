//conteúdos de informações sobre as pessoas
const textComandante = document.querySelector('.comandante')
const textPiloto = document.querySelector('.piloto')
const textEspMissao = document.querySelector('.espMissao')
const textEngdVooa = document.querySelector('.engdvoo')

//exibição da tripulação

function option(nome) {
  let exibir = document.querySelector('#exb')
  switch (nome) {
    case 'comandante':
      exibir.src = './Components/image-douglas-hurley.png'
      textComandante.style.display = 'inline'
      textPiloto.style.display = 'none'
      textEspMissao.style.display = 'none'
      textEngdVooa.style.display = 'none'
      break

    case 'piloto':
      exibir.src = './Components/image-victor-glover.png'
      textComandante.style.display = 'none'
      textPiloto.style.display = 'inline'
      textEspMissao.style.display = 'none'
      textEngdVooa.style.display = 'none'
      break

    case 'EngdeMissao':
      exibir.src = './Components/image-mark-shuttleworth.png'
      textComandante.style.display = 'none'
      textPiloto.style.display = 'none'
      textEspMissao.style.display = 'inline'
      textEngdVooa.style.display = 'none'
      break

    case 'EngdeVoo':
      exibir.src = './Components/image-anousheh-ansari.png'
      textComandante.style.display = 'none'
      textPiloto.style.display = 'none'
      textEspMissao.style.display = 'none'
      textEngdVooa.style.display = 'inline'
      break
  }
}
