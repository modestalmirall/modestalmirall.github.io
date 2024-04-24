// menú
document.querySelector('.boto').addEventListener('click', function(e) {
	e.preventDefault();
	document.documentElement.classList.toggle('menu');
	document.documentElement.classList.toggle('nomenu');
});

//any
document.getElementById("_any_").innerHTML = new Date().getFullYear();

// slider
/*
document.addEventListener('DOMContentLoaded', function() {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.fonsPortada  img');
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
});
*/

document.addEventListener('DOMContentLoaded', function() {
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
  });
  