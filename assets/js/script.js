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
    const nav = document.querySelector('.navbar');
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

    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav-open');
        });
    }
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
    
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right, .reveal-text .title-text');
    animatedElements.forEach(el => observer.observe(el));
}

// ===== COUNTERS =====
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                let current = 0;
                const increment = target / 100;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        entry.target.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        entry.target.textContent = target;
                        observer.unobserve(entry.target);
                    }
                };
                updateCounter();
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
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

    // Update expand button visibility and text
    const expandBtn = document.querySelector('.portfolio-expand-btn');
    if (expandBtn) {
        if (filteredItems.length <= limit) {
            expandBtn.style.display = 'none';
        } else {
            expandBtn.style.display = 'block';
            const btnText = expandBtn.querySelector('.btn-text');
            const btnIcon = expandBtn.querySelector('.btn-icon');
            
            if (portfolioExpanded) {
                btnText.textContent = 'Show Less Projects';
                btnIcon.className = 'fas fa-chevron-up btn-icon';
            } else {
                btnText.textContent = 'Show More Projects';
                btnIcon.className = 'fas fa-chevron-down btn-icon';
            }
        }
    }
}

function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update current filter
            currentFilter = btn.dataset.filter;
            portfolioExpanded = false;
            
            // Re-render portfolio
            renderPortfolio();
        });
    });
}

function setupPortfolioExpand() {
    const expandBtn = document.querySelector('.portfolio-expand-btn');
    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            portfolioExpanded = !portfolioExpanded;
            
            if (portfolioExpanded) {
                renderPortfolio(null); // Show all items
            } else {
                renderPortfolio(3); // Show only 3 items
            }
        });
    }
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
        <div class="testimonial-card glass-card">
            <div class="testimonial-video-container">
                <iframe src="${item.video}" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="testimonial-content">
                <div class="stars">
                    ${'<i class="fas fa-star"></i>'.repeat(item.rating)}
                </div>
                <p class="testimonial-text">"${item.text}"</p>
                <div class="testimonial-author">
                    <h4 class="author-name">${item.name}</h4>
                    <p class="author-company">${item.company}</p>
                </div>
            </div>
        </div>
    `).join('');

    const expandBtn = document.querySelector('.testimonials-expand-btn');
    if (expandBtn) {
        if (testimonialItems.length <= limit) {
            expandBtn.style.display = 'none';
        } else {
            expandBtn.style.display = 'block';
            const btnText = expandBtn.querySelector('.btn-text');
            const btnIcon = expandBtn.querySelector('.btn-icon');
            
            if (testimonialsExpanded) {
                btnText.textContent = 'Show Less Testimonials';
                btnIcon.className = 'fas fa-chevron-up btn-icon';
            } else {
                btnText.textContent = 'Show More Testimonials';
                btnIcon.className = 'fas fa-chevron-down btn-icon';
            }
        }
    }
}

function setupTestimonialsExpand() {
    const expandBtn = document.querySelector('.testimonials-expand-btn');
    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            testimonialsExpanded = !testimonialsExpanded;
            
            if (testimonialsExpanded) {
                renderTestimonials(null); // Show all items
            } else {
                renderTestimonials(3); // Show only 3 items
            }
        });
    }
}

// ===== SKILLS =====
function initializeSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const radarChart = document.querySelector('#skillsRadarChart');
    
    // Animate skill bars when they come into view
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const percentage = skillBar.dataset.width;
                const progressBar = skillBar.querySelector('.progress-bar');
                
                if (progressBar) {
                    setTimeout(() => {
                        progressBar.style.width = percentage + '%';
                    }, 200);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });
    
    // Initialize radar chart if canvas exists
    if (radarChart) {
        initializeRadarChart();
    }
}

function initializeRadarChart() {
    const canvas = document.getElementById('skillsRadarChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    
    const skills = [
        { name: 'Video Editing', value: 98 },
        { name: 'Web Design', value: 95 },
        { name: 'Branding', value: 90 },
        { name: 'Motion Graphics', value: 85 },
        { name: 'UI/UX', value: 88 },
        { name: 'Photography', value: 80 }
    ];
    
    const angleStep = (Math.PI * 2) / skills.length;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    // Draw axis lines
    for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
    // Draw skill data
    ctx.fillStyle = 'rgba(0, 212, 255, 0.3)';
    ctx.strokeStyle = '#00D4FF';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
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
    
    // Draw skill points
    ctx.fillStyle = '#00D4FF';
    for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = (skills[i].value / 100) * radius;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Draw skill labels
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    
    for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const labelRadius = radius + 20;
        const x = centerX + Math.cos(angle) * labelRadius;
        const y = centerY + Math.sin(angle) * labelRadius;
        
        ctx.fillText(skills[i].name, x, y);
    }
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1500);
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
            background: rgba(0, 212, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
        `;
        
        particleContainer.appendChild(particle);
        
        particles.push({
            element: particle,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }
    
    // Animate particles
    function animateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = window.innerWidth;
            if (particle.x > window.innerWidth) particle.x = 0;
            if (particle.y < 0) particle.y = window.innerHeight;
            if (particle.y > window.innerHeight) particle.y = 0;
            
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
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// ===== MAGNETIC BUTTONS =====
document.addEventListener('mousemove', (e) => {
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);
        
        if (distance < 100) {
            const strength = (100 - distance) / 100;
            const moveX = x * strength * 0.3;
            const moveY = y * strength * 0.3;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            element.style.transform = 'translate(0, 0)';
        }
    });
});

// ===== MOBILE OPTIMIZATIONS =====
if (window.innerWidth <= 768) {
    // Disable custom cursor on mobile
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    if (cursor) cursor.style.display = 'none';
    if (cursorFollower) cursorFollower.style.display = 'none';
    
    // Reduce particle count on mobile
    const particleContainer = document.querySelector('.particle-network');
    if (particleContainer) {
        particleContainer.style.display = 'none';
    }
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

// ===== RESIZE HANDLER =====
window.addEventListener('resize', debounce(() => {
    // Reinitialize radar chart on resize
    const radarChart = document.querySelector('#skillsRadarChart');
    if (radarChart) {
        initializeRadarChart();
    }
}, 250));

