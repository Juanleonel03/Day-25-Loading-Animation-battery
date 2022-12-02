let load = document.getElementById('loader');
function fadeLoad(){
  load.classList.add('fadeLoad');
}
setTimeout(fadeLoad, 6000);

load.addEventListener('transitionend', ()=>{
  document.body.removeChild(load)
})
