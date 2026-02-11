$(document).ready(function() {
    console.log("Custom script loaded");

    // Preloader fallback
    setTimeout(function() {
        $('.preloader').fadeOut('slow');
    }, 2000);

    // Initialize AOS
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 50
            });
        }
    }
    initAOS();

    // Language Toggle Logic
    const langToggle = document.getElementById('lang-toggle');
    const langText = document.getElementById('lang-text');
    let currentLang = localStorage.getItem('language') || 'en';

    function updateLanguage(lang) {
        document.querySelectorAll('[data-en]').forEach(el => {
            if (lang === 'ne') {
                el.innerHTML = el.getAttribute('data-ne');
            } else {
                el.innerHTML = el.getAttribute('data-en');
            }
        });

        const placeholders = {
            en: { name: "Name", email: "E-Mail", message: "Message", submit: "Send Message" },
            ne: { name: "नाम", email: "इमेल", message: "सन्देश", submit: "सन्देश पठाउनुहोस्" }
        };

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const submitInput = document.getElementById('submit');

        if (nameInput) nameInput.placeholder = placeholders[lang].name;
        if (emailInput) emailInput.placeholder = placeholders[lang].email;
        if (messageInput) messageInput.placeholder = placeholders[lang].message;
        if (submitInput) submitInput.value = placeholders[lang].submit;

        if (langText) langText.textContent = lang === 'en' ? 'EN' : 'NE';
        if (langToggle) langToggle.title = lang === 'en' ? 'Switch to Nepali' : 'अंग्रेजीमा स्विच गर्नुहोस्';

        localStorage.setItem('language', lang);
        currentLang = lang;

        updateGreeting();
        startTyping();

        // Refresh AOS to handle new content size
        if (typeof AOS !== 'undefined') AOS.refresh();
    }

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            updateLanguage(currentLang === 'en' ? 'ne' : 'en');
        });
    }

    // Greeting based on time
    function updateGreeting() {
        const hour = new Date().getHours();
        let greetingKey = "Hello";
        if (hour < 12) greetingKey = "Good Morning";
        else if (hour < 18) greetingKey = "Good Afternoon";
        else greetingKey = "Good Evening";

        const greetings = {
            "Good Morning": { en: "Good Morning", ne: "शुभ प्रभात" },
            "Good Afternoon": { en: "Good Afternoon", ne: "शुभ अपराह्न" },
            "Good Evening": { en: "Good Evening", ne: "शुभ सन्ध्या" },
            "Hello": { en: "Hello", ne: "नमस्ते" }
        };

        const h1 = document.querySelector('h1');
        if (h1) {
            const g = (greetings[greetingKey] || greetings["Hello"])[currentLang];
            const name = currentLang === 'en' ? 'I am <strong>Anuj Thapa</strong>' : 'म <strong>अनुज थापा</strong> हुँ';
            h1.innerHTML = g + ', ' + name;
        }
    }

    // Typing Effect
    let typingInterval;
    function startTyping() {
        if (typingInterval) clearTimeout(typingInterval);
        const textElement = document.getElementById('typed-text');
        if (!textElement) return;

        const words = {
            en: ["Civil Engineer", "Web Developer", "Photographer", "Video Editor"],
            ne: ["सिभिल इन्जिनियर", "वेब डेभलपर", "फोटोग्राफर", "भिडियो सम्पादक"]
        };

        const currentWords = words[currentLang];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = currentWords[wordIndex];
            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 100 : 200;

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % currentWords.length;
                typeSpeed = 500;
            }

            typingInterval = setTimeout(type, typeSpeed);
        }
        type();
    }

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        const icon = themeToggle ? themeToggle.querySelector('i') : null;
        if (icon) {
            icon.classList.remove('fa-moon-o');
            icon.classList.add('fa-sun-o');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                if (icon) {
                    icon.classList.remove('fa-moon-o');
                    icon.classList.add('fa-sun-o');
                }
            } else {
                localStorage.setItem('theme', 'light');
                if (icon) {
                    icon.classList.remove('fa-sun-o');
                    icon.classList.add('fa-moon-o');
                }
            }
        });
    }

    // Back to Top
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $(backToTop).css('display', 'flex').hide().fadeIn();
            } else {
                $(backToTop).fadeOut();
            }
        });
        $(backToTop).click(function() {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
    }

    // Smooth Scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        if ($target.length) {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing');
        }
    });

    // Initial state
    updateLanguage(currentLang);
});
