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

// main-visual
VANTA.BIRDS({
  el: "#birds-bg",           // 효과를 적용할 요소 ID
  mouseControls: true,       // 마우스 인터랙션
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,

  // 🎨 컬러 및 스타일 설정
  backgroundAlpha: 0.0,  // ✅ 추가: 캔버스 투명도
  backgroundColor: 0x00000000, // 배경색(투명)
  color1: 0x025959,          // 새의 주요 색상
  color2: 0xF2E0C9,          // 보조 색상
  birdSize: 1.3,             // 새 크기
  wingSpan: 25.0,            // 날개 길이
  quantity: 4.0,             // 새의 수
  speedLimit: 4.00,          // 속도 제한
  separation: 50.00,         // 새들 간 거리
  alignment: 30.00,          // 비행 정렬 정도
  cohesion: 10.00,           // 군집력 (값이 높을수록 뭉침)
})

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
