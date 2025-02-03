const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});
// ScrollReveal().reveal("timeline", {
//   ...scrollRevealOption,
//   delay: 1000,
//   interval: 500,
// });


const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
const services = [
  "AI Generated Content",
  "Short Form Content",
  "Repurposed",
  "2D Motion Animation",
  "Spokesperson Videos",
  "UGC Influencer Videos",
  "Faceless / Stock Videos",
  "Podcast Video Editing",
  "YouTube Videos"
];

const leftList = document.getElementById("left-list");
const rightList = document.getElementById("right-list");

services.forEach((service, index) => {
  const li = document.createElement("li");
  li.innerHTML = `<span class="check-icon">✔</span> ${service}`;

  if (index < 5) {
      leftList.appendChild(li);
  } else {
      rightList.appendChild(li);
  }
});
 // Create image element
//  const img = document.createElement("img");
//  img.src = "tick-image.png";  // Replace with your actual tick image path
//  img.alt = "Tick Icon";
//  img.classList.add("check-icon");

 // Append image and text to list item
//  li.appendChild(img);
//  li.appendChild(document.createTextNode(service));

//  if (index < 5) {
//      leftList.appendChild(li);
//  } else {
//      rightList.appendChild(li);
//  }
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const items = [
//       "AI Generated Content",
//       "UGC Influencer Videos",
//       "Short Form Content",
//       "Faceless / Stock Videos",
//       "Repurposed",
//       "Podcast Video Editing",
//       "2D Motion Animation",
//       "YouTube Videos",
//       "Spokesperson Videos"
//   ];

//   const list = document.querySelector('.content-list');

//   items.forEach(item => {
//       const listItem = document.createElement('li');
//       listItem.classList.add('content-item');
      
//       const img = document.createElement('img');
//       img.src = 'tick-image.png';  // Adjust the image path
//       img.alt = 'Tick Icon';
//       img.classList.add('tick-image');
      
//       listItem.appendChild(img);
//       listItem.appendChild(document.createTextNode(item));

//       list.appendChild(listItem);
//   });
// });
// const services = [
//   { name: "AI Generated Content", img: "cemera" },
//   { name: "Short Form Content", img: "short-form-icon.png" },
//   { name: "Repurposed", img: "repurposed-icon.png" },
//   { name: "2D Motion Animation", img: "animation-icon.png" },
//   { name: "Spokesperson Videos", img: "spokesperson-icon.png" },
//   { name: "UGC Influencer Videos", img: "ugc-icon.png" },
//   { name: "Faceless / Stock Videos", img: "faceless-icon.png" },
//   { name: "Podcast Video Editing", img: "podcast-icon.png" },
//   { name: "YouTube Videos", img: "youtube-icon.png" }
// ];

// const leftList = document.getElementById("left-list");
// const rightList = document.getElementById("right-list");

// // Loop through services and add them as list items
// services.forEach((service, index) => {
//   const li = document.createElement("li");

//   // Create image element
//   const img = document.createElement("img");
//   img.src = service.img;  // Different images for each service
//   img.alt = "Tick Icon";
//   img.classList.add("check-icon");

//   // Append image and text to list item
//   li.appendChild(img);
//   li.appendChild(document.createTextNode(service.name));

//   if (index < 5) {
//       leftList.appendChild(li);
//   } else {
//       rightList.appendChild(li);
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const section = document.querySelector('.features');

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // When the section is in view, start the animation
//         section.style.animation = "moveline 6s linear forwards";
//       } else {
//         // Optional: You can reset the animation if it leaves the view
//         section.style.animation = "none";
//       }
//     });
//   }, {
//     threshold: 0.5 // Adjust this depending on when you want the animation to start
//   });

//   observer.observe(section);
// });

