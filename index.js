/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themebutton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    console.log("Button clicked!");
}
// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themebutton.addEventListener('click', toggleDarkMode);


/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let rsvpbutton = document.getElementById("rsvp-button");
let count = 3;

const addParticipant = (person) => {
  // Step 2: Write your code to manipulate the DOM here
  const countnmb = document.getElementById('rsvp-count');
  countnmb.remove();
  
  const newRsvp = document.createElement('p');
  newRsvp.textContent = `🎮 ${person.name} from ${person.location} is joining the lineup.`;
  const participants = document.querySelector('.rsvp-participants');
  participants.appendChild(newRsvp);

  count++;
  const newCount = document.createElement('p');
  newCount.id = 'rsvp-count';
  newCount.textContent = "🔥 " + count + " people have RSVP'd to this event!";
  participants.appendChild(newCount);

  event.preventDefault();
}

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault()

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;

  const person = {
    name: rsvpInputs[0].value.trim(),
    location: rsvpInputs[1].value.trim(),
    email: rsvpInputs[2].value.trim()
  }

  // Validate name
  if (person.name.length < 2) {
    containsErrors = true;
    rsvpInputs[0].classList.add('error');
  } else {
    rsvpInputs[0].classList.remove('error');
  }

  // Validate location
  if (person.location.length < 2) {
    containsErrors = true;
    rsvpInputs[1].classList.add('error');
  } else {
    rsvpInputs[1].classList.remove('error');
  }

  // Validate email
  if (!person.email.includes('@') || !person.email.includes('.com')) {
    containsErrors = true;
    rsvpInputs[2].classList.add('error');
  } else {
    rsvpInputs[2].classList.remove('error');
  }

  // If no errors, call addParticipant() and clear fields
  if (containsErrors == false) {
    addParticipant(person);
    toggleModal(person);
    for (let i = 0; i < rsvpInputs.length - 1; i++) {
      rsvpInputs[i].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpbutton.addEventListener('click', validateForm)

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/
let reducedMotion = false;
const motionBtn = document.getElementById("motion-btn");
motionBtn.addEventListener("click", () => {
  reducedMotion = reducedMotion === false ? true : false;
  motionBtn.textContent = reducedMotion ? "Enable Motion" : "Reduce Motion";
})

const toggleModal = (person) => {
  let modal = document.getElementById("success-modal"); 
  let modalContent = document.getElementById("modal-text");
  let intervalId;
  if (!reducedMotion) {
    intervalId = setInterval(animateImage, 500);
  }
  
  
  // Update modal display to flex
  modal.style.display = "flex";

  // Update modal text to personalized message
  modalContent.textContent = `Welcome ${person.name}! 🎮 Get ready to explore one-of-a-kind games built with heart, hustle, and heaps of pixel power. Whether you’re a dev, a fan, or just a curious space traveler — Grab your controller and prepare for liftoff into a universe of creativity. 🚀`

  // Set modal timeout to 5 seconds
  setTimeout(() => {
    modal.style.display = "none";
    if (intervalId) {
      clearInterval(intervalId);
    }
  }, 5000);
  
}

// animation variables and animateImage() function
let rotateFactor = 40;
const modalImage = document.getElementById("modal-img")

const animateImage = () => {
  rotateFactor = rotateFactor === 40 ? 30 : 40
  modalImage.style.transform = `rotate(${rotateFactor}deg)`
}

const modalBtn = document.getElementById("modal-btn");
modalBtn.addEventListener("click", () => {
  let modal = document.getElementById("success-modal"); 
  modal.style.display = "none";
})
