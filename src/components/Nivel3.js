import React from 'react';
import NivelQuiz from './NivelQuiz';
import questoes3 from '../database/Data3.json';

const Nivel3 = () => (
  <NivelQuiz
    level={3}
    questions={questoes3}
    pdfUrl="https://drive.google.com/file/d/1V8PXQ-yfYxlWcA0nDK7DfZy6cnomx6hN/preview"
    headerClass="quiz-header-level3"
  />
);

export default Nivel3;