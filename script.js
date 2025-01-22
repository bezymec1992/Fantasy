const signupForms = document.querySelectorAll('.form');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Toggle password visibility
togglePassword.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
});

// Form submission with validation
signupForms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    if (valid) {
      window.location.href = 'product.html'; // Замените на нужный URL
    }
  });
});

//second form < 768px
const maleButton = document.getElementById('maleButton');
const femaleButton = document.getElementById('femaleButton');

//chose gender btn
function activateButton(button) {
  maleButton.classList.remove('active');
  femaleButton.classList.remove('active');
  button.classList.add('active');
}

maleButton.addEventListener('click', () => activateButton(maleButton));
femaleButton.addEventListener('click', () => activateButton(femaleButton));

//swiper
function createSwiper(selector, slidesPerViewDesktop) {
  return new Swiper(selector, {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    initialSlide: 1,
    centeredSlides: true,
    slidesPerView: 1,
    loopAdditionalSlides: 2,
    breakpoints: {
      768: {
        slidesPerView: slidesPerViewDesktop,
        centeredSlides: true,
      }
    }
  });
}
const swiper = createSwiper('.swiper', 2.5);
const swiper2 = createSwiper('.swiper2', 3.8);

