// ===== GLOBAL VARIABLES =====
let currentTestimonial = 0;
let portfolioItems = [
    {
        id: 1,
        title: 'Corporate Video Campaign',
        category: 'video',
        description: 'Complete video production for tech startup launch',
        image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
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
        image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
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
    },
    {
        id: 7,
        title: 'Explainer Video Series',
        category: 'video',
        description: 'Animated explainer videos for complex software',
        image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        tags: ['Animation', 'Voiceover', 'Scriptwriting'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 8,
        title: 'Personal Portfolio Website',
        category: 'web',
        description: 'Showcasing creative work with interactive elements',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
        tags: ['HTML', 'CSS', 'JavaScript', 'Animations'],
        demo: 'https://example.com'
    },
    {
        id: 9,
        title: 'Product Packaging Design',
        category: 'brand',
        description: 'Innovative packaging for eco-friendly products',
        image: 'https://images.unsplash.com/photo-1583779654316-d48c3d735076?w=500&h=300&fit=crop',
        tags: ['Packaging', 'Sustainability', '3D Mockup']
    },
    {
        id: 10,
        title: 'Social Media Video Ads',
        category: 'video',
        description: 'Short, engaging video ads for Instagram and Facebook',
        image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        tags: ['Short-form', 'Kinetic Typography', 'Sound Design'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 11,
        title: 'Blog Redesign',
        category: 'web',
        description: 'Modernizing an existing blog for better readability and SEO',
        image: 'https://images.unsplash.com/photo-1499750310107-5fcd61f2028d?w=500&h=300&fit=crop',
        tags: ['WordPress', 'Responsive', 'Content Strategy'],
        demo: 'https://example.com'
    },
    {
        id: 12,
        title: 'Event Branding',
        category: 'brand',
        description: 'Comprehensive branding for a tech conference',
        image: 'https://images.unsplash.com/photo-1540575467063-1625d19d7f14?w=500&h=300&fit=crop',
        tags: ['Event Design', 'Signage', 'Merchandise']
    },
    {
        id: 13,
        title: 'Documentary Film Editing',
        category: 'video',
        description: 'Post-production for an independent documentary',
        image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        tags: ['Storytelling', 'Sound Mixing', 'Archival Footage'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 14,
        title: 'Mobile App UI/UX',
        category: 'web',
        description: 'Designing intuitive interfaces for a new mobile application',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop',
        tags: ['Figma', 'Prototyping', 'User Research'],
        demo: 'https://example.com'
    },
    {
        id: 15,
        title: 'Book Cover Design',
        category: 'brand',
        description: 'Creating captivating covers for best-selling novels',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=300&fit=crop',
        tags: ['Typography', 'Illustration', 'Print Ready']
    },
    {
        id: 16,
        title: 'Music Video Production',
        category: 'video',
        description: 'Dynamic editing for independent music artists',
        image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        tags: ['Rhythm Editing', 'Visual Effects', 'Color Grading'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 17,
        title: 'Online Course Platform',
        category: 'web',
        description: 'Developing a user-friendly platform for e-learning',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop',
        tags: ['LMS', 'User Authentication', 'Payment Gateway'],
        demo: 'https://example.com'
    },
    {
        id: 18,
        title: 'Podcast Branding',
        category: 'brand',
        description: 'Creating a unique visual identity for a new podcast',
        image: 'https://images.unsplash.com/photo-1534361960057-198807530616?w=500&h=300&fit=crop',
        tags: ['Logo', 'Cover Art', 'Social Media Kit']
    },
    {
        id: 19,
        title: 'Corporate Training Videos',
        category: 'video',
        description: 'Engaging training modules for employee onboarding',
        image: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
        tags: ['Instructional Design', 'Screencasting', 'Interactive Elements'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 20,
        title: 'Custom CRM Development',
        category: 'web',
        description: 'Building a tailored customer relationship management system',
        image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=500&h=300&fit=crop',
        tags: ['Database Design', 'API Integration', 'User Interface'],
        demo: 'https://example.com'
    }
];

let testimonialItems = [
    {
        id: 1,
        name: 'Sarah Johnson',
        company: 'TechStart Inc.',
        rating: 5,
        text: 'Faisal delivered exceptional video editing work that exceeded our expectations.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 2,
        name: 'Michael Chen',
        company: 'Digital Solutions',
        rating: 5,
        text: 'Outstanding web development skills and professional communication.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        company: 'Creative Agency',
        rating: 5,
        text: 'Amazing branding work that perfectly captured our vision.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 4,
        name: 'David Thompson',
        company: 'Marketing Pro',
        rating: 5,
        text: 'Excellent video production quality and timely delivery.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 5,
        name: 'Lisa Wang',
        company: 'E-commerce Plus',
        rating: 5,
        text: 'Professional website development with great attention to detail.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 6,
        name: 'James Miller',
        company: 'Brand Studio',
        rating: 5,
        text: 'Creative branding solutions that boosted our market presence.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 7,
        name: 'Anna Garcia',
        company: 'Media House',
        rating: 5,
        text: 'Top-notch video editing with cinematic quality.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 8,
        name: 'Robert Kim',
        company: 'Tech Innovations',
        rating: 5,
        text: 'Responsive web design that works perfectly on all devices.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 9,
        name: 'Sophie Brown',
        company: 'Design Co.',
        rating: 5,
        text: 'Exceptional branding package with comprehensive guidelines.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 10,
        name: 'Alex Turner',
        company: 'Video Productions',
        rating: 5,
        text: 'Professional video editing with quick turnaround time.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
];

let currentFilter = 'all';
let isLoading = false;
let portfolioExpanded = false;
let testimonialsExpanded = false;

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
    initializeCounters();
});

// ===== CUSTOM CURSOR =====
function initializeCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .btn, .portfolio-item, .service-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('cursor-hover');
        });
    });
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navigation background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
    animatedElements.forEach(el => observer.observe(el));
}

