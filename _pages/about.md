---
layout: about
title: about
permalink: /
subtitle: About Me
---

<div class="typing-container">
  <img src="/assets/img/prof_pic.jpg" alt="Profile Picture" align="right" style="width: 200px; height: auto;">
  <p id="typing-text"></p>
  <span id="typing-cursor"></span>
</div>

<script>
const textToType = [
  "I'm an Industrial Ph.D. student at Aarhus University/EIVA in Denmark,",
  "on a mission to take underwater robotics to the next level.",
  "My research interests are learning-based optimal control,",
  "modeling, and robotics in general."
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = textToType[textIndex];
  if (!isDeleting && charIndex <= currentText.length) {
    document.getElementById('typing-text').innerHTML = currentText.substring(0, charIndex);
    charIndex++;
    setTimeout(typeText, 50); // Faster typing speed
  } else if (isDeleting && charIndex >= 0) {
    document.getElementById('typing-text').innerHTML = currentText.substring(0, charIndex);
    charIndex--;
    setTimeout(typeText, 25); // Faster deleting speed
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % textToType.length;
    }
    setTimeout(typeText, 250); // Pause between sentences
  }
}

document.addEventListener('DOMContentLoaded', typeText);
</script>
