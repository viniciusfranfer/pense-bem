import React from 'react';
import NivelQuiz from './NivelQuiz';
import questoes5 from '../database/Data5.json';

const Nivel5 = () => (
  <NivelQuiz
    level={5}
    questions={questoes5}
    pdfUrl="https://drive.google.com/file/d/1OkqsGZcMeGjbphdrBbHsbxNva6iEwYm3/preview"
    headerClass="quiz-header-level5"
  />
);

export default Nivel5;