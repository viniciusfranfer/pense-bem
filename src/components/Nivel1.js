import React from 'react';
import NivelQuiz from './NivelQuiz';
import questoes1 from '../database/Data1.json';

const Nivel1 = () => (
  <NivelQuiz
    level={1}
    questions={questoes1}
    pdfUrl="https://drive.google.com/file/d/1CGGarQBM7ElDe-hGJ4pwJBagLIasjD7Z/preview"
    headerClass="quiz-header-level1"
  />
);

export default Nivel1;