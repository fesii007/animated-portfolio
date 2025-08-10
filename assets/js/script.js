// ===== GLOBAL VARIABLES =====
let currentTestimonial = 0;
let portfolioItems = [];
let currentFilter = 'all';
let isLoading = false;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeCursor();
    initializeNavigation();
    initializeAnimations();
    initializePortfolio();
    initializeTestimonials();
    initializeSkills();
    initializeContactForm();
    initializeParticles();
    initializeScrollEffects();
    initializeCounters(); // Add counter initialization
});

// ===== CUSTOM CURSOR =====
function initializeCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .magnetic');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active section highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Typing animation
    const typingElements = document.querySelectorAll('.typing-text');
    typingElements.forEach(element => {
        const text = element.getAttribute('data-text');
        element.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(typeInterval);
            }
        }, 100);
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ===== COUNTERS =====
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ===== PORTFOLIO =====
function initializePortfolio() {
    portfolioItems = [
        {
            id: 1,
            title: 'Corporate Video Campaign',
            category: 'video',
            description: 'Complete video production for tech startup launch',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
            tags: ['After Effects', 'Premiere Pro', 'Color Grading'],
            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            id: 2,
            title: 'E-commerce Website',
            category: 'web',
            description: 'Modern online store with seamless user experience',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
            tags: ['React', 'Tailwind', 'Stripe Integration'],
            demo: 'https://example.com'
        },
        {
            id: 3,
            title: 'Brand Identity Design',
            category: 'brand',
            description: 'Complete brand identity for luxury fashion brand',
            image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop',
            tags: ['Logo Design', 'Brand Guidelines', 'Print Design']
        },
        {
            id: 4,
            title: 'YouTube Channel Branding',
            category: 'video',
            description: 'Complete visual identity and video templates',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
            tags: ['Motion Graphics', 'Branding', 'Templates'],
            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            id: 5,
            title: 'SaaS Landing Page',
            category: 'web',
            description: 'High-converting landing page for software company',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
            tags: ['Next.js', 'Framer Motion', 'Analytics'],
            demo: 'https://example.com'
        },
        {
            id: 6,
            title: 'Restaurant Branding',
            category: 'brand',
            description: 'Complete brand identity for fine dining restaurant',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
            tags: ['Logo Design', 'Menu Design', 'Packaging']
        }
    ];
    
    renderPortfolio();
    initializePortfolioFilters();
}

