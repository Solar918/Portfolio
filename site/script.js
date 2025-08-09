// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Toggle dark mode with icon
const darkModeBtn = document.createElement('button');
darkModeBtn.setAttribute('aria-label', 'Toggle dark mode');
darkModeBtn.className = 'dark-mode-toggle';
darkModeBtn.innerHTML = '<span class="toggle-icon">🌙</span>'; // Default to moon

darkModeBtn.style.position = 'fixed';
darkModeBtn.style.top = '20px';
darkModeBtn.style.right = '20px';
darkModeBtn.style.zIndex = 1000;
darkModeBtn.style.background = 'none';
darkModeBtn.style.border = 'none';
darkModeBtn.style.cursor = 'pointer';
darkModeBtn.style.fontSize = '2rem';
darkModeBtn.style.padding = '8px';
darkModeBtn.style.borderRadius = '50%';
darkModeBtn.style.transition = 'background 0.3s';

document.body.appendChild(darkModeBtn);

function updateToggleIcon() {
    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.innerHTML = '<span class="toggle-icon">🌞</span>'; // Sun for dark mode
    } else {
        darkModeBtn.innerHTML = '<span class="toggle-icon">🌙</span>'; // Moon for light mode
    }
}

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateToggleIcon();
});

updateToggleIcon();
// Typewriter effect for a headline
function typeWriter(element, text, speed = 100) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

window.addEventListener('DOMContentLoaded', () => {
    const headline = document.querySelector('.typewriter');
    if (headline) {
        headline.textContent = '';
        typeWriter(headline, 'Welcome to My Interactive Portfolio!', 75);
    }
});

// Reveal elements on scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Example CSS to add in your stylesheet for dark mode and reveal effect:
// .dark-mode { background: #222; color: #eee; }
// .reveal { opacity: 0; transform: translateY(40px); transition: 0.6s; }
// .reveal.active { opacity: 1; transform: none; }