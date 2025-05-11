    // Scroll animation for revealing elements
    function revealOnScroll() {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from actually submitting

    // Capture form data
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill in all fields.");
        return;
    }

    // Send data to Google Apps Script
    fetch("YOUR_SCRIPT_WEB_APP_URL", {  // Replace with deployed script URL
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
    }).then(response => response.text())
    .then(result => {
        console.log(result); // Log success message
        
        // Show success message
        document.getElementById("success-message").classList.remove("hidden");

        // Clear form fields after submission
        document.getElementById("contact-form").reset();
    }).catch(error => {
        console.error("Error submitting form:", error);
    });

    // Remove submission details from URL
    window.history.replaceState({}, document.title, window.location.pathname);
});





document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Disable interactions until consent is given
    if (!localStorage.getItem("cookieConsent")) {
        banner.style.display = "flex"; // Show banner
        document.body.style.overflow = "hidden"; // Prevent scrolling
    }

    // Accept Cookies
    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "accepted");
        banner.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    });

    // Reject Cookies
    rejectBtn.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "rejected");
        banner.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navbarMenu = document.querySelector('.navbar ul');
  
  mobileMenuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.navbar ul a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuToggle.classList.remove('active');
      navbarMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
});
