import '../css/main.scss'

    let searchForm = document.querySelector('.search-form');
    document.querySelector('#search-btn').onclick = () =>{
        searchForm.classList.toggle('active');
        cart.classList.remove('active');
        loginForm .classList.remove('active');
        navbar.classList.remove('active');
    }
   

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
      });

    ////Sayfa yüklendiğinde veya sayfa aşağı kaydırıldığında içeriklerin yavaşça görünmesini sağlayabilirsiniz.
      window.addEventListener('scroll', function() {
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
          const contentPosition = content.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.2;
      
          if (contentPosition < screenPosition) {
            content.classList.add('visible');
          }
        });
      });
    //////////////////////

    // sepete tiklandiginda urunler kismi ekrana activ olmasi icin 
    let cart = document.querySelector('.shopping-cart');
    document.querySelector('#cart-btn').onclick = () =>{
        cart.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm .classList.remove('active');
        navbar.classList.remove('active');
    }

    ///////////// menu  btn tiklama 

    document.addEventListener('DOMContentLoaded', function() {
      const menuBtn = document.getElementById('menu-btn');
      const navbar = document.querySelector('.navbar');
    
      menuBtn.addEventListener('click', function() {
        // Navbar'a active sınıfını ekleyin veya çıkarın
        navbar.classList.toggle('.active');  /// buraya nokta eklememiz lazimdi  
      });
    });
    
    
    window.onscroll = () => {
      searchForm.classList.remove('active');
      cart.classList.remove('active');
      loginForm.classList.remove('active');
      navbar.classList.remove('active'); // Nokta işareti olmadan
    }

    let slides = document.querySelectorAll('.home .slides-container .slide');
    let index = 0;

    function next(){
        slides[index].classList.remove('active');
        index = (index +1) % slides.lenght;
        slides[index].classList.add('active')
    }

    function prev(){
        slides[index].classList.remove('active');
        index = (index-1 +slides.lenght) % slides.lenght;
        slides[index].classList.add('active')
    }
    

   // script.js

// Butonu al
let scrollToTopButton = document.querySelector(".scroll-to-top");

// Kullanıcı dokümanın üstünden 20px aşağıya kaydırdığında butonu göster
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// Kullanıcı butona tıkladığında dokümanın üstüne doğru kaydır
scrollToTopButton.onclick = function(event) {
  event.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
}



document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('#menu-btn');
  const navbar = document.querySelector('.navbar');

  menuBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });
});
///////////login form btn
// Login iconuna tıklandığında login formunu göster/gizle
document.querySelector('#login-btn').addEventListener('click', function() {
  // .login-form sınıfını seç ve active sınıfını ekle/kaldır
  document.querySelector('.login-form').classList.toggle('active');
});


    
