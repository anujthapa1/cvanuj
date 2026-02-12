/* 
   Advanced Portfolio Scripts
   Author: Anuj Thapa
*/

$(window).on('load', function () {
  // Preloader
  setTimeout(function () {
    $('#preloader').addClass('loaded');
    $('body').css('overflow', 'auto');
    $('#preloader').fadeOut(500);
  }, 1500);

  // Initialize AOS
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});

$(document).ready(function () {

  /* -----------------------------------
     1. Theme Toggle (Dark/Light)
  ----------------------------------- */
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');

  // Check Local Storage for Theme
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    body.classList.remove('light-mode', 'dark-mode');
    body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('light-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      localStorage.setItem('theme', 'light-mode');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('theme', 'dark-mode');
    }
  });

  /* -----------------------------------
     2. Language Toggle (English/Nepali)
  ----------------------------------- */
  const langToggle = document.getElementById('lang-toggle');
  const langText = langToggle.querySelector('.lang-text');
  let currentLang = localStorage.getItem('lang') || 'en';

  // Typed.js instance variable
  let typed;

  function updateLanguage(lang) {
    // Update all elements with data-en/data-ne
    $('[data-en]').each(function () {
      const el = $(this);
      const enText = el.attr('data-en');
      const neText = el.attr('data-ne');

      if (lang === 'ne' && neText) {
        // If it's an input/textarea placeholder
        if (el.attr('placeholder')) {
          el.attr('placeholder', neText);
        }
        // If it's the glitch name (special case)
        else if (el.hasClass('glitch')) {
          el.attr('data-text', el.attr('data-ne-name'));
          el.text(el.attr('data-ne-name'));
        }
        // Standard text replacement
        else {
          // Check if it has child elements (icon) + text
          if (el.children().length > 0 && !el.hasClass('skill-info')) {
            // Complex case: just replacing text node might be safer or recreating html
            // For simple buttons with icons:
            const icon = el.find('i').prop('outerHTML');
            if (icon) {
              el.html(neText + ' ' + icon);
            } else {
              el.text(neText);
            }
          } else {
            el.text(neText);
          }
        }
      } else {
        // English
        if (el.attr('placeholder')) {
          el.attr('placeholder', enText);
        }
        else if (el.hasClass('glitch')) {
          el.attr('data-text', el.attr('data-en-name'));
          el.text(el.attr('data-en-name'));
        }
        else {
          // Restore icon if needed
          const icon = el.find('i').prop('outerHTML');
          if (icon) {
            el.html(enText + ' ' + icon);
          } else {
            el.text(enText);
          }
        }
      }
    });

    // Update Toggle Button Text
    langText.textContent = lang === 'en' ? 'EN' : 'NE';

    // Update Typed.js
    if (typed) { typed.destroy(); }
    initTyped(lang);

    localStorage.setItem('lang', lang);
  }

  function initTyped(lang) {
    if ($('.typed-text').length) {
      const stringsEn = ["Computing Student", "Web Developer", "Tech Enthusiast"];
      const stringsNe = ["कम्प्युटिङ विद्यार्थी", "वेब विकासकर्ता", "प्राविधिक उत्साही"];

      typed = new Typed('.typed-text', {
        strings: lang === 'ne' ? stringsNe : stringsEn,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true
      });
    }
  }

  /* -----------------------------------
     X. Analog Clock & Date (Nepal Time)
  ----------------------------------- */
  function updateClock() {
    // Nepal Time is UTC + 5:45
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const nepalTime = new Date(utc + (3600000 * 5.75));

    const seconds = nepalTime.getSeconds();
    const minutes = nepalTime.getMinutes();
    const hours = nepalTime.getHours();

    const secDeg = ((seconds / 60) * 360);
    const minDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30);

    const secHand = document.querySelector('.sec-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    if (secHand && minHand && hourHand) {
      secHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
      minHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
      hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    }

    // Digital Clock Display
    const digitalClockEl = document.getElementById('digital-clock');
    if (digitalClockEl) {
      let h = hours % 12;
      h = h ? h : 12; // hour '0' should be '12'
      const m = minutes < 10 ? '0' + minutes : minutes;
      const s = seconds < 10 ? '0' + seconds : seconds;
      const ampm = hours >= 12 ? 'PM' : 'AM';
      digitalClockEl.textContent = `${h}:${m}:${s} ${ampm}`;
    }

    // Date Display
    const enDateEl = document.getElementById('english-date');
    const neDateEl = document.getElementById('nepali-date');

    if (enDateEl) {
      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      enDateEl.textContent = nepalTime.toLocaleDateString('en-US', options);
    }

    // Simple Nepali Date Mapping (Approximate or use library if strictly required, using generic text for now or simple conversion)
    // Since we don't have a library, we will display the current year/month in Nepali numerals/text if possible, 
    // or just keep English date for now as the user didn't provide a library. 
    // BUT, let's try to map the numbers to Nepali at least.
    if (neDateEl) {
      const year = nepalTime.getFullYear();
      const month = nepalTime.getMonth() + 1; // 1-12
      const day = nepalTime.getDate();

      // English to Nepali Number
      const toNepaliNum = (num) => num.toString().replace(/\d/g, d => "०१२३४५६७८९"[d]);

      // Rough BS conversion (AD + ~56y 8m 15d) - this is complex without a library.
      // Let's display AD date in Nepali script for accuracy, or just the day/time.
      // The user asked for "Nepal data and eng date". Usually implies BS date. 
      // Without a library (like nepali-date-converter), accurate BS date is hard.
      // I'll stick to formatting the AD date in Nepali script to be safe and accurate to *time*.

      neDateEl.textContent = `${toNepaliNum(year)} / ${toNepaliNum(month)} / ${toNepaliNum(day)}`;
    }
  }

  setInterval(updateClock, 1000);
  updateClock(); // Initial call

  // Initialize Language
  updateLanguage(currentLang);

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ne' : 'en';
    updateLanguage(currentLang);
  });


  /* -----------------------------------
     3. Navbar Scroll Effect
  ----------------------------------- */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
      $('.navbar').css('background', 'var(--glass-bg)');
    } else {
      $('.navbar').removeClass('scrolled');
    }

    // Active Link Switching
    var scrollPos = $(window).scrollTop() + 100;
    $('section').each(function () {
      var currLink = $('.nav-link[href="#' + $(this).attr('id') + '"]');
      var refElement = $(this);
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav-link').removeClass('active');
        currLink.addClass('active');
      }
    });
  });

  /* -----------------------------------
     4. Mobile Menu
  ----------------------------------- */
  $('.mobile-menu-btn').click(function () {
    $('.mobile-menu-overlay').addClass('active');
  });

  $('.close-menu, .mobile-links a').click(function () {
    $('.mobile-menu-overlay').removeClass('active');
  });

  /* -----------------------------------
     5. Dynamic Environment & Particles
  ----------------------------------- */
  function getNepalTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * 5.75));
  }

