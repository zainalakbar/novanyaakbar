// Initialize Feather Icons
feather.replace();

// Modal functionality for gallery
const galleryItems = document.querySelectorAll(".gallery-item");
const modals = document.querySelectorAll(".modal");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const modalId = item.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
});

// Close modal
modals.forEach((modal) => {
  const closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Smooth scroll for navbar links
const navbarLinks = document.querySelectorAll(".navbar-nav a");
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const offsetTop = targetSection.offsetTop - 70; // Adjust for navbar height
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
    // Close the menu after clicking a link
    navbarNav.classList.remove("active");
  });
});

// Animate timeline items on scroll
const timelineItems = document.querySelectorAll(".timeline-item");

const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

timelineItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(item);
});

// Hamburger menu toggle
const menuIcon = document.querySelector(".menu-icon");
const navbarNav = document.querySelector(".navbar-nav");

menuIcon.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// Heart animation on navbar (menu open for mobile)
const heartIcon = document.querySelector(
  '.navbar-extra i[data-feather="heart"]'
);
if (heartIcon) {
  heartIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    navbarNav.classList.add("active");
    heartIcon.style.transform = "scale(1.2)";
    setTimeout(() => {
      heartIcon.style.transform = "scale(1)";
    }, 300);
  });
}

// Close menu when clicking anywhere except the heart icon
document.addEventListener("click", (e) => {
  if (!heartIcon.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Story modal functionality
const storyBtns = document.querySelectorAll(".story-btn");
const storyModals = document.querySelectorAll(".story-modal");

storyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const storyId = btn.getAttribute("data-story");
    const modal = document.getElementById("story-modal" + storyId);
    modal.style.display = "block";
  });
});

// Close story modal
storyModals.forEach((modal) => {
  const closeBtn = modal.querySelector(".story-close");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Hide arrow initially
const arrowContainer = document.getElementById("arrow-container");
arrowContainer.style.display = "none";

// Checkboxes functionality for future plans
const checkboxes = document.querySelectorAll(".plan-checkbox");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
    if (allChecked) {
      arrowContainer.style.display = "block";
    } else {
      arrowContainer.style.display = "none";
    }
  });
});

// Function to position arrow above "rN" in "AkbarNovaa"
function positionArrow() {
  const author = document.getElementById('author');
  const arrowContainer = document.getElementById('arrow-container');
  if (!author || !arrowContainer || arrowContainer.style.display === 'none') return;

  const rect = author.getBoundingClientRect();
  const text = author.textContent;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = getComputedStyle(author).font;
  const widthUpToR = ctx.measureText('Akbar').width; // Width of "Akbar"
  const arrowLeft = rect.left + widthUpToR;
  arrowContainer.style.left = arrowLeft + 'px';
  arrowContainer.style.transform = 'translateX(0)'; // Remove translateX(-50%) since we're setting exact left
}

// Position arrow on load, resize, and when shown
window.addEventListener('load', positionArrow);
window.addEventListener('resize', positionArrow);

// Modify checkbox change to position arrow when shown
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
    if (allChecked) {
      arrowContainer.style.display = "block";
      positionArrow();
    } else {
      arrowContainer.style.display = "none";
    }
  });
});

//gpt

const author = document.getElementById("author");
const modal = document.getElementById("photoModal");
const closeBtn = document.querySelector(".close");

author.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
