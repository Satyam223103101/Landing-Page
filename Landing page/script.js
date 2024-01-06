// JavaScript for responsiveness
window.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.querySelector('.menu-icon');
    const navList = document.querySelector('.nav-list');
  
    menuIcon.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 600) {
        document.querySelector('.navbar').classList.add('responsive');
      } else {
        document.querySelector('.navbar').classList.remove('responsive');
        navList.classList.remove('show');
      }
    });
  });
  