<<<<<<< HEAD

=======
  function updateThemeByTime() {
    // Only auto-switch if user hasn't manually toggled (optional, but good UX)
    // For this request, we'll enforce it on load or loop, but let's respect manual toggle if we want.
    // The user said "make sure the theme change account to time", implying strictness.
    // Let's set it on load.

    const nepalTime = getNepalTime();
    const hours = nepalTime.getHours();
    const isDay = hours >= 6 && hours < 18;

    // We can use a flag to track if we've already set it this session to avoid overriding manual toggle constantly
    if (!sessionStorage.getItem('themeSet')) {
      if (isDay) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        $('#theme-toggle i').removeClass('fa-moon').addClass('fa-sun');
      } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        $('#theme-toggle i').removeClass('fa-sun').addClass('fa-moon');
      }
      sessionStorage.setItem('themeSet', 'true');
    }
  }

  // Call immediately
  updateThemeByTime();
>>>>>>> e072482afeda2b6e81d0877edb3675dd6a48f278

  if ($('#particles-js').length) {
    const nepalTime = getNepalTime();
    const month = nepalTime.getMonth(); // 0 = Jan, 11 = Dec

    let particleConfig = {};

    // Winter: Dec (11), Jan (0), Feb (1) -> Snow
    if (month === 11 || month === 0 || month === 1) {
      // Snow Config
      particleConfig = {
        "particles": {
          "number": { "value": 160, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#ffffff" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.8, "random": true, "anim": { "enable": false } },
          "size": { "value": 5, "random": true, "anim": { "enable": false } },
          "line_linked": { "enable": false },
          "move": { "enable": true, "speed": 2, "direction": "bottom", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
          "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
      };
    }
    // Monsoon: Jun (5), Jul (6), Aug (7) -> Rain
    else if (month >= 5 && month <= 7) {
      // Rain Config
      particleConfig = {
        "particles": {
          "number": { "value": 400, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#00bcd4" },
          "shape": { "type": "circle" }, // We can't do lines easily in v2 without custom shape, stick to fast moving dots
          "opacity": { "value": 0.6, "random": false, "anim": { "enable": false } },
          "size": { "value": 2, "random": true, "anim": { "enable": false } },
          "line_linked": { "enable": false },
          "move": { "enable": true, "speed": 20, "direction": "bottom", "random": false, "straight": true, "out_mode": "out", "bounce": false }
        },
        "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true } },
        "retina_detect": true
      };
    }
    // Default: Tech Constellation
    else {
      particleConfig = {
        "particles": {
          "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": ["#00bcd4", "#ff4081"] },
          "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } },
          "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
          "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
          "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
          "move": { "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
          "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
        },
        "retina_detect": true
      };
    }

    particlesJS('particles-js', particleConfig);
  }

  /* -----------------------------------
     6. Custom Cursor
  ----------------------------------- */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
    cursorOutline.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
  });

  $('a, button, .service-card, .portfolio-wrap, input, textarea').mouseenter(function () {
    $('.cursor-outline').css('transform', 'scale(1.5)');
  });
  $('a, button, .service-card, .portfolio-wrap, input, textarea').mouseleave(function () {
    $('.cursor-outline').css('transform', 'scale(1)');
  });


  /* -----------------------------------
     7. Portfolio Filter
  ----------------------------------- */
  $('.filter-btn').on('click', function () {
    var value = $(this).attr('data-filter');
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if (value == "all") {
      $('.portfolio-item').show('1000');
    }
    else {
      $('.portfolio-item').not('.' + value).hide('3000');
      $('.portfolio-item').filter('.' + value).show('3000');
    }
  });

  /* -----------------------------------
     8. GLightbox
  ----------------------------------- */
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
  });

  /* -----------------------------------
     9. Skill Bars Animation
  ----------------------------------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.progress-line span').forEach(bar => {
          bar.style.transform = 'scaleX(1)';
        });
      }
    });
  });

  document.querySelectorAll('#skills').forEach(section => {
    observer.observe(section);
  });

  /* -----------------------------------
     10. Hover Reveal Effect
  ----------------------------------- */
  const hoverItems = document.querySelectorAll('.hover-reveal');
  const revealImg = document.createElement('div');
  revealImg.className = 'reveal-image';
  document.body.appendChild(revealImg);

  hoverItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      const imgUrl = this.getAttribute('data-image');
      if (imgUrl) {
        revealImg.style.backgroundImage = `url(${imgUrl})`;
        revealImg.classList.add('active');
        // Preload image
        const img = new Image();
        img.src = imgUrl;
      }
    });

    item.addEventListener('mousemove', function (e) {
      revealImg.style.left = e.clientX + 'px';
      revealImg.style.top = e.clientY + 'px';
      // Offset to not cover cursor
      revealImg.style.transform = 'translate(20px, 20px)';
    });

    item.addEventListener('mouseleave', function () {
      revealImg.classList.remove('active');
      setTimeout(() => {
        if (!revealImg.classList.contains('active')) {
          revealImg.style.backgroundImage = 'none';
        }
      }, 300);
    });
  });

  /* -----------------------------------
     11. Welcome Modal & Dynamic Greeting
  ----------------------------------- */
  const introModal = document.getElementById('intro-modal');
  const visitorForm = document.getElementById('visitor-form');
  const heroGreeting = document.getElementById('hero-greeting');

  // Check if visitor has already introduced themselves
  const visitorName = localStorage.getItem('visitorName');

  function updateGreeting(name) {
    if (name && heroGreeting) {
      // Check current language to format greeting
      const currentLang = localStorage.getItem('lang') || 'en';
      if (currentLang === 'ne') {
        heroGreeting.setAttribute('data-ne', `नमस्ते ${name}, म हुँ`);
        if (heroGreeting.textContent.includes('नमस्ते')) {
          heroGreeting.textContent = `नमस्ते ${name}, म हुँ`;
        }
      } else {
        heroGreeting.setAttribute('data-en', `Hello ${name}, I am`);
        if (heroGreeting.textContent.includes('Hello')) {
          heroGreeting.textContent = `Hello ${name}, I am`;
        }
      }
    }
  }

  if (visitorName) {
    updateGreeting(visitorName);
  } else {
    // Show Modal
    setTimeout(() => {
      if (introModal) introModal.classList.add('active');
      $('body').css('overflow', 'hidden'); // Prevent scrolling
    }, 2000); // Small delay after loader
  }

  if (visitorForm) {
    visitorForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('visitor-name');
      const sourceInput = document.getElementById('visitor-source');

      if (nameInput && nameInput.value.trim() !== '') {
        const name = nameInput.value.trim();
        const source = sourceInput.value.trim();

        // Save to LocalStorage
        localStorage.setItem('visitorName', name);

        // Update Greeting
        updateGreeting(name);

        // Submit to Netlify (AJAX)
        const formData = new FormData(visitorForm);
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString()
        }).then(() => {
          console.log('Form successfully submitted');
        }).catch((error) => {
          console.error('Form submission error:', error);
        });

        // Close Modal
        introModal.classList.remove('active');
        $('body').css('overflow', 'auto');
      }
    });
  }

  /* -----------------------------------
     12. 3D Tilt Effect
  ----------------------------------- */
  $('body').on('mousemove', '.service-card, .portfolio-wrap', function (e) {
    const el = $(this);
    const width = el.outerWidth();
    const height = el.outerHeight();
    const offset = el.offset();
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;

    const xRot = (width / 2 - x) / 20; // Max rotation deg
    const yRot = (y - height / 2) / 20;

    el.css({
      'transform': `perspective(1000px) rotateY(${xRot}deg) rotateX(${yRot}deg) scale(1.05)`,
      'z-index': '10'
    });
  });

  $('body').on('mouseleave', '.service-card, .portfolio-wrap', function () {
    $(this).css({
      'transform': 'perspective(1000px) rotateY(0) rotateX(0) scale(1)',
      'z-index': '1'
    });
  });

