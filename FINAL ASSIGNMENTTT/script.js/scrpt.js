function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    window.scrollTo({
        top: element.offsetTop - 80, // offset to account for sticky navbar
        behavior: "smooth"
    });
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
});
