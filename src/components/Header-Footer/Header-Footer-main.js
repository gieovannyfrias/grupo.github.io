/**
 * header-footer.js
 * Header y Footer premium negro moderno con menú hamburguesa y footer Avatar Pro Max.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ====== ESTILOS ======
  const styleHTML = `
  <style>
    :root {
      --bg-dark: #0d0d0d;
      --accent: #00ffcc;
      --accent-hover: #ff0099;
      --text-light: #f5f5f5;
    }
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: var(--bg-dark);
      color: var(--text-light);
    }
    /* HEADER */
    .site-header {
      position: fixed;
      top: 0; left: 0;
      width: 100%;
      background-color: rgba(20,20,20,0.85);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255,255,255,0.05);
      z-index: 1000;
    }
    .header-container {
  display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    flex-direction: column;
    flex-wrap: wrap;
    }
    .site-logo {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--text-light);
      text-decoration: none;
  font-family: "Bangers", system-ui;
  font-weight: 400;
  font-style: normal;
    }
    .main-nav ul {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0; padding: 0;
    }
    .nav-link {
      color: #aaa;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    .nav-link:hover, .nav-link.active {
      color: var(--accent);
    }
    /* FOOTER Avatar Pro Max */
    .footer-avatar {
      background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
      color: #f5f5f5;
      padding: 60px 30px;
      border-top: 2px solid #00ffcc;
      box-shadow: 0 -5px 25px rgba(0,255,204,0.3);
    }
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
      gap: 40px;
      max-width: 1400px;
      margin: 0 auto;
    }
    .footer-logo {
      font-size: 1.6rem;
      font-weight: 700;
      color: white;
      text-shadow: 0 0 10px #00ffcc;
  font-family: "Bangers", system-ui;
  font-weight: 400;
  font-style: normal;
    }
    .footer-tagline {
      font-size: 0.9rem;
      color: #aaa;
      margin-top: 10px;
    }
    .footer-block h3 {
      color: #ff0099;
      text-transform: uppercase;
      font-size: 0.95rem;
      margin-bottom: 1rem;
      letter-spacing: 1px;
    }
    .footer-block ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }
    .footer-block a {
      color: #888;
      text-decoration: none;
      transition: color 0.3s ease, text-shadow 0.3s ease;
    }
    .footer-block a:hover {
      color: #00ffcc;
      text-shadow: 0 0 8px #00ffcc;
    }
    .footer-bottom {
      margin-top: 40px;
      text-align: center;
      font-size: 0.85rem;
      opacity: 0.8;
    }
    /* MENÚ HAMBURGUESA */
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }
    .hamburger {
      display: block;
      width: 24px;
      height: 2px;
      background-color: #fff;
      position: relative;
      transition: background 0.2s ease;
    }
    .hamburger::before,
    .hamburger::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: #fff;
      left: 0;
      transition: transform 0.3s ease;
    }
    .hamburger::before { top: -6px; }
    .hamburger::after { bottom: -6px; }
    .menu-toggle.toggle-active .hamburger { background: transparent; }
    .menu-toggle.toggle-active .hamburger::before { transform: rotate(45deg); top: 0; }
    .menu-toggle.toggle-active .hamburger::after { transform: rotate(-45deg); bottom: 0; }
    @media (max-width: 768px) {
      .menu-toggle { display: block; }
      .main-nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background-color: #111;
        padding: 6rem 2rem;
        transition: right 0.3s ease-in-out;
      }
      .main-nav.nav-open { right: 0; }
      .main-nav ul {
        flex-direction: column;
        gap: 1.5rem;
      }
    }
  </style>
  `;
  document.head.insertAdjacentHTML('beforeend', styleHTML);

  // ====== HEADER ======
  const headerHTML = `
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
<//head>
    <header class="site-header">
      <div class="header-container">
        <a href="#" class="site-logo">Grupo Gieovanny Frías</a>
        <nav class="main-nav">
          <ul>
            <li><a href="/" class="nav-link active">Inicio</a></li>
            <li><a href="/Acerca_de" class="nav-link">Acerca de</a></li>
            <li><a href="/Videos" class="nav-link">Videos</a></li>
            <li><a href="/Empleo" class="nav-link">Empleo</a></li>
            <li><a href="/Contacto" class="nav-link">Contacto</a></li>
          </ul>
        </nav>
        <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">
          <span class="hamburger"></span>
        </button>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // ====== FOOTER ======
  const currentYear = new Date().getFullYear();
  const footerHTML = `
  <footer class="footer-avatar">
    <div class="footer-grid">
      <div class="footer-block">
        <h2 class="footer-logo">Grupo Gieovanny Frías</h2>
        <p class="footer-tagline">Empresas y organizaciones.</p>
      </div>
      <div class="footer-block">
        <h3>Explorar</h3>
        <ul>
          <li><a href="/index">Inicio</a></li>
          <li><a href="/Acerca_de">Acerca de</a></li>
          <li><a href="/Videos">Videos</a></li>
          <li><a href="/Empleo">Empleo</a></li>
          <li><a href="/Contacto">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-block">
        <h3>Comunidad</h3>
        <ul>
          <li><a href="/Eventos">Eventos</a></li>
        </ul>
      </div>
      <div class="footer-block">
        <h3>Legal</h3>
        <ul>
          <li><a href="/Politicas_privacidad">Politicas de privacidad</a></li>
          <li><a href="/Politicas_terminos">Politicas de términos</a></li>
          <li><a href="/Politicas_cookies">Politicas de cookies</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${currentYear} Grupo Gieovanny Frías — Empresas y organizaciones</p>
    </div>
  </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // ====== LÓGICA DE CONTROL DEL MENÚ HAMBURGUESA ======
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpened = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isOpened);
      mainNav.classList.toggle('nav-open');
      menuToggle.classList.toggle('toggle-active');
    });
  }
});
