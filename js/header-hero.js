// Simple scroll handler to toggle header solid background
(function(){
  var header = null;
  var threshold = 30;

  function update(){
    if(!header) return;
    if(window.scrollY > threshold) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }

  document.addEventListener('DOMContentLoaded', function(){
    header = document.querySelector('.header');
    update();
    window.addEventListener('scroll', update, {passive:true});
  });
})();
