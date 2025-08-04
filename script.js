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
    const userMessage = message.toLowerCase();

    // 🗓️ Appointment / Booking
    if (userMessage.includes('appointment') || userMessage.includes('book') || userMessage.includes('schedule') || userMessage.includes('consultation')) {
        response = "Yes! You can book an appointment by calling us at +91 93501 58754, WhatsApp us, or filling the form on our website. Would you like the link to our booking page?";
    }

    // 🧪 Services / Tests
    else if (userMessage.includes('service') || userMessage.includes('test') || userMessage.includes('therapy')) {
        response = "We provide hearing tests, speech therapy, hearing aid fitting, child development programs, and more. Would you like details on a specific service?";
    }
    else if (userMessage.includes('speech therapy') && (userMessage.includes('kid') || userMessage.includes('child'))) {
        response = "Yes! We specialize in child speech therapy for delayed speech, stammering, autism, and more. How old is your child?";
    }
    else if (userMessage.includes('test') && (userMessage.includes('hearing') || userMessage.includes('audiometry'))) {
        response = "We offer PTA, impedance audiometry, BERA, OAE, and other hearing assessments. We also do speech and language evaluations.";
    }

    // 📍 Location / Directions
    else if (userMessage.includes('location') || userMessage.includes('address') || userMessage.includes('where')) {
        response = "Our main clinic is in Hisar, Haryana. You can view our location on Google Maps. Want directions now?";
    }
    else if (userMessage.includes('branch') || userMessage.includes('another clinic')) {
        response = "Yes, we also have branches in nearby areas. Would you like to know the closest one to your location?";
    }

    // 🕐 Clinic Timings
    else if (userMessage.includes('time') || userMessage.includes('hour') || userMessage.includes('open') || userMessage.includes('close')) {
        response = "We're open Monday to Saturday, from 10:00 AM to 6:00 PM. We're closed on Sundays and public holidays.";
    }

    // 💰 Fees / Cost / Payment
    else if (userMessage.includes('cost') || userMessage.includes('price') || userMessage.includes('fee') || userMessage.includes('charge')) {
        response = "Hearing tests start at very affordable rates. The first consultation is free. Would you like to book a test?";
    }
    else if (userMessage.includes('emi') || userMessage.includes('installment')) {
        response = "Yes, we offer EMI and installment options on most hearing aids. Want help checking eligibility?";
    }
    else if (userMessage.includes('insurance') || userMessage.includes('claim')) {
        response = "Some private insurance providers may reimburse hearing devices. We’ll help you with documents if needed.";
    }

    // 🧠 Symptoms / Concerns
    else if (userMessage.includes('hearing loss') || userMessage.includes('not hearing') || userMessage.includes('ear problem')) {
        response = "That could be a sign of hearing loss. We recommend a quick screening test. Would you like to book one?";
    }
    else if (userMessage.includes('child not speaking') || userMessage.includes('speech delay')) {
        response = "There could be several causes. A speech and hearing evaluation is the first step. We can help you schedule it.";
    }
    else if (userMessage.includes('hears but doesn’t understand') || userMessage.includes('speech discrimination')) {
        response = "That’s a common symptom of speech discrimination issues. We recommend a hearing evaluation.";
    }

    // 👂 Hearing Aids
    else if (userMessage.includes('hearing aid') || userMessage.includes('device')) {
        response = "Yes! We offer the latest digital hearing aids with free trials and fitting. Would you like to try one?";
    }
    else if (userMessage.includes('price range') && (userMessage.includes('hearing aid') || userMessage.includes('device'))) {
        response = "Prices vary based on brand and features. We have models starting from ₹10,000 with EMI options.";
    }

    // 🏠 Home Visits / Online Support
    else if (userMessage.includes('home visit') || userMessage.includes('visit at home')) {
        response = "Yes, we offer limited home visits within Hisar city. Would you like to request one?";
    }
    else if (userMessage.includes('online therapy') || userMessage.includes('video consultation')) {
        response = "Yes, we offer video-based speech therapy and consultations. Want to book a session?";
    }

    // 📄 Reports / Results
    else if (userMessage.includes('report') || userMessage.includes('result')) {
        response = "Most reports are ready within 24 hours. You can collect them from the clinic or we’ll send them via WhatsApp.";
    }
    else if (userMessage.includes('online report') || userMessage.includes('get report')) {
        response = "Absolutely! Just confirm your name and test date, and we’ll send it to you.";
    }

    // 🔁 Follow-up / Existing Patient
    else if (userMessage.includes('follow-up') || userMessage.includes('next session')) {
        response = "Of course! Please share your name and last appointment date. We’ll schedule a follow-up for you.";
    }
    else if (userMessage.includes('repeat test') || userMessage.includes('test again')) {
        response = "It depends on the time since your last visit. If it's over 6 months, a new test may be helpful. Want me to check?";
    }

    // ℹ️ Other / Default
    else if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('help')) {
        response = "Hello! I’m your assistant from LUMEN Hearing and Speech Clinic. How can I help you today?";
    }
    else {
        response = "Thanks for reaching out! Can you please tell me more about your concern so I can assist you better?";
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
