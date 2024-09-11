const quizData = [
    {
      question: "What is the capital of France?",
      a: "Berlin",
      b: "Madrid",
      c: "Paris",
      d: "Rome",
      correct: "c"
    },
    {
      question: "Who is the CEO of Tesla?",
      a: "Jeff Bezos",
      b: "Elon Musk",
      c: "Bill Gates",
      d: "Steve Jobs",
      correct: "b"
    },
    {
      question: "What is the most used programming language?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d"
    },
    {
      question: "Which year was JavaScript created?",
      a: "1995",
      b: "1996",
      c: "1997",
      d: "1994",
      correct: "a"
    }
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  const scoreEl = document.getElementById('score');
  const answerEls = document.querySelectorAll('.answer');
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    quizContainer.classList.add('fadeOut');  // Trigger fade out animation
  
    setTimeout(() => {
      quizContainer.classList.remove('fadeOut');
      quizContainer.classList.add('fadeIn');  // Trigger fade in animation
  
      deselectAnswers();
      const currentQuizData = quizData[currentQuiz];
  
      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
    }, 500);  // Wait for fade out to finish
  }
  
  function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      
      currentQuiz++;
      
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quizContainer.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly!</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  });
  