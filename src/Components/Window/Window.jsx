import { css } from '@emotion/react'
import React from 'react'

function Window({
  firstNumber, secondNumber, operation, result,
}) {
  const style = css`
background: #CDD7D6;
border: 2px solid #102542;
width: 100%;
height: 100px;
margin-bottom: 10px;
box-shadow: rgb(255, 255, 255) 10px -10px 0px -45px, #102542 2px 5px;
padding: 5px;
padding-right: 0px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: 'Roboto Mono', monospace;

& > p{
  margin: 0px;
  height: 80%;
  width: 100%;
  max-width: 425px;
  overflow: hidden;
  font-size: 35px;
  text-align: center;
  text-overflow: clip;
}
`
  return (
    <div className="window" css={style}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap');
      </style>
      <p css={css`color: #F87060;`}>
        { // Si la operacion es cierta, entonces se muestra toda la expresion
          // Si no es cierta, solo se muestra el priemr numero
        operation ? firstNumber + operation + secondNumber : firstNumber
        }
      </p>
      <p>
        { // En caso de ya estar el resultado, se muestra en pantalla y se mantiene
          // Si no hay. no mostrar nada
      result || ''
      }
      </p>
    </div>
  )
}

export default Window
