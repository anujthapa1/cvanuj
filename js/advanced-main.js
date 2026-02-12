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
      const stringsEn = ["Civil Engineer", "Web Developer", "Designer", "Creative Thinker"];
      const stringsNe = ["सिभिल इन्जिनियर", "वेब विकासकर्ता", "डिजाइनर", "रचनात्मक चिन्तक"];

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
     5. Particles.js Config
  ----------------------------------- */
  if ($('#particles-js').length) {
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": ["#00bcd4", "#ff4081"]
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.2,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
    );
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

});
