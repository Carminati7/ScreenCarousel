function loopBody(): void {
  console.log('hello')
  console.log('logica per l\'animazione delle imagini')
  console.log('comunicazione con il main')
}

function rendererLoop(): void {
  loopBody()
  setTimeout( rendererLoop , 1000)
}

rendererLoop()
