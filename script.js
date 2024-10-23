window.onscroll = function () {
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero');
  const heroHeight = heroSection.offsetHeight;
  const overviewSection = document.querySelector('.overview');
  const institutionSection = document.querySelector('.institution');

  // Manage navbar visibility
  if (window.scrollY > heroHeight) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Smooth zoom effect on overview and institution sections
  const overviewOffset = overviewSection.offsetTop - window.innerHeight / 2;
  const institutionOffset = institutionSection.offsetTop - window.innerHeight / 2;

  if (window.scrollY > overviewOffset) {
    overviewSection.style.transform = 'scale(1.05)'; // Zoom in
  } else {
    overviewSection.style.transform = 'scale(1)'; // Zoom out
  }

  if (window.scrollY > institutionOffset) {
    institutionSection.style.transform = 'scale(1.05)'; // Zoom in
  } else {
    institutionSection.style.transform = 'scale(1)'; // Zoom out
  }

  // Make navbar disappear when the bottom of it touches the bottom of the background image
  const navbarHeight = navbar.offsetHeight;
  const heroBottom = heroHeight; // Bottom position of the hero section

  if (window.scrollY > heroBottom - navbarHeight) {
    navbar.style.top = '-' + navbarHeight + 'px'; // Hide navbar
  } else {
    navbar.style.top = '0'; // Show navbar
  }
};

