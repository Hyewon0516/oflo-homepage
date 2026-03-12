const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// 헤더 스크롤
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.borderBottomColor = window.scrollY > 30
    ? 'rgba(0,0,0,0.08)'
    : 'rgba(0,0,0,0.05)';
});

// 부드러운 스크롤 (헤더 높이 보정)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});
