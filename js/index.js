// index.js
// curser-circle
const cursor = document.querySelector(".cursor-circle");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.05,
    ease: "power2.out"
  });
});

// header
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// wave
VANTA.WAVES({
      el: "#wave-bg",
      color: 0x025959, // 물결 색상
      shininess: 40,
      waveHeight: 20,
      waveSpeed: 1.2,
      zoom: 1.2
    });

// Initialize Swiper
document.addEventListener("DOMContentLoaded", () => {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    let swiper = new Swiper(".mySwiper", {
        loop: true, // ✅ 추가
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                progressCircle.style.setProperty("--progress", 1 - progress);
                progressContent.textContent = `${Math.ceil(time / 1000)}s`;
            }
        }
    });
});

const menuLinks = document.querySelectorAll('.project-menu a');
const projects = document.querySelectorAll('.project-in');


menuLinks.forEach(link => {
link.addEventListener('click', e => {
    e.preventDefault();

    // 모든 링크에서 active 제거
    menuLinks.forEach(l => l.classList.remove('active'));

    // 클릭한 링크에 active 추가
    link.classList.add('active');

    // 모든 프로젝트 내용 숨김
    projects.forEach(p => p.classList.remove('active'));

    // 클릭한 링크의 data-target과 일치하는 id를 가진 프로젝트만 보이기
    const targetId = link.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
});
});

projects.forEach(project => {
  const nextBtn = project.querySelector('.next-btn');
  const prevBtn = project.querySelector('.prev-btn');

  const pages = project.querySelectorAll('.page-in');

  // 첫 번째 페이지만 active
  let currentIndex = 0;
  pages.forEach((p, i) => p.classList.toggle('active', i === currentIndex));

  function showPage(index) {
    pages.forEach((p, i) => p.classList.toggle('active', i === index));
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % pages.length;
    showPage(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + pages.length) % pages.length;
    showPage(currentIndex);
  });
});
