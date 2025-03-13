document.addEventListener("DOMContentLoaded", function () {
  // Typing Effect
  const text = "Akshay Vennu";
  const typingElement = document.querySelector(".typing");
  let index = 0;
  let isDeleting = false;

  function type() {
      if (!isDeleting) {
          if (index < text.length) {
              typingElement.textContent += text.charAt(index);
              index++;
              setTimeout(type, 150);
          } else {
              isDeleting = true;
              setTimeout(type, 1000);
          }
      } else {
          if (index > 0) {
              typingElement.textContent = text.substring(0, index - 1);
              index--;
              setTimeout(type, 100);
          } else {
              isDeleting = false;
              setTimeout(type, 500);
          }
      }
  }
  type();

  // Ensure header is clickable
  const header = document.querySelector(".header");
  header.style.pointerEvents = "auto";
  header.style.zIndex = "1000";

  // Navigation Link Active Class Functionality
  function mark(event) {
      document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
  }

  document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          mark(event);
          
          let targetId = this.getAttribute("href").substring(1);
          let targetSection = document.getElementById(targetId);
          if (targetSection) {
              const headerHeight = header.offsetHeight - 20;
              window.scrollTo({
                  top: targetSection.offsetTop - headerHeight,
                  behavior: "smooth"
              });
          }
      });
  });

  // Scroll-triggered Zoom-in & Zoom-out Effect
  const sections = document.querySelectorAll("section");

  function revealSections() {
      sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionBottom = section.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
              section.classList.add("active");
          } else {
              section.classList.remove("active");
          }
      });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();

  // Hide header on scroll down, show on scroll up, but keep it visible in the home section
  let lastScrollY = window.scrollY;
  let isScrolling;
  let isHovering = false;

  function handleScroll() {
      const homeSection = document.getElementById("home");
      const homeBottom = homeSection.getBoundingClientRect().bottom;
      
      if (homeBottom > 0) { // If still in home section
          header.style.top = "0";
      } else if (!isHovering) {
          if (window.scrollY > lastScrollY) {
              header.style.top = "-100px";
          } else {
              header.style.top = "0";
          }
      }
      lastScrollY = window.scrollY;
  }

  window.addEventListener("scroll", function () {
      clearTimeout(isScrolling);
      handleScroll();
      isScrolling = setTimeout(() => {
          if (!isHovering && document.getElementById("home").getBoundingClientRect().bottom <= 0) {
              header.style.top = "-100px";
          }
      }, 2000);
  });

  // Prevent header from disappearing when hovered
  header.addEventListener("mouseenter", function () {
      isHovering = true;
      clearTimeout(isScrolling);
      header.style.top = "0";
  });

  header.addEventListener("mouseleave", function () {
      isHovering = false;
      isScrolling = setTimeout(() => {
          if (window.scrollY > lastScrollY && document.getElementById("home").getBoundingClientRect().bottom <= 0) {
              header.style.top = "-100px";
          }
      }, 2000);
  });
});



/*  document.addEventListener("DOMContentLoaded", function () {
  // Typing Effect
  const text = "Akshay Vennu";
  const typingElement = document.querySelector(".typing");
  let index = 0;
  let isDeleting = false;

  function type() {
      if (!isDeleting) {
          if (index < text.length) {
              typingElement.textContent += text.charAt(index);
              index++;
              setTimeout(type, 150); // Typing speed
          } else {
              isDeleting = true;
              setTimeout(type, 1000); // Pause before deleting
          }
      } else {
          if (index > 0) {
              typingElement.textContent = text.substring(0, index - 1);
              index--;
              setTimeout(type, 100); // Deleting speed
          } else {
              isDeleting = false;
              setTimeout(type, 500); // Pause before retyping
          }
      }
  }

  type(); // Start typing effect

  // Navigation Link Active Class Functionality
  function mark(event) {
      document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
  }

  // Attach Click Event Listeners to Nav Links
  document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener("click", mark);
  });

  // Scroll-triggered Zoom-in & Zoom-out Effect
  const sections = document.querySelectorAll("section");

  function revealSections() {
      sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionBottom = section.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
              section.classList.add("active");
          } else {
              section.classList.remove("active");
          }
      });
  }

  window.addEventListener("scroll", revealSections);
  revealSections(); // Run initially to reveal sections already in view

  // Hide header on scroll down, show on scroll up
  let lastScrollY = window.scrollY;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
      if (window.scrollY > lastScrollY) {
          // Scrolling down, hide the header
          header.style.top = "-100px"; // Adjust based on header height
      } else {
          // Scrolling up, show the header
          header.style.top = "0";
      }
      lastScrollY = window.scrollY;
  });
});

  */


/* document.addEventListener("DOMContentLoaded", function () {
  // Typing Effect
  const text = "Akshay Vennu";
  const typingElement = document.querySelector(".typing");
  let index = 0;
  let isDeleting = false;

  function type() {
      if (!isDeleting) {
          if (index < text.length) {
              typingElement.textContent += text.charAt(index);
              index++;
              setTimeout(type, 150); // Typing speed
          } else {
              isDeleting = true;
              setTimeout(type, 1000); // Pause before deleting
          }
      } else {
          if (index > 0) {
              typingElement.textContent = text.substring(0, index - 1);
              index--;
              setTimeout(type, 100); // Deleting speed
          } else {
              isDeleting = false;
              setTimeout(type, 500); // Pause before retyping
          }
      }
  }

  type(); // Start typing effect

  // Navigation Link Active Class Functionality
  function mark(event) {
      document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
  }

  // Attach Click Event Listeners to Nav Links
  document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener("click", mark);
  });

  // Scroll-triggered Zoom-in & Zoom-out Effect
  const sections = document.querySelectorAll("section");

  function revealSections() {
      sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionBottom = section.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
              section.classList.add("active");
          } else {
              section.classList.remove("active");
          }
      });
  }

  window.addEventListener("scroll", revealSections);
  revealSections(); // Run initially to reveal sections already in view
});


 */


/* document.addEventListener("DOMContentLoaded", function () {
    const text = "Akshay Vennu";
    const typingElement = document.querySelector(".typing");
    const cursorElement = document.querySelector(".cursor");
    let index = 0;
    let isDeleting = false;

    function type() {
      if (!isDeleting) {
        if (index < text.length) {
          typingElement.textContent += text.charAt(index);
          index++;
          setTimeout(type, 150); // Typing speed
        } else {
          isDeleting = true;
          setTimeout(type, 1000); // Pause before deleting
        }
      } else {
        if (index > 0) {
          typingElement.textContent = text.substring(0, index - 1);
          index--;
          setTimeout(type, 100); // Deleting speed
        } else {
          isDeleting = false;
          setTimeout(type, 500); // Pause before retyping
        }
      }
    }

    type(); // Start typing effect
  });


  



  
 */

 /*  document.addEventListener("DOMContentLoaded", function () {
    const text = "Akshay Vennu";
    const typingElement = document.querySelector(".typing");
    const cursorElement = document.querySelector(".cursor");
    let index = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting) {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 150); // Typing speed
            } else {
                isDeleting = true;
                setTimeout(type, 1000); // Pause before deleting
            }
        } else {
            if (index > 0) {
                typingElement.textContent = text.substring(0, index - 1);
                index--;
                setTimeout(type, 100); // Deleting speed
            } else {
                isDeleting = false;
                setTimeout(type, 500); // Pause before retyping
            }
        }
    }

    type(); // Start typing effect

    // Add navigation link active class functionality
    function mark(event) {
        document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }

    // Attach click event listeners to nav links
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener("click", mark);
    });
});




 */


















