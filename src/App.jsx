import React, { useEffect, useState } from 'react'
import './Styles/app.css'
import ButtonGrid from './Components/ButtonGrid'
import Window from './Components/Window/Window'

function App() {
  const [firstNumber, setFirstN] = useState('')
  const [secondNumber, setSecondN] = useState('')
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')

  const changeFN = (char) => {
    if (result !== 'Error') {
      console.log(result)
      console.log(firstNumber)
      // Si se trata de la opcion Del, se debe borrar el caracter
      if (char === 'Del') {
        setFirstN((preValue) => preValue.slice(0, -1))
      } else if (firstNumber.length < 9) {
        setFirstN((preValue) => preValue + char)
      }
    }
  }

  const changeSN = (char) => {
    if (result !== 'Error') {
      if (char === 'Del') {
        setSecondN((preValue) => preValue.slice(0, -1))
      } else if (secondNumber.length < 9) {
        setSecondN((preValue) => preValue + char)
      }
    }
  }

  const pickNumber = (char) => {
    // Si ya se escogio una operacion, quiere decir que el usuario esta
    // defininedo el segundo numero
    operation ? changeSN(char) : changeFN(char)
    console.log(operation ? 'eligiendo numero 2' : `eliginedo numero 1 ${firstNumber}`)
  }

  const changeOperation = (char) => {
    if (result !== 'Error') {
      setOperation(char)
    }
  }

  const changeResult = () => {
    switch (operation) {
      case '+':
        setResult(Number(firstNumber) + Number(secondNumber))
        break
      case '-':
        setResult(Number(firstNumber) - Number(secondNumber))
        break
      case '/':
        setResult(Number(firstNumber) / Number(secondNumber))
        break
      case '*':
        setResult(Number(firstNumber) * Number(secondNumber))
        break
      case '%':
        const resultado = Number(JSON.stringify(Number(firstNumber) % Number(secondNumber)))
        setResult(resultado)
        break
      default:
        setResult('Error')
        break
    }
  }

  useEffect(() => {
    // Si el rsultado es mayor a 9999999 directamente tirar error
    if (result > 999999999) {
      setResult('Error')
      // Si es menor, verificar que su longiotud de caracteres sea correcta
      // Si es menor a 0 debe devolver error
    } else if (result <= -1) {
      setResult('Error')
    } else if (JSON.stringify(result).length > 9) {
      const converted = JSON.stringify(result).slice(0, 9)
      setResult(Number(converted))
      setOperation('')
      setFirstN(JSON.stringify(result))
      setSecondN('')
    } else {
      // Si el resultado es un valor valido, el resultado pasa a ser el primer numero
      // La operacion se reinicia y el segundo numero tambien
      // Esto permite la consecuencia de la calculadora
      setOperation('')
      setFirstN(result)
      setSecondN('')
    }
  }, [result])

  useEffect(() => {
    if (result === 'Error') {
      // Si el valor ya viene malo, dejarlo como está
      setFirstN('')
    }
  }, [firstNumber])

  const reset = () => {
    // Resetear indica volver nulas todas las operaciones
    setFirstN('')
    setSecondN('')
    setResult('')
    setOperation('')
  }

  return (
    <div className="App">
      <Window
        operation={operation}
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        result={result}
      />
      <ButtonGrid
        pickNumber={pickNumber}
        changeOperation={changeOperation}
        changeResult={changeResult}
        reset={reset}
      />
    </div>
  )
}

export default App
