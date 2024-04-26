document.addEventListener('DOMContentLoaded', function() {
  // Menú
  document.querySelector('.boto').addEventListener('click', function(e) {
    e.preventDefault();
    document.documentElement.classList.toggle('menu');
    document.documentElement.classList.toggle('nomenu');
  });

  // Any
  document.getElementById("_any_").innerHTML = new Date().getFullYear();

  // Slider
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.fonsPortada img');

  // Comprova si l'element .fonsPortada existeix abans de continuar
  if (images.length > 0) {
    const totalImages = images.length;

    function showNextImage() {
      const currentImage = images[currentImageIndex];
      currentImage.style.opacity = '0';

      currentImageIndex = (currentImageIndex + 1) % totalImages;

      const nextImage = images[currentImageIndex];
      nextImage.style.opacity = '1';
    }

    // Inicia el bucle per canviar les imatges cada 5 segons (5000 ms)
    setInterval(showNextImage, 3000);
  }

  // Masonry
  var galeria = document.querySelector('.galeria');
  if (galeria) {
    // Utilitzo imagesLoaded per assegurar-me que les imatges s'hagin carregat abans de inicialitzar Masonry
    imagesLoaded(galeria, function() {
      var masonry = new Masonry(galeria, {
        // Opcions de configuració de Masonry
        itemSelector: '.quadroGaleria',
        columnWidth: '.ampleQuadro',
        gutter: '.margeQuadro',
        percentPosition: true
      });
    });
  }
});