// ===== PORTFOLIO =====
function initializePortfolio() {
    renderPortfolio();
    setupPortfolioFilters();
    setupPortfolioExpand();
}

function renderPortfolio(limit = 3) {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;
    
    const filteredItems = currentFilter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === currentFilter);
    
    const itemsToShow = limit ? filteredItems.slice(0, limit) : filteredItems;
    
    portfolioGrid.innerHTML = itemsToShow.map(item => `
        <div class="portfolio-item" data-category="${item.category}">
            <div class="portfolio-image">
                ${item.video ? 
                    `<iframe src="${item.video}" frameborder="0" allowfullscreen></iframe>` :
                    `<img src="${item.image}" alt="${item.title}" loading="lazy">`
                }
                <div class="portfolio-overlay">
                    <div class="portfolio-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="portfolio-tags">
                            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        ${item.demo ? `<a href="${item.demo}" class="btn btn-primary" target="_blank">View Demo</a>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentFilter = btn.dataset.filter;
            renderPortfolio(portfolioExpanded ? null : 3);
        });
    });
}

function setupPortfolioExpand() {
    const expandBtn = document.querySelector('.portfolio-expand-btn');
    if (!expandBtn) return;
    
    expandBtn.addEventListener('click', () => {
        portfolioExpanded = !portfolioExpanded;
        renderPortfolio(portfolioExpanded ? null : 3);
        expandBtn.textContent = portfolioExpanded ? 'Show Less Projects' : 'Show More Projects';
    });
}

// ===== TESTIMONIALS =====
function initializeTestimonials() {
    renderTestimonials();
    setupTestimonialsExpand();
}

function renderTestimonials(limit = 3) {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (!testimonialsGrid) return;
    
    const itemsToShow = limit ? testimonialItems.slice(0, limit) : testimonialItems;
    
    testimonialsGrid.innerHTML = itemsToShow.map(item => `
        <div class="testimonial-item">
            <div class="testimonial-video">
                <iframe src="${item.video}" frameborder="0" allowfullscreen></iframe>
                <div class="testimonial-overlay">
                    <div class="testimonial-content">
                        <div class="testimonial-rating">
                            ${'★'.repeat(item.rating)}
                        </div>
                        <p>"${item.text}"</p>
                        <div class="testimonial-author">
                            <strong>${item.name}</strong>
                            <span>${item.company}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function setupTestimonialsExpand() {
    const expandBtn = document.querySelector('.testimonials-expand-btn');
    if (!expandBtn) return;
    
    expandBtn.addEventListener('click', () => {
        testimonialsExpanded = !testimonialsExpanded;
        renderTestimonials(testimonialsExpanded ? null : 3);
        expandBtn.textContent = testimonialsExpanded ? 'Show Less Testimonials' : 'Show More Testimonials';
    });
}

// ===== SKILLS =====
function initializeSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const radarChart = document.querySelector('.radar-chart');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skill-progress')) {
                    animateSkillBar(entry.target);
                } else if (entry.target.classList.contains('radar-chart')) {
                    animateRadarChart(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
    if (radarChart) observer.observe(radarChart);
}

function animateSkillBar(skillBar) {
    const percentage = skillBar.dataset.percentage;
    const progressFill = skillBar.querySelector('.skill-fill');
    const percentageText = skillBar.querySelector('.skill-percentage');
    
    if (progressFill && percentageText) {
        let currentPercentage = 0;
        const increment = percentage / 100;
        
        const animation = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= percentage) {
                currentPercentage = percentage;
                clearInterval(animation);
            }
            
            progressFill.style.width = currentPercentage + '%';
            percentageText.textContent = Math.round(currentPercentage) + '%';
        }, 20);
    }
}

function animateRadarChart(radarChart) {
    const canvas = radarChart.querySelector('canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    
    const skills = [
        { name: 'Video Editing', value: 98 },
        { name: 'Web Development', value: 92 },
        { name: 'Branding', value: 88 },
        { name: 'UI/UX Design', value: 85 },
        { name: 'Motion Graphics', value: 90 },
        { name: 'Photography', value: 82 }
    ];
    
    const angleStep = (Math.PI * 2) / skills.length;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // Draw axes
    skills.forEach((_, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
    });
    
    // Draw skill polygon
    ctx.strokeStyle = '#00d4ff';
    ctx.fillStyle = 'rgba(0, 212, 255, 0.2)';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    skills.forEach((skill, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const value = (skill.value / 100) * radius;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Draw skill points
    ctx.fillStyle = '#00d4ff';
    skills.forEach((skill, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const value = (skill.value / 100) * radius;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Draw labels
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    skills.forEach((skill, index) => {
        const angle = angleStep * index - Math.PI / 2;
        const labelRadius = radius + 15;
        const x = centerX + Math.cos(angle) * labelRadius;
        const y = centerY + Math.sin(angle) * labelRadius;
        
        ctx.fillText(skill.name, x, y);
    });
}

// ===== COUNTERS =====
function initializeCounters() {
    const counters = document.querySelectorAll('.counter-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(counter) {
    const target = parseInt(counter.dataset.count);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
    }, 16);
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            form.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, 1000);
    });
}

// ===== PARTICLES =====
function initializeParticles() {
    const canvas = document.querySelector('.particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        };
    }
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    }
    
    function updateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        });
    }
    
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
            ctx.fill();
        });
    }
    
    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }
    
    resizeCanvas();
    initParticles();
    animate();
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

