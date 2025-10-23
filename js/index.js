// index.js

// wave
VANTA.WAVES({
      el: "#wave-bg",
      color: 0x025959,          // 물결 색상
      shininess: 50,
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

const nextBtn = document.querySelector('.next-btn');
const p4Pages = document.querySelectorAll('#p4 .p4-page');
let currentPage = 0;

nextBtn.addEventListener('click', () => {
  // 현재 페이지 숨기기
  p4Pages[currentPage].classList.remove('active');

  // 다음 페이지 인덱스 계산
  currentPage = (currentPage + 1) % p4Pages.length;

  // 다음 페이지 보이기
  p4Pages[currentPage].classList.add('active');
});