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
     5. Dynamic Environment & Particles (Weather Based)
  ----------------------------------- */
  async function getLocation() {
    return new Promise((resolve) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lon: position.coords.longitude
            });
          },
          () => {
            // Fallback to IP if geolocation is denied
            resolve(getIPLocation());
          },
          { timeout: 5000 }
        );
      } else {
        resolve(getIPLocation());
      }
    });
  }

  async function getIPLocation() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return {
        lat: data.latitude,
        lon: data.longitude
      };
    } catch (error) {
      console.error("IP Location Error:", error);
      return { lat: 28.2333, lon: 83.9833 }; // Default to Pokhara, Nepal
    }
  }

  async function fetchWeather(lat, lon) {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error("Weather Fetch Error:", error);
      return null;
    }
  }

  const particleConfigs = {
    sunny: {
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
    },
    cloudy: {
      "particles": {
        "number": { "value": 15, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.2, "random": true, "anim": { "enable": false } },
        "size": { "value": 60, "random": true, "anim": { "enable": false } },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 1, "direction": "right", "random": true, "straight": false, "out_mode": "out", "bounce": false }
      },
      "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true } },
      "retina_detect": true
    },
    rainy: {
      "particles": {
        "number": { "value": 400, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00bcd4" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.6, "random": false, "anim": { "enable": false } },
        "size": { "value": 2, "random": true, "anim": { "enable": false } },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 20, "direction": "bottom", "random": false, "straight": true, "out_mode": "out", "bounce": false }
      },
      "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true } },
      "retina_detect": true
    },
    snowy: {
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
    }
  };

  async function initWeatherTheme() {
    if (!$('#particles-js').length) return;

    const location = await getLocation();
    const weather = await fetchWeather(location.lat, location.lon);

    let theme = 'sunny';
    if (weather && weather.current_weather) {
      const code = weather.current_weather.weathercode;
      // WMO Weather interpretation codes (WW)
      if (code === 0 || code === 1) theme = 'sunny';
      else if ([2, 3, 45, 48].includes(code)) theme = 'cloudy';
      else if ([51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99].includes(code)) theme = 'rainy';
      else if ([71, 73, 75, 77, 85, 86].includes(code)) theme = 'snowy';
    }

    // Apply Weather Class to Body
    $('body').removeClass('weather-sunny weather-cloudy weather-rainy weather-snowy');
    $('body').addClass(`weather-${theme}`);

    // Initialize Particles
    if (window.particlesJS) {
      particlesJS('particles-js', particleConfigs[theme]);
    }
  }

  initWeatherTheme();

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

    if (neDateEl) {
      const year = nepalTime.getFullYear();
      const month = nepalTime.getMonth() + 1; // 1-12
      const day = nepalTime.getDate();
      const toNepaliNum = (num) => num.toString().replace(/\d/g, d => "०१२३४५६७८९"[d]);
      neDateEl.textContent = `${toNepaliNum(year)} / ${toNepaliNum(month)} / ${toNepaliNum(day)}`;
    }
  }

  setInterval(updateClock, 1000);
  updateClock(); // Initial call

<<<<<<< HEAD
=======
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
     5. Dynamic Environment & Particles (Weather Based)
  ----------------------------------- */
  const particleConfigs = {
    sunny: {
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
    },
    cloudy: {
      "particles": {
        "number": { "value": 15, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.2, "random": true, "anim": { "enable": false } },
        "size": { "value": 60, "random": true, "anim": { "enable": false } },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 1, "direction": "right", "random": true, "straight": false, "out_mode": "out", "bounce": false }
      },
      "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true } },
      "retina_detect": true
    },
    rainy: {
      "particles": {
        "number": { "value": 400, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00bcd4" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.6, "random": false, "anim": { "enable": false } },
        "size": { "value": 2, "random": true, "anim": { "enable": false } },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 20, "direction": "bottom", "random": false, "straight": true, "out_mode": "out", "bounce": false }
      },
      "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false }, "resize": true } },
      "retina_detect": true
    },
    snowy: {
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
    }
  };

  async function getLocation() {
    return new Promise((resolve) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({ lat: position.coords.latitude, lon: position.coords.longitude });
          },
          () => resolve(getIPLocation()),
          { timeout: 5000 }
        );
      } else {
        resolve(getIPLocation());
      }
    });
  }

  async function getIPLocation() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return { lat: data.latitude, lon: data.longitude };
    } catch (error) {
      return { lat: 28.2333, lon: 83.9833 }; // Default to Pokhara, Nepal
    }
  }
