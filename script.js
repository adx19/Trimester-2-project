const home = document.querySelector('.welcome');
const profile = document.querySelector('.details');
const contact = document.querySelector('.contact-details');
const house = document.querySelector('.bi-house-door');
const person = document.querySelector('.bi-person');
const tele = document.querySelector('.bi-telephone');
// Events listener such that when button clicked except that all other will be hidden
house.addEventListener('click', function() {
  home.classList.remove('hide'); // Show home, hide others
  profile.classList.add('hide');
  contact.classList.add('hide');
});

person.addEventListener('click', function() {
  profile.classList.remove('hide'); // Show profile, hide others
  home.classList.add('hide');
  contact.classList.add('hide');
});

tele.addEventListener('click', function() {
  contact.classList.remove('hide'); // Show contact, hide others
  home.classList.add('hide');
  profile.classList.add('hide');
});

// Popup section - Login and Sign-up popup 
const loginBtn = document.querySelector('.log-in-btn'); 
const signUpBtn = document.querySelector('.sign-in-btn'); 
const popupContainer = document.querySelector('.popup-container'); 
const sginupopup = document.querySelector('.sign-up-popup'); 
const closeBtns = document.querySelectorAll('.close-popup-btn'); 


// Show login popup
loginBtn.addEventListener('click', function() {
  document.querySelector('.login-popup').style.display = 'flex'; 
  popupContainer.classList.add('show'); 
  sginupopup.style.display = 'none';
});

// Show sign-up popup
signUpBtn.addEventListener('click', function() {
  sginupopup.style.display = 'flex'; 
  popupContainer.classList.add('show'); 
  document.querySelector('.login-popup').style.display = 'none'; 
});

// Close popups on button click
closeBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    popupContainer.classList.remove('show');
    document.querySelector('.login-popup').classList.remove('show');
    document.querySelector('.sign-up-popup').classList.remove('show');
  });
});
