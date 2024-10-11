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

function learnMore() {
  const learnMore = document.querySelector('.js-learn-more');
  const newContainer = document.querySelector('.js-new-p');

  newContainer.textContent = 'The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).';

  learnMore.textContent = '';
}