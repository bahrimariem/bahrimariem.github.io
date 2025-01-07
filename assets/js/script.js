'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// Skills
// add the name of each image title here
const imageNames = ["css.svg", 
                    "html.svg",
                    "js.svg",
                    "tp.svg",
                    "php.svg",
                    "node.svg",
                    "firebase.svg",
                    "react.svg", 
                    "svelte.svg", 
                    "tailwind.svg",
                    "git.svg", 
                    "github.svg", 
                    "postman.svg",
                    "wp.svg",
                    "figma.svg", 
                    "linear.svg", 
                    "notion.svg",
                    "slack.svg", 
                      ];

const sliderItems = imageNames.concat(imageNames);

  const slider = document.getElementById("slide-track");

  sliderItems.forEach((sliderItem) => {
    const img = document.createElement("img");
    img.src = "./assets/images/skills/" + sliderItem; //path to your folder image
    img.className = "slide-item";
    slider.appendChild(img);
  });







  /*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
 
    const buttons = document.querySelectorAll('.tab-buttons button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(button.getAttribute('data-tab')).classList.add('active');
        });
    });


    // contact

   
      // Initialize EmailJS with your Public Key
      emailjs.init("o-kglsybixVpLiHAa"); // Replace with your Public Key
    
      // Handle Form Submission
      document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        const formMessage = document.getElementById("form-message");
        const formData = new FormData(this);
    
        // Clear previous message
        formMessage.textContent = "";
    
        // Show a loading message
        formMessage.textContent = "Sending message...";
        formMessage.style.color = "blue";
    
        // Send the form data to EmailJS
        emailjs.send("service_atb1h1w", "template_jbt8urx", {
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        })
          .then(() => {
            // Success message
            formMessage.textContent = "Your message has been sent successfully!";
            formMessage.style.color = "green";
            this.reset(); // Reset the form fields
          })
          .catch((error) => {
            // Error message
            console.error("EmailJS Error:", error);
            formMessage.textContent = "Failed to send message. Please try again.";
            formMessage.style.color = "red";
          });
      });
    
