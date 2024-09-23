document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#nav a");

    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        sections.forEach((section, index) => {
            if (
                scrollPosition >= section.offsetTop &&
                (index === sections.length - 1 || scrollPosition < sections[index + 1].offsetTop)
            ) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightNavLink);
    highlightNavLink(); // Highlight the initial nav link when the page loads
});
