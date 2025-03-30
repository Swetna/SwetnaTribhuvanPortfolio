// document.addEventListener('DOMContentLoaded', function() {
//     const links = document.querySelectorAll('.nav-link');

//     links.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();
//             const sectionId = this.getAttribute('href').substring(1);
//             document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    // Function to animate elements when they come into view
    function animateOnScroll() {
        // Journey items
        document.querySelectorAll('.journey-item').forEach(item => {
            if (isInViewport(item) && !item.classList.contains('animated')) {
                item.classList.add('animated');
            }
        });
        
        // Focus items
        document.querySelectorAll('.focus-item').forEach(item => {
            if (isInViewport(item) && !item.classList.contains('animated')) {
                item.classList.add('animated');
            }
        });
    }
    
    // Add delay between animations for journey items
    const journeyItems = document.querySelectorAll('.journey-item');
    journeyItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });
    
    // Add delay between animations for focus items
    const focusItems = document.querySelectorAll('.focus-item');
    focusItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});
