document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Navigation
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Typing Effect
    const typingText = document.querySelector('.typing-text');
    const words = [
        'Python Developer',
  'Lover of Midnight Coding & Coffee',
  'Aspiring MMA Fighter',
  'AI Enthusiast',
  'App Management',
  'UI/UX Designer',
  'Enjoyer of Good Books',
  'Software Engineer',
];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        
        typingText.textContent = currentChar;
        
        if (!isDeleting && charIndex < currentWord.length) {
            // Typing
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            charIndex--;
            setTimeout(type, 50);
        } else {
            // Change word
            isDeleting = !isDeleting;
            
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            
            setTimeout(type, 1000);
        }
    }
    
    // Start typing effect
    setTimeout(type, 1000);
    
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = `${level}%`;
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'about') {
                    animateSkillBars();
                }
                
                if (entry.target.classList.contains('project-item')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // About Section Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Projects Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.querySelector('.projects-grid');
    const projectModal = document.querySelector('.project-modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Sample projects data
    const projects = [
        {
            id: 1,
            title: 'AI Virtual Chatbot',
            category: 'web',
            description: 'The main aim of developing this final year AI Virtual Assistant web application is to provide intelligent, real-time responses to user queries, especially those related to project or academic assistance.',
            image: 'logo.jpg',
            technologies: ['Html', 'Css', 'JavaScript', 'Recognition'],
            demoUrl: 'https://usmaniarsh.github.io/Ai-/index.html',
            codeUrl: 'https://github.com/usmaniarsh/Ai-'
        },
        {
            id: 2,
            title: 'Task Management App',
            category: 'web',
            description: 'A productivity app for managing tasks with drag-and-drop functionality and team collaboration.',
            image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            demoUrl: '#',
            codeUrl: '#'
        },
        {
            id: 3,
            title: 'Fitness Tracker Mobile App',
            category: 'mobile',
            description: 'A cross-platform mobile app for tracking workouts and nutrition with progress charts.',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            technologies: ['React Native', 'Redux', 'GraphQL'],
            demoUrl: '#',
            codeUrl: '#'
        },
        {
            id: 4,
            title: 'Portfolio Website Design',
            category: 'design',
            description: 'Modern portfolio website design with animations and responsive layout.',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
            technologies: ['Figma', 'Adobe XD', 'Photoshop'],
            demoUrl: '#',
            codeUrl: '#'
        },
        {
            id: 5,
            title: 'Social Media Dashboard',
            category: 'web',
            description: 'Analytics dashboard for social media metrics with real-time data visualization.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
            demoUrl: '#',
            codeUrl: '#'
        },
        {
            id: 6,
            title: 'Restaurant Booking App',
            category: 'mobile',
            description: 'Mobile application for restaurant reservations with table availability and menu preview.',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
            technologies: ['Flutter', 'Firebase', 'Google Maps API'],
            demoUrl: '#',
            codeUrl: '#'
        }
    ];
    
    // Display projects
    function displayProjects(filter = 'all') {
        projectsGrid.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.category === filter);
        
        filteredProjects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');
            projectItem.setAttribute('data-category', project.category);
            projectItem.style.opacity = '0';
            projectItem.style.transform = 'translateY(20px)';
            projectItem.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            projectItem.innerHTML = `
                <div class="project-img">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-links">
                        <a href="#" class="view-project" data-id="${project.id}"><i class="fas fa-eye"></i></a>
                        <a href="${project.demoUrl}" target="_blank"><i class="fas fa-link"></i></a>
                        <a href="${project.codeUrl}" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectItem);
            observer.observe(projectItem);
        });
        
        // Add click event to view project buttons
        document.querySelectorAll('.view-project').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const projectId = parseInt(this.getAttribute('data-id'));
                openProjectModal(projectId);
            });
        });
    }
    
    // Open project modal
    function openProjectModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="modal-img">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <h3 class="modal-title">${project.title}</h3>
                <div class="modal-subtitle">
                    <span><i class="fas fa-tag"></i> ${project.category}</span>
                    <span><i class="fas fa-calendar"></i> ${new Date().getFullYear()}</span>
                </div>
                <p class="modal-description">${project.description}</p>
                <div class="modal-details">
                    <div class="detail-item">
                        <h4>Technologies</h4>
                        <p>${project.technologies.join(', ')}</p>
                    </div>
                    <div class="detail-item">
                        <h4>Project Type</h4>
                        <p>${project.category === 'web' ? 'Web Application' : 
                          project.category === 'mobile' ? 'Mobile Application' : 'Design Project'}</p>
                    </div>
                </div>
                <div class="modal-buttons">
                    <a href="${project.demoUrl}" target="_blank" class="btn primary"><i class="fas fa-link"></i> Live Demo</a>
                    <a href="${project.codeUrl}" target="_blank" class="btn secondary"><i class="fab fa-github"></i> View Code</a>
                </div>
            `;
            
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Close project modal
    closeModal.addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Filter projects
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            displayProjects(filter);
        });
    });
    
    // Initialize projects
    displayProjects();
    
    // Resume Download and Print
    const downloadResumeBtn = document.getElementById('downloadResume');
    const printResumeBtn = document.getElementById('printResume');
    const downloadPdfResumeBtn = document.getElementById('downloadPdfResume');
    
    downloadResumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real implementation, this would download a file
        alert('Resume download would start here in a real implementation');
    });
    
    printResumeBtn.addEventListener('click', function() {
        window.print();
    });
    
    downloadPdfResumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // In a real implementation, this would generate/download a PDF
        alert('PDF resume would be generated here in a real implementation');
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        console.log({ name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
    
    // Initialize animations
    animateSkillBars();
});



