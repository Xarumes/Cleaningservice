document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".animation");
    
    const options = {
        threshold: 0.5 // Adjust this value as needed
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("animate-fade-in", "active");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});