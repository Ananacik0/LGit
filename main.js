const buttonInMain = document.querySelector( '.button' )

const pressBtn = buttonInMain.addEventListener( 'click', (event) => {
  if(event.target.className === 'button') console.log('this is button')
} )