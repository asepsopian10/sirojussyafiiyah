// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.nav-link-mobile, .btn-mobile');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Smooth Scroll for all navigation links
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

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = 'var(--shadow-soft)';
    } else {
        header.style.boxShadow = 'var(--shadow-medium)';
    }
    
    lastScroll = currentScroll;
});

// Form Submission with WhatsApp Integration
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        school: document.getElementById('school').value,
        message: document.getElementById('message').value
    };
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.school) {
        alert('Mohon lengkapi semua field yang wajib diisi');
        return;
    }
    
    // Get school name
    const schoolName = formData.school === 'smp' 
        ? 'SMP ISLAM Sirojussyafi\'iyah' 
        : 'SMA PLUS Sirojussyafi\'iyah';
    
    // Create WhatsApp message
    const waMessage = `Assalamualaikum, saya ingin mendaftar:

Nama: ${formData.name}
Email: ${formData.email}
No. HP: ${formData.phone}
Jenjang: ${schoolName}
Pesan: ${formData.message || '-'}`;
    
    // WhatsApp number (replace with actual number)
    const waNumber = '6281234567890';
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank');
    
    // Show success message
    alert('Formulir berhasil diisi! Anda akan dialihkan ke WhatsApp');
    
    // Reset form
    registrationForm.reset();
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .card-program, .card-facility, .card-principal, .gallery-item');
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Active navigation link highlight
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});