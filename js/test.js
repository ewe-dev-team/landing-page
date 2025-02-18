document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('user-form');
  const formContainer = document.getElementById('form-container');
  const testContainer = document.getElementById('test-container');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next');
  const progressBar = document.getElementById('progress-bar');
  const questionCounter = document.getElementById('question-counter');

  let currentQuestionIndex = 0;
  let currentSection = 'A1';
  let correctAnswers = 0;
  const totalQuestions = 40;
  let nombre = '';
  let apellido = '';

  const testQuestions = {
    A1: [
      { question: 'Completa la frase: She ____ a student.', options: ['am', 'is', 'are'], answer: 'is' },
      { question: 'Elige la opción correcta: They ____ from Mexico.', options: ['don’t', 'aren’t', 'doesn’t are'], answer: 'aren’t' },
      { question: "¿Cuál es el plural de 'child'?", options: ['childs', 'children', 'childrens'], answer: 'children' },
      { question: 'Completa la pregunta: ____ your name?', options: ['What', "What's", 'Where'], answer: "What's" },
      { question: 'Traduce al inglés: ¿Cómo estás?', options: ['How are you?', 'How old are you?', 'Where are you?'], answer: 'How are you?' },
      { question: 'Escribe la palabra que falta: I like to ____ pizza.', options: ['drink', 'play', 'watch', 'eat'], answer: 'eat' },
      { question: 'Elige la opción que NO pertenece al grupo:', options: ['happy', 'sad', 'table'], answer: 'table' },
      { question: 'Elige la opción correcta: ____ a cat in the garden.', options: ['There is', 'There are', 'Is there'], answer: 'There is' },
      { question: 'Ordena las palabras para formar una frase: go / I / to / the supermarket / usually / on sunday.', options: ['I usually go to the supermarket on Sunday', 'I go usually on Sunday to the supermarket', 'On Sunday I go usually to the supermarket'], answer: 'I usually go to the supermarket on Sunday' },
      { question: "¿Cómo se llama la hermana de Mary? 'Mary has 2 siblings. Her brother's name is Tom. Her sister's name is Jane.'", options: ['Jane', 'Mary', 'Tom'], answer: 'Jane' },
    ],
    A2: [
      { question: 'Completa la frase: I ____ to the cinema yesterday.', options: ['go', 'went', 'gone'], answer: 'went' },
      { question: 'Elige la opción correcta: She ____ play the piano very well.', options: ['can', "can't", "don't"], answer: 'can' },
      { question: '¿Cuál es la pregunta correcta para la respuesta "I\'m from Spain"?', options: ['Where are you from?', "What's your name?", 'How old are you?'], answer: 'Where are you from?' },
      { question: 'Completa la frase con la forma correcta del verbo: He ____ (study) English every day.', options: ['studies', 'study', 'studied'], answer: 'studies' },
      { question: 'Elige la opción correcta: I have ____ brothers.', options: ['two', 'a', 'an'], answer: 'two' },
      { question: 'Escribe la frase en pasado simple: "I go to the park."', options: ['I went to the park.', 'I go to the parked.', 'I goed to the park.'], answer: 'I went to the park.' },
      { question: 'Lee el texto corto y decide si la frase es verdadera o falsa: "John went to London last week. He visited the Big Ben and Buckingham Palace." – John visitó París.', options: ['Verdadero', 'Falso'], answer: 'Falso' },
      { question: 'Elige la palabra que NO pertenece al grupo:', options: ['apple', 'banana', 'car'], answer: 'car' },
      { question: 'Completa la frase con la preposición correcta: I live ____ Madrid.', options: ['in', 'on', 'at'], answer: 'in' },
      { question: 'Elige la opción con el significado opuesto: "happy"', options: ['sad', 'angry', 'tired'], answer: 'sad' },
    ],
    B1: [
      { question: 'Completa la frase: If I ____ (have) more money, I would buy a car.', options: ['have', 'had', 'will have'], answer: 'had' },
      { question: 'Elige la opción correcta: I have ____ (see) that film before.', options: ['see', 'saw', 'seen'], answer: 'seen' },
      { question: 'Escribe la frase en pasado continuo: "He reads a book."', options: ['He was reading a book.', 'He read a book.', 'He is reading a book.'], answer: 'He was reading a book.' },
      { question: 'Elige la palabra que mejor completa la frase: The exam was very ____. I think I failed.', options: ['easy', 'difficult', 'interesting'], answer: 'difficult' },
      { question: 'Escribe la oración en presente perfecto: She ____ (work) here for five years.', options: ['works', 'worked', 'has worked'], answer: 'has worked' },
      { question: 'Lee el texto corto y responde la pregunta: "Maria went to Paris last summer. She visited the Eiffel Tower and the Louvre Museum." ¿Qué museo visitó Maria?', options: ['The British Museum', 'The Louvre Museum', 'The Prado Museum'], answer: 'The Louvre Museum' },
      { question: 'Elige la opción con el significado similar a "start":', options: ['begin', 'finish', 'continue'], answer: 'begin' },
      { question: 'Completa la frase: I\'m not sure ____ he will come.', options: ['if', 'that', 'what'], answer: 'if' },
      { question: '¿Cuál es el superlativo de "bad"?', options: ['badder', 'worse', 'worst'], answer: 'worst' },
      { question: 'Reformula la frase usando la palabra dada: "I can\'t go to the party." (able)', options: ['I am not able to go to the party.', 'I wasn\'t able to go to the party.', 'I don\'t able to go to the party.'], answer: 'I am not able to go to the party.' },
    ],
    B2: [
      { question: 'Elige la opción correcta: The book ____ (write) by a famous author.', options: ['was written', 'is written', 'has written'], answer: 'was written' },
      { question: 'Completa la frase con la palabra correcta: I\'m interested ____ learning English.', options: ['in', 'on', 'at'], answer: 'in' },
      { question: 'Elige la palabra que mejor completa la frase: The government has implemented new ____ to reduce pollution.', options: ['policies', 'politics', 'politicians'], answer: 'policies' },
      { question: 'Reformula la frase usando la palabra dada: "He is too young to drive." (enough)', options: ['He is not old enough to drive.', 'He is enough old to drive.', 'He is too enough young to drive.'], answer: 'He is not old enough to drive.' },
      { question: 'Elige la opción con el significado opuesto a "support":', options: ['oppose', 'agree', 'understand'], answer: 'oppose' },
      { question: 'Lee el texto corto y responde la pregunta: "Unemployment rates have increased significantly in recent years." ¿Qué ha aumentado en los últimos años?', options: ['Employment', 'Unemployment rates', 'Salaries'], answer: 'Unemployment rates' },
      { question: 'Elige la opción que NO es un sinónimo de "advantage":', options: ['benefit', 'drawback', 'gain'], answer: 'drawback' },
      { question: 'Completa la frase: I wish I ____ (have) more time to travel.', options: ['had', 'have', 'will have'], answer: 'had' },
      { question: 'Elige la palabra que mejor completa la frase: The company\'s success is ____ to its innovative products.', options: ['attributed', 'contributed', 'distributed'], answer: 'attributed' },
      { question: 'Reformula la frase para que tenga el mismo significado: "It\'s necessary to study hard."', options: ['You must study hard.', 'You should study hard.', 'You may study hard.'], answer: 'You must study hard.' },
    ],
  };

  const infoData = {
    A1: {
      title: 'El inicio del viaje',
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
      title: 'Descubriendo tu entorno',
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
      title: 'Despegando con confianza.',
      description: 'ATRÉVETE A VOLAR MÁS ALTO.',
      details: [
        'Conecta ideas,expresa tus experiencias, metas y opiniones con mayor soltura y aborda nuevos horizontes en tu aprendizaje. Desenvuelvete en viajes y en conversaciones sobre temas familiares o de interés personal. Comprende los puntos principales de textos claros, sigue películas o programas con lenguaje estándar y escribe textos simples pero conectados.',
        'Ideal para: Personas que desean comunicarse cómodamente en inglés en el día a día.',
      ],
      sublevels: [
        'B1.1 Low-intermediate',
        'B1.2 Mid-intermediate',
      ],
    },
    B2: {
      title: 'Ampliando horizontes.',
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

  const loadQuestion = () => {
    const currentSectionQuestions = testQuestions[currentSection];
    const currentQuestion = currentSectionQuestions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option) => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="radio" name="answer" value="${option}" />
        ${option}
      `;
      label.style.display = 'flex';
      optionsElement.appendChild(label);
    });

    const radios = document.querySelectorAll('input[name="answer"]');
    radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        nextButton.disabled = false;
      });
    });

    let sectionOffset = 0;
    switch (currentSection) {
      case 'A2':
        sectionOffset = 10;
        break;
      case 'B1':
        sectionOffset = 20;
        break;
      case 'B2':
        sectionOffset = 30;
        break;
      default:
        sectionOffset = 0;
    }
    const totalAnsweredQuestions = currentQuestionIndex + sectionOffset;
    questionCounter.textContent = `Pregunta ${totalAnsweredQuestions + 1}/${totalQuestions}`;

    const progressPercentage = ((totalAnsweredQuestions + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  };

  const endTest = (level) => {
    const info = infoData[level];
    const telefono = '525543826531';
    const mensaje = `Hola, soy ${nombre} ${apellido}, acabo de realizar mi test y obtuve el nivel ${level}. Quisiera continuar con mi proceso de inscripción. ¿Me pueden ayudar?`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    testContainer.innerHTML = `
    <div id="results-container">
      <h1>¡Test finalizado con éxito!</h1>
      <div id="main-results">
        <div id="left-results">
          <p>Tu nivel es:</p>
          <h2>${level}</h2>
          <img src="../assets/images/${level}-icon.png"></img>
        </div>
        <div id="right-results">
          <h3>${info.title}</h3>
          <h3>${info.description}</h3>
          <a id="whatsappLink" class="button" href="${url}" target="_blank">Último paso</a>
        </div>
      </div>
    </div>
    `;
  };

  const nextQuestion = () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const currentSectionQuestions = testQuestions[currentSection];
    const currentQuestion = currentSectionQuestions[currentQuestionIndex];

    if (!selectedOption) return;

    if (selectedOption.value === currentQuestion.answer) {
      correctAnswers += 1;
    }

    currentQuestionIndex += 1;

    if (currentQuestionIndex < currentSectionQuestions.length) {
      loadQuestion();
    } else if (correctAnswers >= 8) {
      switch (currentSection) {
        case 'A1':
          currentSection = 'A2';
          break;
        case 'A2':
          currentSection = 'B1';
          break;
        case 'B1':
          currentSection = 'B2';
          break;
        case 'B2':
          endTest('B2');
          return;
        default:
          break;
      }
      currentQuestionIndex = 0;
      correctAnswers = 0;
      loadQuestion();
    } else {
      endTest(currentSection);
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    nombre = document.getElementById('name').value;
    apellido = document.getElementById('lastname').value;
    formContainer.style.display = 'none';
    testContainer.style.display = 'flex';
    loadQuestion();
  });

  nextButton.addEventListener('click', () => {
    nextButton.disabled = true;
    nextQuestion();
  });
});