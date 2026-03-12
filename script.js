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

// 카카오맵
const mapContainer = document.getElementById('kakao-map');
if (mapContainer && typeof kakao !== 'undefined') {
  const geocoder = new kakao.maps.services.Geocoder();
  geocoder.addressSearch('경기도 김포시 양촌읍 학운산단5로가길 37-36', function(result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      const map = new kakao.maps.Map(mapContainer, {
        center: coords,
        level: 3
      });
      const marker = new kakao.maps.Marker({ map: map, position: coords });
      const infowindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:8px 12px;font-size:13px;font-weight:600;white-space:nowrap;">(주)오플로</div>'
      });
      infowindow.open(map, marker);
    }
  });
}

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
