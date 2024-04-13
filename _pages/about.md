---
layout: about
title: About
permalink: /
subtitle: Meet Abdelhakim Amer
---

<div class="typing-container">
  <img src="/assets/img/prof_pic.jpg" alt="Profile Picture" align="right" style="width: 200px; height: auto;">
  <p id="typing-text" class="about-me"></p>
  <span id="typing-cursor"></span>
</div>

<style>
  .about-me {
    font-size: 1.4em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
  }
</style>

<script>
  const textToType = [
    "I am a Control Engineer,",
    "Machine Learning enthusiast,",
    "roboticist,",
    "and a football player."
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
