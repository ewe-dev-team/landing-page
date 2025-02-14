document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('user-form');
  const formContainer = document.getElementById('form-container');
  const testContainer = document.getElementById('test-container');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next');

  let currentQuestionIndex = 0;
  let currentSection = 'A1';
  let correctAnswers = 0;

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
      { question: 'Ordena las palabras para formar una frase: go / I / to / the supermarket / usually / on sunday.', options: ['I usually go to the supermarket on Sunday'], answer: 'I usually go to the supermarket on Sunday' },
      { question: "¿Cómo se llama la hermana de Mary? 'Mary has 2 siblings. Her brother's name is Tom. Her sister's name is Jane.'", options: ['Jane', 'Mary', 'Tom'], answer: 'Jane' },
    ],
    A2: [
      { question: 'Completa: I have lived in this city ____ 5 years.', options: ['since', 'for', 'about'], answer: 'for' },
      { question: 'Elige la opción correcta: If I ____ more money, I would travel to Europe.', options: ['had', 'have', 'would have'], answer: 'had' },
      { question: "¿Cuál es el pasado de 'go'?", options: ['goes', 'went', 'gone'], answer: 'went' },
      { question: 'Completa la frase: She has already ____ the movie.', options: ['see', 'seen', 'saw'], answer: 'seen' },
      { question: 'Traduce al inglés: Yo no tengo tiempo.', options: ["I don't have time.", "I doesn't have time.", 'I no have time.'], answer: "I don't have time." },
      { question: '¿Cuál es la forma correcta?: ____ you ever been to London?', options: ['Did', 'Have', 'Has'], answer: 'Have' },
      { question: 'Selecciona la opción correcta: I am looking forward ____ you.', options: ['to meeting', 'meeting', 'to meet'], answer: 'to meeting' },
      { question: 'Elige la forma correcta: She runs faster ____ her brother.', options: ['as', 'than', 'that'], answer: 'than' },
      { question: "¿Cuál es el significado de 'though'?", options: ['Aunque', 'Pensar', 'Pensado'], answer: 'Aunque' },
      { question: "¿Cómo se dice 'debería' en inglés?", options: ['should', 'could', 'would'], answer: 'should' },
    ],
    B1: [
      { question: '¿Cuál es el condicional adecuado?: If I ____ you, I would apologize.', options: ['was', 'were', 'am'], answer: 'were' },
      { question: 'Completa la frase: I wish I ____ more time to study.', options: ['had', 'have', 'will have'], answer: 'had' },
      { question: 'Elige la opción correcta: The book ____ by J.K. Rowling.', options: ['is written', 'wrote', 'was writing'], answer: 'is written' },
      { question: 'Selecciona la palabra adecuada: Despite ____ tired, he finished the project.', options: ['being', 'be', 'been'], answer: 'being' },
      { question: 'Traduce: Ella dijo que vendría mañana.', options: ['She said she would come tomorrow.', 'She said she will come tomorrow.', 'She says she will come tomorrow.'], answer: 'She said she would come tomorrow.' },
      { question: 'Elige la forma pasiva: They are building a new school.', options: ['A new school is being built.', 'A new school will be built.', 'A new school has been built.'], answer: 'A new school is being built.' },
      { question: "¿Cuál es un sinónimo de 'important'?", options: ['essential', 'minor', 'unnecessary'], answer: 'essential' },
      { question: 'Completa: I would rather ____ home tonight.', options: ['stay', 'stayed', 'staying'], answer: 'stay' },
      { question: 'Elige la opción correcta: I didn’t see anyone at the party, ____ I?', options: ['did', "didn't", 'do'], answer: 'did' },
      { question: "¿Qué significa 'rarely'?", options: ['Raramente', 'Frecuentemente', 'Siempre'], answer: 'Raramente' },
    ],
    B2: [
      { question: "Elige la opción correcta: It's high time you ____ studying for the exam.", options: ['start', 'started', 'have started'], answer: 'started' },
      { question: 'Selecciona la forma adecuada: By the time I arrived, they ____ dinner.', options: ['had finished', 'finish', 'were finishing'], answer: 'had finished' },
      { question: 'Traduce: No puedo evitar reírme.', options: ["I can't help laughing.", "I can't stop laughing.", "I can't resist laughing."], answer: "I can't help laughing." },
      { question: 'Elige la opción correcta: He suggested ____ a movie instead.', options: ['to watch', 'watching', 'watch'], answer: 'watching' },
      { question: 'Completa: She prefers ____ rather than go out.', options: ['staying', 'stay', 'to staying'], answer: 'staying' },
      { question: "¿Qué significa 'albeit'?", options: ['Aunque', 'Porque', 'Por lo tanto'], answer: 'Aunque' },
      { question: 'Selecciona la opción correcta: He spoke so fast that I ____ understand him.', options: ['couldn’t', 'can’t', 'won’t'], answer: 'couldn’t' },
      { question: "¿Qué significa 'to thrive'?", options: ['Prosperar', 'Sobrevivir', 'Retroceder'], answer: 'Prosperar' },
      { question: 'Elige la forma adecuada: They ____ the car fixed before the trip.', options: ['had', 'have', 'were'], answer: 'had' },
      { question: 'Traduce: Ella no puede estar en casa ahora.', options: ["She can't be at home now.", "She isn't at home now.", "She mustn't be at home now."], answer: "She can't be at home now." },
    ],
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
  };

  const endTest = (level) => {
    testContainer.innerHTML = `
      <h1>¡Test Finalizado!</h1>
      <p>Tu nivel es: <strong>${level}</strong></p>
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
          endTest('Nivel B2');
          return;
        default:
          break;
      }
      currentQuestionIndex = 0;
      correctAnswers = 0;
      loadQuestion();
    } else {
      endTest(`Nivel ${currentSection}`);
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formContainer.style.display = 'none';
    testContainer.style.display = 'flex';
    loadQuestion();
  });

  nextButton.addEventListener('click', () => {
    nextButton.disabled = true;
    nextQuestion();
  });
});
