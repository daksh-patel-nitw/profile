let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor scrolling
        let targetId = this.getAttribute('href'); 
        let targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "instant" });
        }
    });
});

let darkTheme = document.querySelector('#darkTheme');
darkTheme.onclick = () =>{
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        darkTheme.innerHTML = 'Dark <span class="highlight">Mode</span>';
    } else {
        darkTheme.innerHTML = 'Light <span class="highlight">Mode</span>';
    }
 }


 document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get index of section from NodeList
                let index = Array.from(sections).indexOf(entry.target);

                // Apply alternating animations based on index
                if (index % 2 === 0) {
                    entry.target.classList.add("fade-in-right");
                } else {
                    entry.target.classList.add("fade-in-left");
                }
            } else {
                // Remove animation classes when section exits the viewport
                entry.target.classList.remove("fade-in-right", "fade-in-left");
                entry.target.style.opacity = "0";
                entry.target.style.transform = "translateX(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});




document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.style.animation = "fadeUp 2s ease-out forwards";
            } else {
            
                entry.target.style.animation = "fadeDown 3s ease-out forwards";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});

let downloadResumeLink = document.querySelector("#download-resume-link");

downloadResumeLink.addEventListener("click", function(event) {
    event.preventDefault(); 

  
    console.log("User clicked to download the resume.");

   
    let link = document.createElement('a');
    link.href = './files/Daksh_Patel_Resume_21_1_2025.pdf'; 
    link.target='_blank';
    link.download = 'Daksh_Patel_Resume.pdf'; 
    link.click();  
});
