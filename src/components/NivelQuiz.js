import React, { useState } from 'react';
import '../styles/Quiz.css';
import '../styles/Nivel.css';
import trofeu from '../assets/img/trofeu.png';
import correct from '../assets/audio/correct.wav';
import wrong from '../assets/audio/wrong.wav';
import { Link } from 'react-router-dom';

const NivelQuiz = ({ level, questions, pdfUrl, headerClass }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [attempts, setAttempts] = useState(3);
  const [points, setPoints] = useState(0);

  const questao = questions[currentQuestion];

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer.isCorrect;
    if (isCorrect) {
      const newPoints = points + attempts;
      setPoints(newPoints);
      setUserAnswers([...userAnswers, { question: currentQuestion, answer: selectedAnswer.text, correct: true, attemptsLeft: attempts }]);
      setCurrentQuestion(currentQuestion + 1);
      setAttempts(3); // Reset attempts for the next question
      new Audio(correct).play();
    } else {
      const newAttempts = attempts - 1;
      setAttempts(newAttempts);
      new Audio(wrong).play();
      if (newAttempts === 0) {
        setUserAnswers([...userAnswers, { question: currentQuestion, answer: selectedAnswer.text, correct: false, attemptsLeft: 0 }]);
        setCurrentQuestion(currentQuestion + 1);
        setAttempts(3); // Reset attempts for the next question
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setAttempts(3);
    setPoints(0);
  };

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <h1 className={headerClass}>Nível {level}</h1>
        {currentQuestion < questions.length && (
          <>
            <h2 className='quiz-header-question'>Questão {questao.questao}</h2>
            <h3 className='quiz-header-points'>Pontos: {points}</h3>
          </>
        )}
      </header>

      {currentQuestion < questions.length ? (
        <>
          <div className="quiz-question">
            <iframe
              title={`Nivel${level} pdf`}
              src={pdfUrl}
              width="100%"
              height="350vh"
              allow="autoplay"
            ></iframe>
          </div>
          <div className="quiz-options">
            {questao.opcoes.map((opcao, index) => (
              <button
                key={index}
                className="quiz-option"
                id={`q${index}`}
                onClick={() => handleAnswer(opcao)}
              >
                {opcao.text}
              </button>
            ))}
          </div>
          <p className='quiz-attempts'>Tentativas restantes: {attempts}</p>
        </>
      ) : (
        <div className='quiz-results'>
          <h2>Parabéns, atleta!</h2>
          <h3>Resultados</h3>
          <img src={trofeu} alt="Troféu" className="trofeu" />
          <p>Você acertou {userAnswers.filter(a => a.correct).length} de {questions.length} questões!</p>
          <p>Pontuação total: {points}</p>
        </div>
      )}
      <div className='btns'>
        <Link className='btn restart' to={'/'}>Menu principal</Link>
        <button className='btn restart' onClick={resetQuiz}>Reiniciar Quiz</button>
      </div>
    </div>
  );
};

export default NivelQuiz;