function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;
    
    const filteredItems = currentFilter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === currentFilter);
    
    portfolioGrid.innerHTML = filteredItems.map(item => `
        <div class="portfolio-item animate-on-scroll" data-category="${item.category}">
            <div class="portfolio-image-container">
                <img src="${item.image}" alt="${item.title}" class="portfolio-image">
                <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                        ${item.video ? `<button class="portfolio-btn" onclick="openVideo('${item.video}')">
                            <i class="fas fa-play"></i>
                        </button>` : ''}
                        ${item.demo ? `<a href="${item.demo}" target="_blank" class="portfolio-btn">
                            <i class="fas fa-external-link-alt"></i>
                        </a>` : ''}
                        <button class="portfolio-btn" onclick="openPortfolioModal(${item.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="portfolio-info">
                <span class="portfolio-category">${getCategoryName(item.category)}</span>
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
                <div class="portfolio-tags">
                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-observe new elements for animations
    document.querySelectorAll('.portfolio-item').forEach(el => {
        if (!el.classList.contains('animated')) {
            el.classList.add('animate-on-scroll');
        }
    });
}

function initializePortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentFilter = btn.getAttribute('data-filter');
            renderPortfolio();
        });
    });
}

function getCategoryName(category) {
    const names = {
        'video': 'Video Editing',
        'web': 'Web Design',
        'brand': 'Branding'
    };
    return names[category] || category;
}

function openVideo(videoUrl) {
    // Create modal for video
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="video-modal-content">
            <button class="video-modal-close">&times;</button>
            <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.video-modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// ===== TESTIMONIALS =====
function initializeTestimonials() {
    const testimonials = [
        {
            id: 1,
            content: "Faisal transformed our vision into stunning videos that increased our engagement by 300%. His attention to detail is unmatched.",
            author: "Sarah Johnson",
            position: "Marketing Director",
            company: "TechCorp",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 2,
            content: "The website Faisal designed for us not only looks amazing but also converts incredibly well. Our sales increased by 150% after launch.",
            author: "Mike Chen",
            position: "Startup Founder",
            company: "InnovateLab",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 3,
            content: "Working with Faisal was a game-changer. His video editing skills brought our content to life in ways we never imagined.",
            author: "Emma Rodriguez",
            position: "Content Creator",
            company: "CreativeStudio",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 4,
            content: "Professional, creative, and always delivers on time. Faisal is our go-to designer for all branding projects.",
            author: "David Wilson",
            position: "Brand Manager",
            company: "GlobalBrand",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            rating: 5
        },
        {
            id: 5,
            content: "The quality of work and attention to detail is exceptional. Highly recommend Faisal for any video or web project.",
            author: "Lisa Thompson",
            position: "CEO",
            company: "StartupHub",
            avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
            rating: 5
        }
    ];
    
    renderTestimonials(testimonials);
    initializeTestimonialCarousel(testimonials);
}

function renderTestimonials(testimonials) {
    const testimonialTrack = document.getElementById('testimonialTrack');
    const carouselIndicators = document.getElementById('carouselIndicators');
    
    if (!testimonialTrack) return;
    
    testimonialTrack.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-item">
            <div class="testimonial-content">
                "${testimonial.content}"
            </div>
            <div class="testimonial-author">
                <img src="${testimonial.avatar}" alt="${testimonial.author}" class="author-avatar">
                <div class="author-info">
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.position} at ${testimonial.company}</p>
                    <div class="author-rating">
                        ${Array(testimonial.rating).fill('<span class="star">★</span>').join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    if (carouselIndicators) {
        carouselIndicators.innerHTML = testimonials.map((_, index) => `
            <div class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
        `).join('');
    }
}

function initializeTestimonialCarousel(testimonials) {
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!track) return;
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentTestimonial);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateCarousel();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
            updateCarousel();
        });
    }
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentTestimonial = index;
            updateCarousel();
        });
    });
    
    // Auto-play carousel
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateCarousel();
    }, 5000);
}

// ===== SKILLS =====
function initializeSkills() {
    // Animate skill bars when in view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Initialize radar chart
    initializeRadarChart();
}

function initializeRadarChart() {
    const canvas = document.getElementById('skillsRadar');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;
    
    const skills = [
        { name: 'Video Editing', value: 95 },
        { name: 'Web Design', value: 88 },
        { name: 'UI/UX', value: 82 },
        { name: 'Motion Graphics', value: 90 },
        { name: 'Branding', value: 85 },
        { name: 'Photography', value: 78 }
    ];
    
    function drawRadarChart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        
        for (let i = 1; i <= 5; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
            ctx.stroke();
        }
        
        // Draw axes
        const angleStep = (2 * Math.PI) / skills.length;
        for (let i = 0; i < skills.length; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
            
            // Draw labels
            ctx.fillStyle = 'white';
            ctx.font = '12px Inter';
            ctx.textAlign = 'center';
            const labelX = centerX + Math.cos(angle) * (radius + 20);
            const labelY = centerY + Math.sin(angle) * (radius + 20);
            ctx.fillText(skills[i].name, labelX, labelY);
        }
        
        // Draw data
        ctx.beginPath();
        ctx.strokeStyle = '#00D4FF';
        ctx.fillStyle = 'rgba(0, 212, 255, 0.2)';
        ctx.lineWidth = 2;
        
        for (let i = 0; i < skills.length; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const value = (skills[i].value / 100) * radius;
            const x = centerX + Math.cos(angle) * value;
            const y = centerY + Math.sin(angle) * value;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Draw data points
        ctx.fillStyle = '#00D4FF';
        for (let i = 0; i < skills.length; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const value = (skills[i].value / 100) * radius;
            const x = centerX + Math.cos(angle) * value;
            const y = centerY + Math.sin(angle) * value;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    
    drawRadarChart();
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.querySelector('.submit-text').textContent;
        
        submitBtn.querySelector('.submit-text').textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.querySelector('.submit-text').textContent = 'Message Sent!';
            setTimeout(() => {
                submitBtn.querySelector('.submit-text').textContent = originalText;
                submitBtn.disabled = false;
                form.reset();
            }, 2000);
        }, 2000);
    });
    
    // Form input animations
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// ===== PARTICLES =====
function initializeParticles() {
    const particleContainer = document.querySelector('.particle-network');
    if (!particleContainer) return;
    
    const particles = [];
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00D4FF;
            border-radius: 50%;
            opacity: 0.6;
        `;
        
        particles.push({
            element: particle,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
        
        particleContainer.appendChild(particle);
    }
    
    // Animate particles
    function animateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
            if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
            
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for hero background
        const heroVideo = document.querySelector('.hero-video');
        if (heroVideo) {
            heroVideo.style.transform = `translateY(${rate}px)`;
        }
        
        // Navbar background opacity
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const opacity = Math.min(scrolled / 100, 1);
            navbar.style.background = `rgba(255, 255, 255, ${opacity * 0.1})`;
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
}

// ===== MAGNETIC EFFECT =====
function initializeMagneticEffect() {
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px)';
        });
    });
}

