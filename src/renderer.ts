function loopBody() {
  console.log('hello')
}

function rendererLoop() {
  loopBody()
  setTimeout( rendererLoop , 1000)
}

rendererLoop()
