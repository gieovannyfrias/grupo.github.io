/**
 * ECOSISTEMA DE NOTICIAS DINÁMICAS PREMIUM
 * Inyección Autónoma Total en el DOM (CSS + HTML + Lógica)
 * SOLUCIÓN DEFINITIVA: Scrollbar forzado y Flex-shrink corregido
 * Grupo Corporativo 2026
 */

// 1. Inyección de Estilos CSS integrados al DOM de forma dinámica
const styles = `
  :root {
    --primary: #602DFF;
    --primary-glow: rgba(96, 45, 255, 0.15);
    --bg-gradient: linear-gradient(135deg, #090d16 0%, #111827 50%, #1f2937 100%);
    --card-bg: rgba(255, 255, 255, 0.02);
    --border: rgba(255, 255, 255, 0.06);
    --light: #f3f4f6;
    --text-muted: #9ca3af;
    --transition-premium: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
    font-family: 'Plus Jakarta Sans', sans-serif; 
  }

  body {
    background: var(--bg-gradient);
    min-height: 100vh;
    color: var(--light);
    padding: 60px 20px;
  }

  .related-section {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  .related-header { margin-bottom: 32px; }

  .related-header h3 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .related-header h3::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* CONTENEDOR RECEPTOR CON SCROLL VERTICAL FORZADO */
  .related-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-height: 480px;      /* Altura fija restrictiva */
    overflow-y: scroll;     /* Fuerza la existencia del scroll vertical */
    padding-right: 16px;    /* Espacio de seguridad para la barra */
  }

  /* --- ESTILIZACIÓN DE LA BARRA DE DESLIZAMIENTO NATIVA --- */
  .related-grid::-webkit-scrollbar {
    width: 8px;            /* Ligeramente más ancha para asegurar visibilidad */
    display: block !important;
  }
  
  .related-grid::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
  }
  
  .related-grid::-webkit-scrollbar-thumb {
    background: var(--primary); /* Color sólido inicial para verificar que pinta */
    border-radius: 10px;
    box-shadow: 0 0 10px var(--primary-glow);
  }
  
  .related-grid::-webkit-scrollbar-thumb:hover {
    background: #7c52ff;
  }

  /* ESTILOS DE LAS TARJETAS GENERADAS */
  .news-card-js {
    background: var(--card-bg);
    border: 1px solid var(--border);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: var(--transition-premium);
    opacity: 0;
    transform: translateY(20px);
    width: 100%;
    flex-shrink: 0; /* CRÍTICO: Impide que las tarjetas se achiquen para entrar en el contenedor */
  }

  .news-card-js.rendered {
    opacity: 1;
    transform: translateY(0);
  }

  .news-card-js:hover {
    transform: translateY(-4px);
    border-color: rgba(96, 45, 255, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 25px var(--primary-glow);
  }

  .card-img-wrapper { width: 100%; height: 200px; overflow: hidden; }
  .card-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition-premium); }
  .news-card-js:hover .card-img-wrapper img { transform: scale(1.03) rotate(0.2deg); }

  .card-info { padding: 24px; display: flex; flex-direction: column; flex: 1; }
  .meta-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 0.78rem; }
  .card-tag { color: var(--primary); text-transform: uppercase; font-weight: 700; letter-spacing: 1px; }
  .card-date { color: var(--text-muted); }

  .card-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.4;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .news-card-js:hover .card-title { color: var(--primary); }
  .card-desc {
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-muted);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Inyectamos la hoja de estilos al <head> de la página de forma inmediata
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// 2. Repositorio centralizado de datos
const noticiasRelacionadas = [
  {
    id: 1,
    titulo: "El despliegue de servidores híbridos descentralizados inicia en Europa",
    descripcion: "Nuestra infrastructure da soporte internacional a las marcas del grupo garantizando redundancia cero a partir de este mes.",
    categoria: "Nube",
    fecha: "Hace 2 horas",
    imagen: "https://unsplash.com",
    enlace: "#"
  },
  {
    id: 2,
    titulo: "Medidas preventivas avanzadas ante los nuevos lineamientos globales RGPD",
    descripcion: "Actualizamos de forma transparente los entornos legales para asegurar la total soberanía y protección de datos comerciales.",
    categoria: "Legal",
    fecha: "Hace 1 día",
    imagen: "https://unsplash.com",
    enlace: "#"
  },
  {
    id: 3,
    titulo: "Workshop de optimización: Variables nativas CSS y rendimiento a gran escala",
    descripcion: "El equipo de desarrollo Frontend libera la documentación oficial y arquitecturas preestablecidas para agencias aliadas.",
    categoria: "Desarrollo",
    fecha: "05 Sep 2026",
    imagen: "https://unsplash.com",
    enlace: "#"
  }
];

// 3. Función controladora del motor de renderizado del DOM
function renderRelatedNews(newsArray) {
  const gridContainer = document.getElementById('relatedGrid');
  
  if (!gridContainer || newsArray.length === 0) return;

  const htmlContent = newsArray.map(item => `
    <a href="${item.enlace}" class="news-card-js" data-id="${item.id}">
      <div class="card-img-wrapper">
        <img src="${item.imagen}" alt="${item.titulo}" loading="lazy">
      </div>
      <div class="card-info">
        <div class="meta-row">
          <span class="card-tag">${item.categoria}</span>
          <span class="card-date">${item.fecha}</span>
        </div>
        <h4 class="card-title">${item.titulo}</h4>
        <p class="card-desc">${item.descripcion}</p>
      </div>
    </a>
  `).join('');

  gridContainer.innerHTML = htmlContent;

  const cards = gridContainer.querySelectorAll('.news-card-js');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('rendered');
    }, index * 120);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderRelatedNews(noticiasRelacionadas);
});
