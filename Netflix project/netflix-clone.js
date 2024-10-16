let htmlImage;

  imageData.forEach((image) => {
    htmlImage += `
      <img class="image" src="${image.image}" alt="image ${image.id}">
    `;
  });

  document.querySelector('.js-trending-gallary').innerHTML = htmlImage;

const gallary = document.querySelector('.js-trending-gallary');

function scrollToLeft() {
  gallary.scrollBy({
    left: -300, // scrolls left by 300px
    behavior: 'smooth'
  });
}

function scrollToRight() {
  gallary.scrollBy({
    left: 300, // scrolls right by 300px
    behavior: 'smooth'
  });
}