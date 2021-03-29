
function loopBody( src ): void {
  console.log('hello')
  console.log('logica per l\'animazione delle imagini')
  console.log('comunicazione con il main')
  document.getElementById("image")['src']= src ;
}

function rendererLoop() {
  window['api'].request( 'ping' );
}

window['api'].onResponse((args) => {
  console.log('received response:', args)
  loopBody( args.success )
  rendererLoop()
});

rendererLoop()
