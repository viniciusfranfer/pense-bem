import React from 'react';
import NivelQuiz from './NivelQuiz';
import questoes4 from '../database/Data4.json';

const Nivel4 = () => (
  <NivelQuiz
    level={4}
    questions={questoes4}
    pdfUrl="https://drive.google.com/file/d/1uHtNSHr3dS6bbRHsyTGFewZavmYq08TI/preview"
    headerClass="quiz-header-level4"
  />
);

export default Nivel4;