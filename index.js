const btnToggle = document.querySelector('.btn-toggle')
const list = document.querySelector('.sm-nav-list')

btnToggle.addEventListener('click', function(){
    list.classList.toggle('active')
} )

window.addEventListener('scroll', function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
      var rect = box.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 50) {
        box.style.opacity = 1;
        box.style.transform = 'translateY(0)'; 
    }
    });
  });
  
  
  
  
