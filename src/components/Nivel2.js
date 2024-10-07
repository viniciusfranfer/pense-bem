import React from 'react';
import NivelQuiz from './NivelQuiz';
import questoes2 from '../database/Data2.json';

const Nivel2 = () => (
  <NivelQuiz
    level={2}
    questions={questoes2}
    pdfUrl="https://drive.google.com/file/d/1NeaVA6InfuiNSrXHS8nxHIlmLZg3T6HA/preview"
    headerClass="quiz-header-level2"
  />
);

export default Nivel2;