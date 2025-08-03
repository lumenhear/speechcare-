  // Mobile Navigation Toggle
        const mobileToggle = document.getElementById('mobileToggle');
        const mainNav = document.getElementById('mainNav');
        
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });
        
        // AI Chatbot Toggle
        const aiChatbot = document.querySelector('.ai-chatbot');
        const chatContainer = document.getElementById('chatContainer');
        
        aiChatbot.addEventListener('click', () => {
            chatContainer.classList.toggle('active');
        });
        
        // Chatbot functionality
        const chatMessages = document.getElementById('chatMessages');
        const userInput = document.getElementById('userInput');
        const sendMessage = document.getElementById('sendMessage');
        
        function addMessage(message, isUser = false) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
            messageDiv.textContent = message;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        function handleUserMessage() {
            const message = userInput.value.trim();
            if (message) {
                addMessage(message, true);
                userInput.value = '';
                
                // Simulate AI response
                setTimeout(() => {
                    let response;
                    
                    if (message.toLowerCase().includes('appointment') || message.toLowerCase().includes('book')) {
                        response = "To book an appointment, you can call us at +91 93501 58754, WhatsApp us, or fill out the form on our website. Would you like me to direct you to our booking page?";
                    } else if (message.toLowerCase().includes('service') || message.toLowerCase().includes('test')) {
                        response = "We offer a range of services including hearing tests, speech therapy, hearing aids, and child development programs. You can view all our services on our website. Would you like me to send you more information about a specific service?";
                    } else if (message.toLowerCase().includes('location') || message.toLowerCase().includes('address')) {
                        response = "Our clinic is located in Hisar, Haryana. You can find our exact location on the map in the 'Locations' section of our website. Would you like directions?";
                    } else if (message.toLowerCase().includes('hours') || message.toLowerCase().includes('time')) {
                        response = "We're open Monday to Saturday from 10:00 AM to 6:00 PM. We're closed on Sundays and public holidays.";
                    } else if (message.toLowerCase().includes('cost') || message.toLowerCase().includes('price')) {
                        response = "The cost of our services varies depending on the specific treatment or device. We offer free initial consultations and EMI options for hearing aids. Would you like to schedule a consultation to discuss pricing?";
                    } else {
                        response = "Thank you for your message! Our team will get back to you shortly. In the meantime, is there anything specific you'd like to know about our services?";
                    }
                    
                    addMessage(response);
                }, 1000);
            }
        }
        
        sendMessage.addEventListener('click', handleUserMessage);
        
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleUserMessage();
            }
        });
        
        // Accessibility Features
        const body = document.body;
        const fontSizeIncrease = document.getElementById('font-increase');
        const fontSizeDecrease = document.getElementById('font-decrease');
        const contrastToggle = document.getElementById('contrast-toggle');
        const voiceReader = document.getElementById('voice-reader');
        
        fontSizeIncrease.addEventListener('click', () => {
            const currentSize = parseFloat(getComputedStyle(body).fontSize);
            body.style.fontSize = (currentSize + 2) + 'px';
        });
        
        fontSizeDecrease.addEventListener('click', () => {
            const currentSize = parseFloat(getComputedStyle(body).fontSize);
            body.style.fontSize = (currentSize - 2) + 'px';
        });
        
        contrastToggle.addEventListener('click', () => {
            body.classList.toggle('high-contrast');
        });
        
        voiceReader.addEventListener('click', () => {
            if ('speechSynthesis' in window) {
                const speech = new SpeechSynthesisUtterance();
                speech.text = "Welcome to LUMEN Speech and Hearing Care. Empowering better hearing and communication.";
                speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1;
                window.speechSynthesis.speak(speech);
            } else {
                alert("Your browser doesn't support the voice reading feature.");
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.padding = '15px 0';
                header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
            }
        });
        
        // Initialize animations on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.service-card, .ai-feature, .team-member').forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
  
