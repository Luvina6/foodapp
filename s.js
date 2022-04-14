let menubar = document.querySelector('.menubar');

window.onscroll = () =>{

    menubar.classList.remove('fa-times');
    menubar.classList.remove('active');
  
    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
  
  }