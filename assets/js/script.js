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
        demo: 'https://example.com',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 3,
        title: 'Brand Identity Design',
        category: 'brand',
        description: 'Complete brand identity for luxury fashion brand',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop',
        tags: ['Logo Design', 'Brand Guidelines', 'Print Design'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
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
        demo: 'https://example.com',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 6,
        title: 'Restaurant Branding',
        category: 'brand',
        description: 'Complete brand identity for fine dining restaurant',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
        tags: ['Logo Design', 'Menu Design', 'Packaging'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
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
        demo: 'https://example.com',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 9,
        title: 'Product Packaging Design',
        category: 'brand',
        description: 'Innovative packaging for eco-friendly products',
        image: 'https://images.unsplash.com/photo-1583779654316-d48c3d735076?w=500&h=300&fit=crop',
        tags: ['Packaging', 'Sustainability', '3D Mockup'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
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
        demo: 'https://example.com',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 12,
        title: 'Event Branding',
        category: 'brand',
        description: 'Comprehensive branding for a tech conference',
        image: 'https://images.unsplash.com/photo-1540575467063-1625d19d7f14?w=500&h=300&fit=crop',
        tags: ['Event Design', 'Signage', 'Merchandise'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
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
        demo: 'https://example.com',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 15,
        title: 'Book Cover Design',
        category: 'brand',
        description: 'Creating captivating covers for best-selling novels',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=300&fit=crop',
        tags: ['Typography', 'Illustration', 'Print Ready'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
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
        demo: 'https://example.com',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        id: 18,
        title: 'Podcast Branding',
        category: 'brand',
        description: 'Creating a unique visual identity for a new podcast',
        image: 'https://images.unsplash.com/photo-1534361960057-198807530616?w=500&h=300&fit=crop',
        tags: ['Logo', 'Cover Art', 'Social Media Kit'],
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
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
        demo: 'https://example.com',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
];

let testimonialItems = [
    {
        id: 1,
        name: 'Sarah Johnson',
        company: 'TechStart Inc.',
        rating: 5,
        text: 'Faisal delivered exceptional video editing work that exceeded our expectations.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 2,
        name: 'Michael Chen',
        company: 'Digital Solutions',
        rating: 5,
        text: 'Outstanding web development skills and professional communication.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        company: 'Creative Agency',
        rating: 5,
        text: 'Amazing branding work that perfectly captured our vision.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 4,
        name: 'David Thompson',
        company: 'Marketing Pro',
        rating: 5,
        text: 'Excellent video production quality and timely delivery.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 5,
        name: 'Lisa Wang',
        company: 'E-commerce Plus',
        rating: 5,
        text: 'Professional website development with great attention to detail.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 6,
        name: 'James Miller',
        company: 'Brand Studio',
        rating: 5,
        text: 'Creative branding solutions that boosted our market presence.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 7,
        name: 'Anna Garcia',
        company: 'Media House',
        rating: 5,
        text: 'Top-notch video editing with cinematic quality.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 8,
        name: 'Robert Kim',
        company: 'Tech Innovations',
        rating: 5,
        text: 'Responsive web design that works perfectly on all devices.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 9,
        name: 'Sophie Brown',
        company: 'Design Co.',
        rating: 5,
        text: 'Exceptional branding package with comprehensive guidelines.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face'
    },
    {
        id: 10,
        name: 'Alex Turner',
        company: 'Video Productions',
        rating: 5,
        text: 'Professional video editing with quick turnaround time.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face'
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
    
    // Disable custom cursor on mobile devices
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        cursorFollower.style.display = 'none';
        return;
    }
    
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
                const duration = 2000; // 2 seconds
                const stepTime = duration / 100;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        entry.target.textContent = Math.ceil(current);
                        setTimeout(updateCounter, stepTime);
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
    const portfolioGrid = document.querySelector('#portfolioGrid');
    if (!portfolioGrid) return;
    
    const filteredItems = currentFilter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === currentFilter);
    
    const itemsToShow = limit ? filteredItems.slice(0, limit) : filteredItems;
    
    portfolioGrid.innerHTML = itemsToShow.map((item, index) => `
        <div class="portfolio-item" data-category="${item.category}" style="animation-delay: ${index * 0.1}s">
            <div class="portfolio-image">
                <iframe src="${item.video}" frameborder="0" allowfullscreen loading="lazy"></iframe>
                <div class="portfolio-overlay">
                    <div class="portfolio-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="portfolio-tags">
                            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        ${item.demo ? `<a href="${item.demo}" class="btn btn-primary btn-sm" target="_blank">View Demo</a>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Update expand button visibility and text
    const expandBtn = document.querySelector('#portfolioExpandBtn');
    if (expandBtn) {
        if (filteredItems.length <= limit) {
            expandBtn.style.display = 'none';
        } else {
            expandBtn.style.display = 'block';
            const btnText = expandBtn.querySelector('.btn-text');
            const btnIcon = expandBtn.querySelector('.btn-icon');
            
            if (portfolioExpanded) {
                btnText.textContent = 'Show Less Projects';
                btnIcon.style.transform = 'rotate(180deg)';
            } else {
                btnText.textContent = 'Show More Projects';
                btnIcon.style.transform = 'rotate(0deg)';
            }
        }
    }
}

function setupPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
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
    const expandBtn = document.querySelector('#portfolioExpandBtn');
    
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
    const testimonialsGrid = document.querySelector('#testimonialsGrid');
    if (!testimonialsGrid) return;
    
    const itemsToShow = limit ? testimonialItems.slice(0, limit) : testimonialItems;
    
    testimonialsGrid.innerHTML = itemsToShow.map((item, index) => `
        <div class="testimonial-item" style="animation-delay: ${index * 0.1}s">
            <div class="testimonial-video">
                <iframe src="${item.video}" frameborder="0" allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="testimonial-content">
                <div class="testimonial-rating">
                    ${Array(item.rating).fill('<i class="fas fa-star"></i>').join('')}
                </div>
                <p class="testimonial-text">"${item.text}"</p>
                <div class="testimonial-author">
                    <img src="${item.avatar}" alt="${item.name}" class="author-avatar">
                    <div class="author-info">
                        <h4 class="author-name">${item.name}</h4>
                        <p class="author-company">${item.company}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Update expand button visibility and text
    const expandBtn = document.querySelector('#testimonialsExpandBtn');
    if (expandBtn) {
        if (testimonialItems.length <= limit) {
            expandBtn.style.display = 'none';
        } else {
            expandBtn.style.display = 'block';
            const btnText = expandBtn.querySelector('.btn-text');
            const btnIcon = expandBtn.querySelector('.btn-icon');
            
            if (testimonialsExpanded) {
                btnText.textContent = 'Show Less Testimonials';
                btnIcon.style.transform = 'rotate(180deg)';
            } else {
                btnText.textContent = 'Show More Testimonials';
                btnIcon.style.transform = 'rotate(0deg)';
            }
        }
    }
}

function setupTestimonialsExpand() {
    const expandBtn = document.querySelector('#testimonialsExpandBtn');
    
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
    initializeSkillBars();
    initializeSkillsChart();
}

function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.dataset.width;
                
                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 200);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

function initializeSkillsChart() {
    const canvas = document.getElementById('skillsChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Wait for Chart.js to load
    if (typeof Chart === 'undefined') {
        setTimeout(initializeSkillsChart, 100);
        return;
    }

    const skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Video Editing', 'Motion Graphics', 'Web Development', 'UI/UX Design', 'Brand Design', 'Color Grading'],
            datasets: [{
                label: 'Skills',
                data: [98, 95, 92, 88, 90, 96],
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                borderColor: '#00D4FF',
                borderWidth: 2,
                pointBackgroundColor: '#00D4FF',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        display: false
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: '#fff',
                        font: {
                            size: 12
                        }
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });

    // Animate chart when it comes into view
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsChart.update();
                chartObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    chartObserver.observe(canvas);
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const form = document.querySelector('#contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.querySelector('.btn-text').textContent;
            
            submitBtn.disabled = true;
            submitBtn.querySelector('.btn-text').textContent = 'Sending...';
            
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').textContent = originalText;
            }, 2000);
        });
    }
}

// ===== PARTICLES =====
function initializeParticles() {
    const particleNetwork = document.querySelector('.particle-network');
    if (!particleNetwork) return;

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 212, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${5 + Math.random() * 10}s infinite linear;
            animation-delay: ${Math.random() * 5}s;
        `;
        particleNetwork.appendChild(particle);
    }

    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% { transform: translateY(0px) translateX(0px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroVideo = document.querySelector('.hero-video');
        
        if (heroVideo) {
            heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Smooth reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
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

// ===== RESPONSIVE HANDLING =====
window.addEventListener('resize', debounce(() => {
    // Reinitialize cursor for mobile/desktop changes
    if (window.innerWidth <= 768) {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        if (cursor) cursor.style.display = 'none';
        if (cursorFollower) cursorFollower.style.display = 'none';
    } else {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        if (cursor) cursor.style.display = 'block';
        if (cursorFollower) cursorFollower.style.display = 'block';
    }
}, 250));

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

