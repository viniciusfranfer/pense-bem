import React, { useState } from "react";
import '../styles/Modal.css';
import { Link } from 'react-router-dom';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Jogar
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Atenção, atleta!!!</h2>
            <p>
              Você terá apenas 3 chances para responder cada pergunta.
            </p>
            <p>
                * Para cada pergunta, o usuário terá 3 tentativas
                de resposta.<br></br>
                * Caso acerte na 1ª tentativa, o usuário ganhará
                3 pontos.<br></br>
                * Caso acerte na 2ª tentativa, o usuário ganhará
                2 pontos.<br></br>
                * Caso acerte na 3ª tentativa, o usuário ganhará
                1 pontos.<br></br>
                * Caso não acerte em nenhuma das 3 tentativas,
                o usuário não ganhará pontos.
            </p>
            <Link className='btn' to={'quiz'}>Jogar</Link>
          </div>
        </div>
      )}
    </>
  );
}