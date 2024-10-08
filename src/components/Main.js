import React from 'react';
// import { Link } from 'react-router-dom';
import tochaEsquerda from '../assets/img/tocha-esquerda.png';
import tochaDireita from '../assets/img/tocha-direita.png';
import arcos from '../assets/img/arcos.png';
import '../styles/Main.css';
import Modal from './Modal';

 const Main = () => {
  return (
    <div className='container'>
        <h1 className='title '>OLIMPÍADAS</h1>
        <div className='logos'>
            <img className='tocha' src={tochaEsquerda} alt="Tocha Olímpica"></img>
            <img className='arco' src={arcos} alt="Arcos Olímpicos"></img> 
            <img className='tocha' src={tochaDireita} alt="Tocha Olímpica"></img>
        </div>
        <h2 className='subtitle'>PENSE BEM</h2>
        <div className='start'>
            <Modal />
        </div>
    </div>
  )
}

export default Main;
export let valor;
