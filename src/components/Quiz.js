import React from 'react'
import '../styles/Quiz.css'
import { Link } from 'react-router-dom'


export default function Quiz() {
  return (
    <div className='container'>
      <h1 className='title'>Escolha o nível:</h1>
      <div className='levels'>
        <Link className='btn one' to={'nivel1'}>1</Link>
        <Link className='btn two' to={'nivel2'}>2</Link>
        <Link className='btn three' to={'nivel3'}>3</Link>
        <Link className='btn four' to={'nivel4'}>4</Link>
        <Link className='btn five' to={'nivel5'}>5</Link>
      </div>
    </div>
  )
}
