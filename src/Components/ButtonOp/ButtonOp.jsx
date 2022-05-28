import { css } from '@emotion/react'
import React from 'react'

function ButtonOp({
  operation, column, row, changeExpression,
}) {
  const style = css`
background-color:#F87060;
border: 2px solid #102542;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
cursor:pointer;
color: #102542;
padding:12px 16px;
text-decoration:none;
position: relative;
box-shadow: rgb(255, 255, 255) 10px -10px 0px -45px, #102542 5px 5px;

font-family: 'Roboto Mono', monospace;
font-size: 50px;
font-weight: 300;

grid-column: ${column};
grid-row: ${row};

&:active {
position:relative;
top:1px;
}
`
  return (
    <button type="button" className="button-op" css={style} onClick={() => changeExpression(operation)}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap');
      </style>
      <p>{operation}</p>
    </button>
  )
}

export default ButtonOp
