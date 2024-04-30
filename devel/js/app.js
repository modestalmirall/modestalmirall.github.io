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

    // Inicia el bucle per canviar les imatges cada 3 segons (3000 ms)
    setInterval(showNextImage, 3000);
  }

  // Masonry
  var galeria = document.querySelector('.galeria');
  if (galeria) {
    // Amaga l'element amb la classe "galeria"
    galeria.style.visibility = "hidden";

    // Utilitzo imagesLoaded per assegurar-me que les imatges s'hagin carregat abans de inicialitzar Masonry
    imagesLoaded(galeria, function() {
      function initializeMasonry() {
        // Obtenir l'amplada total del contenidor de la galeria
        var ampladaGaleria = galeria.offsetWidth;

        // Calcular el gutter en píxels utilitzant el valor percentual definit
        var gutterPercentatge = 3;
        var gutterPixels = (gutterPercentatge / 100) * ampladaGaleria;

        // Utilitzar el valor de gutterPixels com a margin-bottom pels elements de la galeria
        var quadresGaleria = document.querySelectorAll('.quadroGaleria');
        quadresGaleria.forEach(function(quadre) {
          quadre.style.marginBottom = gutterPixels + 'px';
        });

        var masonry = new Masonry(galeria, {
          // Opcions de configuració de Masonry
          itemSelector: '.quadroGaleria',
          columnWidth: '.ampleQuadro',
          gutter: '.margeQuadro',
          percentPosition: true
        });

        // Força Masonry a recalcular la disposició dels elements
        masonry.layout();
      }

      // Inicialitza Masonry al carregar la pàgina
      initializeMasonry();

      // Torna a mostrar l'element quan la pàgina carrega completament
      galeria.style.visibility = "visible";

      // Recalcula Masonry quan l'ample de la pàgina canvia
      window.addEventListener('resize', initializeMasonry);
    });
  }
});







/*
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

    // Inicia el bucle per canviar les imatges cada 3 segons (3000 ms)
    setInterval(showNextImage, 3000);
  }

  // Masonry
  var galeria = document.querySelector('.galeria');
  if (galeria) {
    // Utilitzo imagesLoaded per assegurar-me que les imatges s'hagin carregat abans de inicialitzar Masonry
    imagesLoaded(galeria, function() {
      function initializeMasonry() {
        // Obtenir l'amplada total del contenidor de la galeria
        var ampladaGaleria = galeria.offsetWidth;

        // Calcular el gutter en píxels utilitzant el valor percentual definit
        var gutterPercentatge = 3;
        var gutterPixels = (gutterPercentatge / 100) * ampladaGaleria;

        // Utilitzar el valor de gutterPixels com a margin-bottom pels elements de la galeria
        var quadresGaleria = document.querySelectorAll('.quadroGaleria');
        quadresGaleria.forEach(function(quadre) {
          quadre.style.marginBottom = gutterPixels + 'px';
        });

        var masonry = new Masonry(galeria, {
          // Opcions de configuració de Masonry
          itemSelector: '.quadroGaleria',
          columnWidth: '.ampleQuadro',
          gutter: '.margeQuadro',
          percentPosition: true
        });

        // Força Masonry a recalcular la disposició dels elements
        masonry.layout();
      }

      // Inicialitza Masonry al carregar la pàgina
      initializeMasonry();

      // Recalcula Masonry quan l'ample de la pàgina canvia
      window.addEventListener('resize', initializeMasonry);
    });
  }
});
*/







/*

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
      function initializeMasonry() {
        // Obtenir l'amplada total del contenidor de la galeria
        var ampladaGaleria = galeria.offsetWidth;

        // Calcular el gutter en píxels utilitzant el valor percentual definit
        var gutterPercentatge = 3; 
        var gutterPixels = (gutterPercentatge / 100) * ampladaGaleria;

        // Utilitzar el valor de gutterPixels com a margin-bottom pels elements de la galeria
        var quadresGaleria = document.querySelectorAll('.quadroGaleria');
        quadresGaleria.forEach(function(quadre) {
          quadre.style.marginBottom = gutterPixels + 'px';
        });

        var masonry = new Masonry(galeria, {
          // Opcions de configuració de Masonry
          itemSelector: '.quadroGaleria',
          columnWidth: '.ampleQuadro',
          gutter: '.margeQuadro',
          percentPosition: true
        });
      }

      // Inicialitza Masonry al carregar la pàgina
      initializeMasonry();

      // Recalcula Masonry quan l'ample de la pàgina canvia
      window.addEventListener('resize', initializeMasonry);
    });
  }
});

*/



/*

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

*/