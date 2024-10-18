document.querySelector('.js-learn-more')
 .addEventListener('click', () => {
  learnMore();
 });

function learnMore() {
  const learnMore = document.querySelector('.js-learn-more');
  const newContainer = document.querySelector('.js-new-p');

    newContainer.textContent = 'The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).';

    learnMore.textContent = '';
}