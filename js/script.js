  const sonic = document.querySelector('.sonic');
  const robotnik = document.querySelector('.robotnik');

  const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
 }

const loop = setInterval(() => {

    console.log('loop')

  const robotnikPosition = robotnik.offsetLeft;
  const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

  console.log(sonicPosition);
 
  if (robotnikPosition <= 80 && robotnikPosition > 0 && sonicPosition < 80)  {
    
    robotnik.style.animation = 'none';   
    robotnik.style.left = `${robotnikPosition}px`; 
    
    sonic.style.animation = 'none';   
    sonic.style.bottom = `${sonicPosition}px`; 

    sonic.src = './img/game-over1.png';
    sonic.style.width = '175px'

    clearInterval(loop);
  }

}, 10 );
 
  document.addEventListener('keydown', jump); 