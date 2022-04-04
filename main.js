let menuToggle = document.querySelector('.toggle')
let navBar = document.querySelector('.navbar')

menuToggle.onclick = function (){
  menuToggle.classList.toggle('active');
  navBar.classList.toggle('active');
};

let btnPlay = document.querySelector('.btn');
let removeString = document.querySelector('.removeString')

btnPlay.addEventListener('mouseenter', function() {
  btnPlay.classList.add('play');
  removeString.classList.add('remove');
})
btnPlay.addEventListener('mouseleave', function() {
  btnPlay.classList.remove('play');
  removeString.classList.remove('remove');
})


const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');


btnPlay.addEventListener('click', function() {
  videoContainer.classList.add('show');
})

close.addEventListener('click', function() {
  videoContainer.classList.remove('show');
})




