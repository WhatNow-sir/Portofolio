
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


const titles = ['Programmer', 'Developer', 'Designer', 'Gamers', 'Businessman'];
let currentTitleIndex = 0;
const dynamicTitle = document.getElementById('dynamicTitle');

function changeTitle() {
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    dynamicTitle.textContent = titles[currentTitleIndex];
}

// Change title every 2 seconds
setInterval(changeTitle, 2000);

// Profile image click to upload (simulation)
document.getElementById('profileImg').addEventListener('click', function() {
    const colors = ['#dc2626', '#059669', '#2563eb', '#7c3aed', '#ea580c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.borderColor = randomColor;
    
    const message = document.createElement('div');
    message.textContent = 'Click to upload your photo!';
    message.style.position = 'fixed';
    message.style.top = '20px';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.background = randomColor;
    message.style.color = 'white';
    message.style.padding = '10px 20px';
    message.style.borderRadius = '25px';
    message.style.zIndex = '10000';
    message.style.fontSize = '14px';
    message.style.fontWeight = '600';
    document.body.appendChild(message);
    
    setTimeout(() => {
        document.body.removeChild(message);
    }, 2000);
});

// Contact form submit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');

    const submitButton = this.querySelector('.submit-button');
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    setTimeout(() => {
        alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon!`);
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
});

// Add entrance animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
