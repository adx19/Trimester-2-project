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
  // Reset the login form
  document.querySelector('.login-popup').reset();
});

// Show sign-up popup
signUpBtn.addEventListener('click', function() {
  sginupopup.style.display = 'flex'; 
  popupContainer.classList.add('show'); 
  document.querySelector('.login-popup').style.display = 'none'; 
  // Reset the signup form
  document.querySelector('.sign-up-popup').reset();
});

// Close popups on button click
closeBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    popupContainer.classList.remove('show');
    document.querySelector('.login-popup').style.display = 'none';
    document.querySelector('.sign-up-popup').style.display = 'none';
  });
});

// Sign up functionality: Collect information and create profile
const signUpButton = document.getElementById('signUpBtn');
const profileSection = document.getElementById('profile-section');

signUpButton.addEventListener('click', function() {
  // Collect user input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const age = document.getElementById('age').value;
  const experience = document.getElementById('experience').value;
  const proficiency = document.getElementById('proficiency').value;
  const graduation = document.getElementById('graduation').value;

  // Log the collected user information in the console
  console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Age: ${age}, Experience: ${experience}, Proficiency: ${proficiency}, Graduation: ${graduation}`);

  // Close the sign-up popup after submission
  popupContainer.classList.remove('show');
  document.querySelector('.sign-up-popup').style.display = 'none';

  // Create a new profile similar to Unnikrishnan M's profile
  const newProfile = document.createElement('div');
  newProfile.classList.add('personal-details');
  newProfile.innerHTML = `
    <p>👤</p>
    <h3>${name}</h3>
    <p>${experience} years of experience</p>
    <p>Age: ${age}</p>
    <p>Graduation: ${graduation}</p>
    <h3>Proficient in:</h3>
    <ul>
      <li>${proficiency}</li>
    </ul>
  `;

  // Add the class "hide" to keep the profile hidden by default
  newProfile.classList.add('hide');

  // Add the event listener to toggle visibility when clicked
  newProfile.addEventListener('click', function() {
    if (newProfile.classList.contains('hide')) {
      newProfile.classList.remove('hide');
    } else {
      newProfile.classList.add('hide');
    }
  });

  // Append the new profile to the profile section
  profileSection.appendChild(newProfile);
});

// Login functionality (log in and close popup after submitting details)
const loginButton = document.querySelector('.popup-btn');
loginButton.addEventListener('click', function() {
  const email = document.querySelector('.login-popup input[type="email"]').value;
  const password = document.querySelector('.login-popup input[type="password"]').value;
  
  console.log(`Logged In with Email: ${email} and Password: ${password}`);
  
  // Close the login popup after submitting details
  popupContainer.classList.remove('show');
  document.querySelector('.login-popup').style.display = 'none';
});
