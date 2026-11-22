/* ==========================================================================
   Site Interactions: Theme Toggle, Mobile Nav, Tag Filter, BibTeX, Lightbox
   ========================================================================== */
(function () {
  // 1. Theme toggle
  var themeBtn = document.getElementById("theme-toggle");
  function syncThemeIcon() {
    if (!themeBtn) return;
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    themeBtn.innerHTML = isDark
      ? '<i class="fa-solid fa-sun" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
    themeBtn.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
  syncThemeIcon();

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      syncThemeIcon();
    });
  }

  // 2. Mobile menu toggle
  var menuBtn = document.getElementById("mobile-menu-btn");
  var nav = document.getElementById("site-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // 3. Category filters (Publications & Projects)
  document.querySelectorAll("[data-filter-group]").forEach(function (bar) {
    var targetSelector = bar.getAttribute("data-filter-group");
    var items = document.querySelectorAll(targetSelector);
    var yearGroups = document.querySelectorAll("[data-year-section]");

    bar.querySelectorAll(".filter-pill").forEach(function (pill) {
      pill.addEventListener("click", function () {
        bar.querySelectorAll(".filter-pill").forEach(function (p) {
          p.classList.remove("active");
        });
        pill.classList.add("active");
        var filter = pill.getAttribute("data-filter");

        items.forEach(function (card) {
          if (filter === "all") {
            card.hidden = false;
            return;
          }
          var tags = (card.getAttribute("data-tags") || "").split(/\s+/);
          card.hidden = tags.indexOf(filter) === -1;
        });

        yearGroups.forEach(function (sec) {
          var visible = sec.querySelectorAll(".pub-card:not([hidden])").length;
          sec.hidden = visible === 0;
        });
      });
    });
  });

  // 4. BibTeX toggle & copy
  document.querySelectorAll("[data-bib-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-bib-toggle");
      var drawer = document.getElementById(id);
      if (drawer) drawer.classList.toggle("open");
    });
  });

  document.querySelectorAll(".copy-bib-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pre = btn.parentElement.querySelector("pre");
      if (!pre || !navigator.clipboard) return;
      navigator.clipboard.writeText(pre.textContent.trim()).then(function () {
        var orig = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(function () {
          btn.textContent = orig;
        }, 1400);
      });
    });
  });

  // 5. Obfuscated email click handler ("at" instead of "@")
  document.querySelectorAll("[data-email-user]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var u = el.getAttribute("data-email-user");
      var d = el.getAttribute("data-email-domain");
      if (u && d) window.location.href = "mailto:" + u + "@" + d;
    });
  });

  // 6. Image / GIF Lightbox
  var backdrop = document.createElement("div");
  backdrop.className = "lightbox-backdrop";
  backdrop.innerHTML = '<img src="" alt="Preview">';
  document.body.appendChild(backdrop);
  var lbImg = backdrop.querySelector("img");

  document.querySelectorAll(".pub-thumb img, .project-media img, .pillar-card img").forEach(function (img) {
    img.addEventListener("click", function () {
      lbImg.src = img.src;
      lbImg.alt = img.alt || "Preview";
      backdrop.classList.add("open");
    });
  });

  backdrop.addEventListener("click", function () {
    backdrop.classList.remove("open");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") backdrop.classList.remove("open");
  });
})();
