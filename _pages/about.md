---
layout: about
title: about
permalink: /
subtitle: "About Me"
---

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
    setTimeout(typeText, 100);
  } else if (isDeleting && charIndex >= 0) {
    document.getElementById('typing-text').innerHTML = currentText.substring(0, charIndex);
    charIndex--;
    setTimeout(typeText, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % textToType.length;
    }
    setTimeout(typeText, 500);
  }
}

document.addEventListener('DOMContentLoaded', typeText);
</script>

<div class="typing-container">
  <p id="typing-text"></p>
  <span id="typing-cursor"></span>
</div>