>>>>>>> origin/weather-based-theme-17369377138111460919

  async function fetchWeather(lat, lon) {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      return null;
    }
  }

  async function initWeatherTheme() {
    if (!$('#particles-js').length) return;

    // Check for weather override in URL for testing
    const urlParams = new URLSearchParams(window.location.search);
    let theme = urlParams.get('weather');

    if (!theme) {
      const location = await getLocation();
      const weather = await fetchWeather(location.lat, location.lon);

      theme = 'sunny';
      if (weather && weather.current_weather) {
        const code = weather.current_weather.weathercode;
        // WMO Weather interpretation codes
        if (code === 0 || code === 1) theme = 'sunny';
        else if ([2, 3, 45, 48].includes(code)) theme = 'cloudy';
        else if ([51, 53, 55, 61, 63, 65, 80, 81, 82, 95, 96, 99].includes(code)) theme = 'rainy';
        else if ([71, 73, 75, 77, 85, 86].includes(code)) theme = 'snowy';
      }
    }

    $('body').removeClass('weather-sunny weather-cloudy weather-rainy weather-snowy').addClass(`weather-${theme}`);

    if (window.particlesJS) {
      particlesJS('particles-js', particleConfigs[theme]);
    }
  }

  initWeatherTheme();

  /* -----------------------------------
     6. Custom Cursor
  ----------------------------------- */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  if (cursorDot && cursorOutline) {
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
  }


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
  if (window.GLightbox) {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }

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

  /* -----------------------------------
     13. Interactive Dino Game
  ----------------------------------- */
  const canvas = document.getElementById('dino-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  const scoreEl = document.getElementById('dino-score');
  const highScoreEl = document.getElementById('dino-high-score');
  const startOverlay = document.getElementById('dino-start-overlay');
  const gameOverOverlay = document.getElementById('dino-game-over-overlay');
  const restartBtn = document.getElementById('dino-restart-btn');

  if (canvas && ctx) {
    let gameRunning = false;
    let score = 0;
    let highScore = localStorage.getItem('dinoHighScore') || 0;
    if (highScoreEl) highScoreEl.textContent = highScore;

    const dino = {
      x: 50,
      y: 0,
      width: 30,
      height: 30,
      dy: 0,
      jumpForce: 10,
      gravity: 0.6,
      grounded: false,
      color: '#ff4081'
    };

    let obstacles = [];
    let gameSpeed = 5;
    let spawnTimer = 0;

    function resizeCanvas() {
      const wrapper = canvas.parentElement;
      canvas.width = wrapper.clientWidth;
      canvas.height = wrapper.clientHeight;
      dino.y = canvas.height - dino.height - 10;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function startGame() {
      gameRunning = true;
      score = 0;
      if (scoreEl) scoreEl.textContent = score;
      obstacles = [];
      gameSpeed = 5;
      spawnTimer = 0;
      dino.y = canvas.height - dino.height - 10;
      dino.dy = 0;
      if (startOverlay) startOverlay.style.display = 'none';
      if (gameOverOverlay) gameOverOverlay.style.display = 'none';
      requestAnimationFrame(gameLoop);
    }

    function gameOver() {
      gameRunning = false;
      if (gameOverOverlay) gameOverOverlay.style.display = 'flex';
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('dinoHighScore', highScore);
        if (highScoreEl) highScoreEl.textContent = highScore;
      }
    }

    function jump() {
      if (!gameRunning) {
        if (gameOverOverlay && gameOverOverlay.style.display === 'flex') return;
        startGame();
      } else if (dino.grounded) {
        dino.dy = -dino.jumpForce;
        dino.grounded = false;
      }
    }

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        const isInViewport = (el) => {
          const rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        };
        if (isInViewport(canvas)) {
           e.preventDefault();
           jump();
        }
      }
    });

    canvas.parentElement.addEventListener('click', jump);
    if (restartBtn) {
      restartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startGame();
      });
    }

    function spawnObstacle() {
      const size = Math.random() * 20 + 20;
      obstacles.push({
        x: canvas.width,
        y: canvas.height - size - 10,
        width: 15,
        height: size,
        color: '#00bcd4'
      });
    }

    function gameLoop() {
      if (!gameRunning) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ground
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 10);
      ctx.lineTo(canvas.width, canvas.height - 10);
      ctx.stroke();

      // Dino Physics
      dino.dy += dino.gravity;
      dino.y += dino.dy;

      if (dino.y + dino.height > canvas.height - 10) {
        dino.y = canvas.height - dino.height - 10;
        dino.dy = 0;
        dino.grounded = true;
      }

      // Draw Dino
      ctx.fillStyle = dino.color;
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
      ctx.fillStyle = '#fff';
      ctx.fillRect(dino.x + dino.width - 10, dino.y + 5, 5, 5);

      // Obstacles
      spawnTimer++;
      if (spawnTimer > Math.max(60, 100 - gameSpeed * 2)) {
        spawnObstacle();
        spawnTimer = 0;
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        const o = obstacles[i];
        o.x -= gameSpeed;

        ctx.fillStyle = o.color;
        ctx.fillRect(o.x, o.y, o.width, o.height);

        // Collision Detection
        if (
          dino.x < o.x + o.width &&
          dino.x + dino.width > o.x &&
          dino.y < o.y + o.height &&
          dino.y + dino.height > o.y
        ) {
          gameOver();
        }

        if (o.x + o.width < 0) {
          obstacles.splice(i, 1);
          score++;
          if (scoreEl) scoreEl.textContent = score;
          if (score % 5 === 0) gameSpeed += 0.2;
        }
      }

      requestAnimationFrame(gameLoop);
    }
  }

});
