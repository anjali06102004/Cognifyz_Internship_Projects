// Smooth scrolling functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Application form functionality
function openApplicationForm() {
    // Create a modal for the application form
    const modal = document.createElement('div');
    modal.className = 'application-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeApplicationForm()">&times;</span>
            <h2>Apply for Web Developer Internship</h2>
            <form id="applicationForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name *</label>
                        <input type="text" id="firstName" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name *</label>
                        <input type="text" id="lastName" name="lastName" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone">
                </div>
                <div class="form-group">
                    <label for="university">University/College</label>
                    <input type="text" id="university" name="university">
                </div>
                <div class="form-group">
                    <label for="graduation">Expected Graduation Date</label>
                    <input type="date" id="graduation" name="graduation">
                </div>
                <div class="form-group">
                    <label for="github">GitHub Profile</label>
                    <input type="url" id="github" name="github" placeholder="https://github.com/yourusername">
                </div>
                <div class="form-group">
                    <label for="portfolio">Portfolio Website</label>
                    <input type="url" id="portfolio" name="portfolio" placeholder="https://yourportfolio.com">
                </div>
                <div class="form-group">
                    <label for="experience">Relevant Experience</label>
                    <textarea id="experience" name="experience" rows="4" placeholder="Describe your relevant experience, projects, and skills..."></textarea>
                </div>
                <div class="form-group">
                    <label for="motivation">Why do you want this internship?</label>
                    <textarea id="motivation" name="motivation" rows="4" placeholder="Tell us why you're interested in this opportunity..."></textarea>
                </div>
                <div class="form-group">
                    <label for="availability">Available Start Date *</label>
                    <input type="date" id="availability" name="availability" required>
                </div>
                <div class="form-buttons">
                    <button type="submit" class="submit-btn">
                        <i class="fas fa-paper-plane"></i>
                        Submit Application
                    </button>
                    <button type="button" class="cancel-btn" onclick="closeApplicationForm()">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .application-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            animation: fadeIn 0.3s ease;
        }
        .modal-content {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease;
        }
        .close-modal {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 2rem;
            cursor: pointer;
            color: #666;
            transition: color 0.3s ease;
        }
        .close-modal:hover {
            color: #333;
        }
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #333;
        }
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #007bff;
        }
        .form-buttons {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        .cancel-btn {
            padding: 12px 24px;
            background: #6c757d;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        .cancel-btn:hover {
            background: #5a6268;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 768px) {
            .form-row {
                grid-template-columns: 1fr;
            }
            .form-buttons {
                flex-direction: column;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Handle form submission
    document.getElementById('applicationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (data.firstName && data.lastName && data.email && data.availability) {
            alert('Thank you for your application! We will review your submission and get back to you within 5-7 business days.');
            closeApplicationForm();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

function closeApplicationForm() {
    const modal = document.querySelector('.application-modal');
    if (modal) {
        modal.remove();
    }
}

// Download brochure functionality
function downloadBrochure() {
    // Create a simple brochure content
    const brochureContent = `
        Web Developer Internship Program
        Cognifyz Technologies
        
        Program Overview:
        - Duration: 6 months
        - Location: Hybrid (Remote + Office)
        - Start Date: Rolling applications
        
        Benefits:
        - Real-world project experience
        - Expert mentorship
        - Career growth opportunities
        - Professional certification
        - Competitive stipend
        
        Required Skills:
        - HTML5, CSS3, JavaScript
        - React.js, Node.js
        - Git & GitHub
        - SQL & NoSQL databases
        
        Contact:
        Email: internship@cognifyz.com
        Phone: +1 (555) 123-4567
        
        Apply now at: cognifyz.com/internship
    `;
    
    // Create and download file
    const blob = new Blob([brochureContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Cognifyz_Internship_Brochure.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('Brochure downloaded successfully!');
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            if (name && email && subject && message) {
                alert('Thank you for your message! We will get back to you within 24 hours.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for animations
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
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.highlight-card, .skill-item, .stat-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.querySelector('.application-modal');
        if (event.target === modal) {
            closeApplicationForm();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeApplicationForm();
        }
    });
});

// Add hover effects for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}); 