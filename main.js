var typed = new Typed(".text", {
  strings: [
    "a Software Engineer.",
    "a Computer Science Student.",
    "a Frontend Developer.",
    "a Backend Developer.",
    "an IOS Developer.",
    "a UI / UX Designer.",
    "an AI / ML Engineer.",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3000,
  loop: true,
});

var typed1 = new Typed(".text1", {
  strings: [
    "Java.",
    "Python.",
    "HTML.",
    "JavaScript.",
    "TypeScript",
    "CSS.",
    "React.",
    "Node.js.",
    "Express.js.",
    "MySQL.",
    "PHP.",
    "C++.",
    "Swift.",
    "Bootstrap.",
    "API.",
    "React JS.",
    "Redux.",
    "Next JS.",
    "Figma.",
    "UI / UX.",
    "Tailwind.",
    "Auth JS.",
    "OAuth.",
    "Clerk.",
    "NoSQL.",
    "DBMS.",
    "ORM.",
    "AWS.",
    "MongoDB.",
    "Git.",
    "GitHub.",
    "Continuous Integration(CI).",
    "Continuous Delivery(CD).",
    "Test Driven Development(TDD).",
    "Problem Solving.",
    "Artificial Intelligence.",
    "Machine Learning.",
    "SaaS.",
    "Object Oriented Programming.",
    "RESTful APIs.",
    "IOS.",
    "Android.",
    "HTTP.",
    "Xcode.",
  ],
  typeSpeed: 100,
  backSpeed: 70,
  backDelay: 3000,
  loop: true,
});

var typed2 = new Typed(".text2", {
  strings: ["Ahsan."],
  typeSpeed: 400,
  backSpeed: 100,
  backDelay: 3000,
  loop: false,
});

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

document.getElementById("email").addEventListener("click", function () {
  window.location.href = "mailto:sbaseer25@gmail.com";
});

// document.getElementById("email1").addEventListener("click", function () {
//   window.location.href = "mailto:sbaseer25@gmail.com";
// });

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const themeToggleBtn = document.getElementById("themeToggle");

  // Check if the user has a preferred theme stored in localStorage
  const preferredTheme = localStorage.getItem("theme");

  // Apply the preferred theme or default to 'dark-mode'
  body.classList.toggle("light-mode", preferredTheme === "light");

  // Add an event listener to the button for theme toggling
  themeToggleBtn.addEventListener("click", function () {
    // Toggle the 'light-mode' class on the body
    body.classList.toggle("light-mode");

    // Save the user's preference to localStorage
    const isLightMode = body.classList.contains("light-mode");
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const themeToggleBtn = document.getElementById("themeToggle1");

  // Check if the user has a preferred theme stored in localStorage
  const preferredTheme = localStorage.getItem("theme");

  // Apply the preferred theme or default to 'dark-mode'
  body.classList.toggle("light-mode", preferredTheme === "light");

  // Add an event listener to the button for theme toggling
  themeToggleBtn.addEventListener("click", function () {
    // Toggle the 'light-mode' class on the body
    body.classList.toggle("light-mode");

    // Save the user's preference to localStorage
    const isLightMode = body.classList.contains("light-mode");
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  });
});

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    progressBar.style.width = `${scrolled}%`;
});

const boxes = document.querySelectorAll('.box');

function showBoxesOnScroll() {
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight) {
      box.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', showBoxesOnScroll);

function displaySuccessMessage() {
  var existingDiv = document.getElementById('existingDiv');
  var successMessage = document.createElement('div');
  successMessage.textContent = 'Success! Your message was sent ✓';
  successMessage.classList.add('success-message'); // Add the 'success-message' class for styling
  existingDiv.appendChild(successMessage);

  // Hide the message after 3 seconds
  setTimeout(function() {
      existingDiv.removeChild(successMessage);
  }, 3000); // 10000 milliseconds = 10 seconds
}

// Call the function when the page is loaded
window.onload = displaySuccessMessage;



// JavaScript code for autoplay functionality
var scrollInterval;
var containerWidth;
var scrollPosition = 0;

// Function to start autoplay
function startAutoplay() {
    containerWidth = document.querySelector('.grid-auto-md').scrollWidth;
    scrollInterval = setInterval(function() {
        scrollPosition += 200; // Adjust scroll amount as needed
        if (scrollPosition >= containerWidth) {
            scrollPosition = 0;
        }
        scrollContainer(scrollPosition);
    }, 4000); // Adjust autoplay interval as needed (in milliseconds)
}

// Function to stop autoplay
function stopAutoplay() {
    clearInterval(scrollInterval);
}

// Function to scroll the container to a specific position
function scrollContainer(position) {
    var container = document.querySelector('.grid-auto-md');
    container.scrollTo({
        left: position,
        behavior: 'smooth'
    });
}

// Start autoplay when the page loads
document.addEventListener('DOMContentLoaded', function() {
    startAutoplay();
});

// Pause autoplay when the container is hovered
document.querySelector('.grid-auto-md').addEventListener('mouseenter', function() {
    stopAutoplay();
});

// Resume autoplay when the container is not hovered
document.querySelector('.grid-auto-md').addEventListener('mouseleave', function() {
    startAutoplay();
});


function prevButtonClick() {
  scrollPosition -= 200; // Adjust scroll amount as needed
  if (scrollPosition < 0) {
      scrollPosition = containerWidth - container.clientWidth;
  }
  scrollContainer(scrollPosition);
}

// Function to handle next button click
function nextButtonClick() {
  scrollPosition += 200; // Adjust scroll amount as needed
  if (scrollPosition >= containerWidth) {
      scrollPosition = 0;
  }
  scrollContainer(scrollPosition);
}