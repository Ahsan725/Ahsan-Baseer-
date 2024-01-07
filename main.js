var typed = new Typed(".text", {
  strings: [
    "a Software Engineer.",
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
    "Node JS.",
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
  strings: [
    "Ahsan.",
  ],
  typeSpeed: 400,
  backSpeed: 100,
  backDelay: 3000,
  loop: false,
});

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};