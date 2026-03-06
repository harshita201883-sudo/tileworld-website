    const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        } else {
        navbar.classList.remove('scrolled');
        }   
    });

    const videoBg = document.querySelector('.video-bg');
    if (window.innerWidth < 768) {
      videoBg.autoplay = false;
      videoBg.load();
    }

    document.addEventListener("DOMContentLoaded", function () {
        var navLinks = document.getElementById("navLinks");
        var hamburger = document.getElementById("hamburger");

        hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("open");
        });
    });

     const cityButtons = document.querySelectorAll(".city-list li");
    const videos = document.querySelectorAll(".emporium-video video");

    cityButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        cityButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const selected = btn.getAttribute("data-city");

        videos.forEach((v) => {
          if (v.id === selected) {
            v.classList.add("active");
            v.currentTime = 0;
            v.muted = true;
            v.play().catch((e) => console.log("Autoplay issue:", e));
          } else {
            v.classList.remove("active");
            v.pause();
          }
        });
      });
    });

     const cards = document.querySelectorAll('.product-card');
  const lightbox = document.getElementById('lightbox');
  const title = document.getElementById('lightbox-title');
  const img = document.getElementById('lightbox-img');
  const desc = document.getElementById('lightbox-desc');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      title.textContent = card.getAttribute('data-title');
      img.src = card.getAttribute('data-img');
      desc.textContent = card.getAttribute('data-desc');
      lightbox.classList.add('active');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
  }

  