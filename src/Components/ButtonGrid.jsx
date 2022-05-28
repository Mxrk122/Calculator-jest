import React from 'react'

import { css } from '@emotion/react'
import ButtonOp from './ButtonOp/ButtonOp'

function ButtonGrid({
  pickNumber, changeOperation, changeResult, reset,
}) {
  const style = css`
display: grid;
grid-template-columns: repeat(4, 100px);
grid-template-rows: repeat(5, 100px);
grid-gap: 10px;
`
  return (
    <div className="button-grid" css={style}>
      <ButtonOp operation="+" column={4} row={1} changeExpression={changeOperation} />
      <ButtonOp operation="-" column={4} row={2} changeExpression={changeOperation} />
      <ButtonOp operation="*" column={4} row={3} changeExpression={changeOperation} />
      <ButtonOp operation="/" column={4} row={4} changeExpression={changeOperation} />
      <ButtonOp operation="%" column={1} row={5} changeExpression={changeOperation} />
      <ButtonOp operation="1" column={1} row={1} changeExpression={pickNumber} />
      <ButtonOp operation="2" column={2} row={1} changeExpression={pickNumber} />
      <ButtonOp operation="3" column={3} row={1} changeExpression={pickNumber} />
      <ButtonOp operation="4" column={1} row={2} changeExpression={pickNumber} />
      <ButtonOp operation="5" column={2} row={2} changeExpression={pickNumber} />
      <ButtonOp operation="6" column={3} row={2} changeExpression={pickNumber} />
      <ButtonOp operation="7" column={1} row={3} changeExpression={pickNumber} />
      <ButtonOp operation="8" column={2} row={3} changeExpression={pickNumber} />
      <ButtonOp operation="9" column={3} row={3} changeExpression={pickNumber} />
      <ButtonOp operation="0" column={2} row={4} changeExpression={pickNumber} />
      <ButtonOp operation="." column={1} row={4} changeExpression={pickNumber} />
      <ButtonOp operation="Del" column={3} row={4} changeExpression={pickNumber} />
      <ButtonOp operation="AC" column={3} row={5} changeExpression={reset} />
      <ButtonOp operation="=" column={4} row={5} changeExpression={changeResult} />
    </div>
  )
}

export default ButtonGrid