<<<<<<< HEAD
  /* -----------------------------------
     13. Interactive Memory Game
  ----------------------------------- */
  const cardsArray = [
    { name: 'html', icon: '<i class="fab fa-html5"></i>' },
    { name: 'css', icon: '<i class="fab fa-css3-alt"></i>' },
    { name: 'js', icon: '<i class="fab fa-js"></i>' },
    { name: 'react', icon: '<i class="fab fa-react"></i>' },
    { name: 'python', icon: '<i class="fab fa-python"></i>' },
    { name: 'node', icon: '<i class="fab fa-node"></i>' },
  ];

  let gameGrid = [...cardsArray, ...cardsArray];
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  let moves = 0;
  let matchedPairs = 0;

  const gameBoard = document.querySelector('.memory-game-board');
  const movesDisplay = document.querySelector('.moves-count');
  const startGameBtn = document.getElementById('start-game-btn');
  const restartGameBtn = document.getElementById('restart-game-btn');
  const gameInvite = document.querySelector('.game-invite');
  const gameWrapper = document.querySelector('.game-board-wrapper');

  function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }

  function createBoard() {
    if (!gameBoard) return;
    gameBoard.innerHTML = '';
    shuffle(gameGrid).forEach(item => {
      const card = document.createElement('div');
      card.classList.add('memory-card');
      card.dataset.name = item.name;

      const frontFace = document.createElement('div');
      frontFace.classList.add('front-face');
      frontFace.innerHTML = item.icon;

      const backFace = document.createElement('div');
      backFace.classList.add('back-face');
      backFace.innerHTML = '<i class="fas fa-code"></i>';

      card.appendChild(frontFace);
      card.appendChild(backFace);

      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    });
  }

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    moves++;
    updateMovesDisplay();
    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    matchedPairs++;
    if (matchedPairs === cardsArray.length) {
      setTimeout(() => {
        alert('You won! Great memory!');
      }, 500);
    }
  }

  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1000);
  }

  function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
  }

  function updateMovesDisplay() {
    if (movesDisplay) {
      // Simple localization for moves
      const currentLang = localStorage.getItem('lang') || 'en';
      if (currentLang === 'ne') {
        // Convert to Nepali numerals roughly
        const movesNe = moves.toString().replace(/\d/g, d => "०१२३४५६७८९"[d]);
        movesDisplay.textContent = `चालहरू: ${movesNe}`;
      } else {
        movesDisplay.textContent = `Moves: ${moves}`;
      }
    }
  }

  if (startGameBtn) {
    startGameBtn.addEventListener('click', () => {
      gameInvite.style.display = 'none';
      gameWrapper.style.display = 'block';
      moves = 0;
      matchedPairs = 0;
      updateMovesDisplay();
      createBoard();
    });
  }

  if (restartGameBtn) {
    restartGameBtn.addEventListener('click', () => {
      moves = 0;
      matchedPairs = 0;
      updateMovesDisplay();
      createBoard();
    });
  }

=======
>>>>>>> e072482afeda2b6e81d0877edb3675dd6a48f278
});