// ===== BUTTON INTERACTIONS =====
function initializeButtonInteractions() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ===== SECTION NAVIGATION =====
function initializeSectionNavigation() {
    const buttons = document.querySelectorAll('[data-section]');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== RESPONSIVE HANDLING =====
function handleResize() {
    // Update particle positions
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
    });
    
    // Redraw radar chart
    initializeRadarChart();
}

window.addEventListener('resize', debounce(handleResize, 250));

// ===== CSS ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .video-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    }
    
    .video-modal-content {
        position: relative;
        width: 90%;
        max-width: 800px;
        aspect-ratio: 16/9;
    }
    
    .video-modal-content iframe {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    
    .video-modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        z-index: 1;
    }
    
    .portfolio-actions {
        display: flex;
        gap: 15px;
    }
    
    .portfolio-btn {
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .portfolio-btn:hover {
        background: var(--primary-color);
        transform: scale(1.1);
    }
`;

document.head.appendChild(style);

// Initialize all interactions after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeMagneticEffect();
    initializeButtonInteractions();
    initializeSectionNavigation();
});


// Portfolio Expand Functionality
const portfolioExpandBtn = document.getElementById('portfolioExpandBtn');
const portfolioHiddenItems = document.querySelectorAll('.portfolio-hidden');
let portfolioExpanded = false;

if (portfolioExpandBtn) {
    portfolioExpandBtn.addEventListener('click', function() {
        if (!portfolioExpanded) {
            // Show hidden items with animation
            portfolioHiddenItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 100);
            });
            
            // Update button
            portfolioExpandBtn.classList.add('expanded');
            portfolioExpandBtn.querySelector('.btn-text').textContent = 'Show Less Projects';
            portfolioExpanded = true;
        } else {
            // Hide items
            portfolioHiddenItems.forEach(item => {
                item.classList.remove('show');
            });
            
            // Update button
            portfolioExpandBtn.classList.remove('expanded');
            portfolioExpandBtn.querySelector('.btn-text').textContent = 'Show More Projects';
            portfolioExpanded = false;
            
            // Scroll to portfolio section
            document.getElementById('portfolio').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Testimonials Expand Functionality
const testimonialsExpandBtn = document.getElementById('testimonialsExpandBtn');
const testimonialHiddenItems = document.querySelectorAll('.testimonial-hidden');
let testimonialsExpanded = false;

if (testimonialsExpandBtn) {
    testimonialsExpandBtn.addEventListener('click', function() {
        if (!testimonialsExpanded) {
            // Show hidden items with animation
            testimonialHiddenItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 150);
            });
            
            // Update button
            testimonialsExpandBtn.classList.add('expanded');
            testimonialsExpandBtn.querySelector('.btn-text').textContent = 'Show Less Testimonials';
            testimonialsExpanded = true;
        } else {
            // Hide items
            testimonialHiddenItems.forEach(item => {
                item.classList.remove('show');
            });
            
            // Update button
            testimonialsExpandBtn.classList.remove('expanded');
            testimonialsExpandBtn.querySelector('.btn-text').textContent = 'Show More Testimonials';
            testimonialsExpanded = false;
            
            // Scroll to testimonials section
            document.getElementById('testimonials').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Enhanced Portfolio Filter with Video Support
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filter items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Platform Cards Hover Effects
const platformCards = document.querySelectorAll('.platform-card');

platformCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
    });
});

// Achievement Items Animation on Scroll
const achievementItems = document.querySelectorAll('.achievement-item');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const achievementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

achievementItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease';
    achievementObserver.observe(item);
});

// Footer Links Smooth Scroll
const footerLinks = document.querySelectorAll('.footer-link[href^="#"]');

footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced Video Embed Interactions
const videoEmbeds = document.querySelectorAll('.portfolio-video iframe, .testimonial-video iframe');

videoEmbeds.forEach(iframe => {
    iframe.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    iframe.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Platform Button Click Effects
const platformBtns = document.querySelectorAll('.platform-btn, .platform-btn-footer');

platformBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

