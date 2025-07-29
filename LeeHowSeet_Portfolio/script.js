// About Me Transcript Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const modal = document.getElementById("transcript-modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close-button");

    // Get all transcript trigger elements
    const triggers = document.querySelectorAll('.transcript-trigger');

    // Add a click event to each trigger
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Get the image path from the data attribute
            const transcriptSrc = this.getAttribute('data-transcript-src');
            
            // Set the image src and display the modal
            modal.classList.add('active');
            modalImg.src = transcriptSrc;
        });
    });

    // Function to close the modal
    function closeModal() {
        modal.classList.remove('active');
    }

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', closeModal);

    // Close the modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close the modal with the Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// portfolio slider functionality
const programmingTab= document.getElementById('programming-tab');
const photographyTab= document.getElementById('photography-tab');

const programmingProjects= document.getElementById('programming-projects');
const photographyProjects= document.getElementById('photography-projects');

function showProjects(sectionToShow, sectionToHide, activeTab, inactiveTab){
    if(!sectionToHide.classList.contains('hidden')){
        sectionToHide.classList.remove('active');
        setTimeout(() => {
            sectionToHide.classList.add('hidden');
            sectionToShow.classList.remove('hidden');
            void sectionToShow.offsetWidth;
            sectionToShow.classList.add('active');
        },500);
    }else{
        sectionToShow.classList.remove('hidden');
        void sectionToShow.offsetWidth; 
        sectionToShow.classList.add('active');
    }

    activeTab.classList.add('tab-active');
    inactiveTab.classList.remove('tab-active');
}

programmingTab.addEventListener('click', () => {
    showProjects(programmingProjects, photographyProjects, programmingTab, photographyTab);   
});

photographyTab.addEventListener('click', () => {
    showProjects(photographyProjects, programmingProjects, photographyTab, programmingTab); 
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the first tab as active
    programmingProjects.classList.add('active');
    photographyProjects.classList.add('hidden');
    programmingTab.classList.add('tab-active');
    photographyTab.classList.remove('tab-active');
});

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggles
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;

    // Hamburger Menu elements
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinksMobile = document.querySelector('.nav-links-mobile');

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        // Default to light theme if no theme is saved
        body.classList.add('light-theme');
    }

    // Function to toggle theme
    const toggleTheme = () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    };

    // Add event listeners for both desktop and mobile theme toggles
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', toggleTheme);
    }
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }

    // This line might be redundant if scrollActive is not defined elsewhere
    // window.addEventListener("scroll", scrollActive); // <--- Potentially problematic line

    // Hamburger menu toggle
    hamburgerMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent this click from immediately closing the menu via the document listener
        navLinksMobile.classList.toggle('nav-active');
        hamburgerMenu.classList.toggle('active'); // For hamburger animation
    });

    // Close mobile menu when a nav link is clicked
    navLinksMobile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksMobile.classList.contains('nav-active')) {
                navLinksMobile.classList.remove('nav-active');
                hamburgerMenu.classList.remove('active');
            }
        });
    });

    // Close hamburger when clicking outside of it or the menu
    document.addEventListener('click', (event) => {
        // Check if the click target is NOT the hamburger menu itself
        // AND NOT inside the mobile navigation links
        if (!hamburgerMenu.contains(event.target) && !navLinksMobile.contains(event.target)) {
            if (navLinksMobile.classList.contains('nav-active')) {
                navLinksMobile.classList.remove('nav-active');
                hamburgerMenu.classList.remove('active');
            }
        }
    });

    /*==================== SHOW SCROLL UP ====================*/
    function scrollUp() {
        const scrollUp = document.getElementById("scroll-up");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    }

    window.addEventListener("scroll", scrollUp); // Keep this one for scroll-up button
});