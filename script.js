// // document.addEventListener("DOMContentLoaded", function () {
// //   // Smooth scrolling for anchor links
// //   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
// //     anchor.addEventListener("click", function (e) {
// //       e.preventDefault();
// //       document.querySelector(this.getAttribute("href")).scrollIntoView({
// //         behavior: "smooth",
// //       });
// //     });
// //   });

// //   // Certificate slider functionality
// //   const slider = document.getElementById("certificatesSlider");
// //   const dots = document.querySelectorAll(".slider-dot");
// //   const prevBtn = document.querySelector(".slider-button.prev");
// //   const nextBtn = document.querySelector(".slider-button.next");
// //   let currentSlide = 0;
// //   const totalSlides = document.querySelectorAll(".certificate-item").length;

// //   // Hide all slides except the first one
// //   function setupSlider() {
// //     const items = slider.querySelectorAll(".certificate-item");
// //     items.forEach((item, index) => {
// //       if (index !== 0) {
// //         item.style.display = "none";
// //       }
// //     });
// //   }

// //   // Show a specific slide
// //   function showSlide(index) {
// //     const items = slider.querySelectorAll(".certificate-item");
// //     items.forEach((item, i) => {
// //       item.style.display = i === index ? "block" : "none";
// //     });

// //     // Update active dot
// //     dots.forEach((dot, i) => {
// //       dot.classList.toggle("active", i === index);
// //     });

// //     currentSlide = index;
// //   }

// //   // Next slide
// //   function nextSlide() {
// //     showSlide((currentSlide + 1) % totalSlides);
// //   }

// //   // Previous slide
// //   function prevSlide() {
// //     showSlide((currentSlide - 1 + totalSlides) % totalSlides);
// //   }

// //   // Set up event listeners
// //   prevBtn.addEventListener("click", prevSlide);
// //   nextBtn.addEventListener("click", nextSlide);

// //   dots.forEach((dot, index) => {
// //     dot.addEventListener("click", () => {
// //       showSlide(index);
// //     });
// //   });

// //   // Initialize slider
// //   setupSlider();

// //   // Auto slide every 3 seconds
// //   setInterval(nextSlide, 3000);
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   // Smooth scrolling for anchor links
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth",
//       });
//     });
//   });

//   // Certificate slider functionality
//   const slider = document.getElementById("certificatesSlider");
//   const dots = document.querySelectorAll(".slider-dot");
//   const prevBtn = document.querySelector(".slider-button.prev");
//   const nextBtn = document.querySelector(".slider-button.next");
//   const items = document.querySelectorAll(".certificate-item");
//   let currentSlide = 0;
//   const totalSlides = dots.length;

//   // Get items per view based on screen width
//   function getItemsPerView() {
//     if (window.innerWidth >= 992) {
//       return 3; // Desktop shows 3
//     } else if (window.innerWidth >= 768) {
//       return 2; // Tablet shows 2
//     } else {
//       return 1; // Mobile shows 1
//     }
//   }

//   // Show a group of slides
//   function showSlide(index) {
//     // Make sure index is within bounds
//     if (index < 0) index = 0;
//     if (index > totalSlides - 1) index = totalSlides - 1;

//     // Calculate position to transform slider
//     const itemWidth = items[0].offsetWidth + 20; // Width + gap
//     const translateX = -index * itemWidth;

//     // Move the slider
//     slider.style.transform = `translateX(${translateX}px)`;

//     // Update active dot
//     dots.forEach((dot, i) => {
//       dot.classList.toggle("active", i === index);
//     });

//     currentSlide = index;
//   }

//   // Next slide
//   function nextSlide() {
//     showSlide(currentSlide + 1);
//   }

//   // Previous slide
//   function prevSlide() {
//     showSlide(currentSlide - 1);
//   }

//   // Set up event listeners
//   prevBtn.addEventListener("click", prevSlide);
//   nextBtn.addEventListener("click", nextSlide);

//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       showSlide(index);
//     });
//   });

//   // Handle window resize
//   window.addEventListener("resize", function () {
//     showSlide(0); // Reset to first slide when window is resized
//   });

//   // Initialize slider
//   showSlide(0);

//   // Optional: Auto slide every 5 seconds
//   setInterval(() => {
//     showSlide((currentSlide + 1) % totalSlides);
//   }, 5000);
// });

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Certificate slider functionality
  const slider = document.getElementById("certificatesSlider");
  const dots = document.querySelectorAll(".slider-dot");
  const prevBtn = document.querySelector(".slider-button.prev");
  const nextBtn = document.querySelector(".slider-button.next");
  const items = document.querySelectorAll(".certificate-item");

  let currentSlide = 0;
  const totalItems = items.length;
  const maxSlideIndex = totalItems - 1;

  // Get items per view based on screen width
  function getItemsPerView() {
    if (window.innerWidth >= 992) {
      return 3; // Desktop shows 3
    } else if (window.innerWidth >= 768) {
      return 2; // Tablet shows 2
    } else {
      return 1; // Mobile shows 1
    }
  }

  // Show a group of slides with wrap-around
  function showSlide(index) {
    const itemsPerView = getItemsPerView();
    const effectiveMaxIndex = Math.max(0, totalItems - itemsPerView);

    // Wrap around when reaching the bounds
    if (index < 0) {
      index = effectiveMaxIndex;
    } else if (index > effectiveMaxIndex) {
      index = 0;
    }

    // Calculate position to transform slider
    const itemWidth = items[0].offsetWidth + 20; // Width + gap
    const translateX = -index * itemWidth;

    // Move the slider with smooth transition
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(${translateX}px)`;

    // Update active dot
    const activeDotIndex = Math.min(index, dots.length - 1);
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeDotIndex);
    });

    currentSlide = index;
  }

  // Next slide with wrap-around
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Previous slide with wrap-around
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Set up event listeners
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Adjust the slide index based on items per view
      const targetSlide = Math.min(
        index * getItemsPerView(),
        totalItems - getItemsPerView()
      );
      showSlide(targetSlide);
    });
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    // Remove transition during resize to avoid jumpy behavior
    slider.style.transition = "none";

    // Reset to nearest valid position after resize
    setTimeout(() => {
      showSlide(Math.min(currentSlide, totalItems - getItemsPerView()));
      // Restore transition after a brief delay
      setTimeout(() => {
        slider.style.transition = "transform 0.5s ease";
      }, 50);
    }, 50);
  });

  // Initialize slider
  showSlide(0);

  // Auto slide every 3 seconds
  setInterval(nextSlide, 8000);
});
