document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button[data-level]');
  const infoContainer = document.getElementById('info-cont');

  const infoData = {
    A1: {
      title: 'EL INICIO DEL VIAJE.',
      description: 'ROMPE EL CASCARÓN DEL IDIOMA.',
      details: [
        'Comienza a explorar lo esencial del inglés, construyendo la base para tu crecimiento. Aprende a usar frases simples para presentarte, hablar sobre tu entorno y satisfacer necesidades básicas. Este es tu primer paso hacia el dominio del idioma.',
        'Ideal para: Personas que nunca han estudiado inglés o tienen conocimientos muy limitados.',
      ],
      sublevels: [
        'A1.1 Preliminary',
        'A1.2 Beginner',
      ],
    },
    A2: {
      title: 'DESCUBRIENDO TU ENTORNO.',
      description: 'EMPIEZA A DAR TUS PRIMEROS ALETEOS.',
      details: [
        'Adquiere herramientas para manejar situaciones simples y cotidianas mientras te acostumbras al mundo del idioma. Desenvuelvete en situaciones cotidianas como hacer compras, hablar sobre tu familia o dar instrucciones simples. Entenderás frases comunes, comunicarte en intercambios simples y escribir mensajes cortos.  Tu confianza empieza a crecer.',
        'Ideal para: Quienes desean desenvolverse en tareas prácticas y habituales.',
      ],
      sublevels: [
        'A2.1 Elementary',
        'A2.2 Basic',
      ],
    },
    B1: {
      title: 'DESPEGANDO CON CONFIANZA.',
      description: 'ATRÉVETE A VOLAR MÁS ALTO.',
      details: [
        'Conecta ideas, expresa tus experiencias, metas y opiniones con mayor soltura y aborda nuevos horizontes en tu aprendizaje. Desenvuelvete en viajes y en conversaciones sobre temas familiares o de interés personal. Comprende los puntos principales de textos claros, sigue películas o programas con lenguaje estándar y escribe textos simples pero conectados.',
        'Ideal para: Personas que desean comunicarse cómodamente en inglés en el día a día.',
      ],
      sublevels: [
        'B1.1 Low-intermediate',
        'B1.2 Mid-intermediate',
      ],
    },
    B2: {
      title: 'AMPLIANDO HORIZONTES.',
      description: 'DOMINA EL VIENTO.',
      details: [
        'Mejora tu fluidez, enfrenta desafíos más complejos y muévete con seguridad en ambientes más exigentes. Tus habilidades se fortalecen y te permiten manejar discusiones más complejas. Habla con fluidez sobre temas abstractos o especializados, adaptándote a contextos sociales y profesionales. Entiende textos más técnicos y conversaciones rápidas, charlas, y reportajes en inglés estándar. Participa activamente en debates, y escribe ensayos o informes claros y bien estructurados.',
        'Ideal para: Quienes necesitan usar el inglés en ambientes académicos o laborales.',
      ],
      sublevels: [
        'B2.1 High-intermediate',
        'B2.2 Upper-intermediate',
      ],
    },
  };

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const level = button.getAttribute('data-level');
      const info = infoData[level];

      const infoHtml = `
      <div class="info-container">
        <h3>${info.title}</h3>
        <h2>${info.description}</h2>
        ${info.details.map((detail) => `<p>${detail}</p>`).join('')}
        <div class="subniveles">
          ${info.sublevels.map((sublevel) => `<p>${sublevel}</p>`).join(' | ')}
        </div>
      </div>
      `;

      infoContainer.style.display = 'flex';
      infoContainer.innerHTML = infoHtml;
      infoContainer.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('click', (event) => {
    if (!infoContainer.contains(event.target)) {
      infoContainer.innerHTML = '';
      infoContainer.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const convBtn = document.getElementById('conv-btn');
  const convContainer = document.getElementById('conv-info');

  convBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const convHtml = `
      <div class="info-container conv-container">
        <div class="div1">
          <h3>C1</h3>
          <img src="../assets/images/c1-icon.png" alt="Eagle Ic">
          <h2>Alcanzando la cima</h2>
          <h2>Vuela alto y con elegancia</h2>
        </div>
        <div class="div2">
          <p>Usa el inglés con flexibilidad en un contexto profesional, académico o social, exprésate con fluidez y profundidad sobre temas complejos. Comprende discursos largos, películas, documentales y reportajes en inglés, textos especializados o literarios, y escribe documentos detallados con un estilo apropiado. Este nivel refleja un dominio avanzado del idioma.</p>
          <p>Ideal para: Personas que buscan destacarse en un entorno internacional o académico.</p>
        </div>
      </div>

      <div class="info-container conv-container">
        <div class="div1">
          <h3>C2</h3>
          <img src="../assets/images/c2-icon.png" alt="Eagle Ic">
          <h2>La cúspide del dominio</h2>
          <h2>Conquista los cielos</h2>
        </div>
        <div class="div2">
          <p>Usa el inglés con total naturalidad y precisión, adáptate a cualquier contexto con maestría y perfección. Comprende contenido desde literatura compleja hasta discursos técnicos, películas y conversaciones en diferentes acentos en dónde además capta matices sutiles, significados implícitos y expresiones idiomáticas. Escribe con estilo, corrección y creatividad en cualquier formato. Este es el nivel de maestría total.</p>
          <p>Ideal para: Personas que buscan usar el inglés al nivel de un hablante nativo.</p>
        </div>
      </div>
    `;
    convContainer.style.display = 'flex';
    convContainer.innerHTML = convHtml;
    convContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.addEventListener('click', (event) => {
    if (!convContainer.contains(event.target)) {
      convContainer.innerHTML = '';
      convContainer.style.display = 'none';
    }
  });
});