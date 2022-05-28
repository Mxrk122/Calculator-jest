import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event' // Eventos como dar click y otras cosas de usuario
import Window from './Window'
import App from '../../App'
import 'regenerator-runtime/runtime' // Async y await

describe('Given a prop ', () => {
  it('-> renders the prop', () => {
    render(<Window firstNumber="character" />)

    // Esta constante representa nuestro componente
    const element = screen.getByText('character')
    expect(element).toBeInTheDocument()
  })
})

describe('When the user clicks a button ', () => {
  it('-> renders the button content', async () => {
    render(<App />)

    // Llamar a la pantalla y boton
    const buttonForOne = screen.getByText('7')
    expect(buttonForOne).toBeInTheDocument()

    // Presionar el boton 2 veces
    userEvent.dblClick(buttonForOne)

    const window = await screen.findByText('77')
    expect(window).toBeInTheDocument()
  })
})

describe('When the user inserts a expression ', () => {
  it('-> return the result of the expression, and saves the result in the first', async () => {
    render(<App />)

    // Llamar a los botones
    const buttonForOne = screen.getByText('7')
    expect(buttonForOne).toBeInTheDocument()

    const buttonForTwo = screen.getByText('9')
    expect(buttonForTwo).toBeInTheDocument()

    const buttonOperation = screen.getByText('+')
    expect(buttonOperation).toBeInTheDocument()

    const buttonResult = screen.getByText('=')
    expect(buttonResult).toBeInTheDocument()

    // Presionar los botones para la expresion en orden correcto
    userEvent.click(buttonForOne)

    userEvent.click(buttonOperation)

    userEvent.click(buttonForTwo)

    userEvent.click(buttonResult)

    // Find all by text dfebido a que aparecen 2 textos con el mismo valor
    const window = await screen.findAllByText('16')
    expect(window.href).toContain('16')
  })
})

describe('if the user doesn`t insert a operation', () => {
  it('-> throws error', async () => {
    render(<App />)

    // The user is goin to insert 79, then, push =

    // Llamar a los botones
    const buttonForOne = screen.getByText('7')
    expect(buttonForOne).toBeInTheDocument()

    const buttonForTwo = screen.getByText('9')
    expect(buttonForTwo).toBeInTheDocument()

    const buttonResult = screen.getByText('=')
    expect(buttonResult).toBeInTheDocument()

    // Presionar los botones para la expresion en orden correcto
    userEvent.click(buttonForOne)

    userEvent.click(buttonForTwo)

    userEvent.click(buttonResult)

    // Encontrar el resultado
    const window = await screen.findByText('Error')
    expect(window).toBeInTheDocument()
  })
})

describe('When the result is bigger than 999999999 ', () => {
  it('-> throws Error', async () => {
    render(<App />)

    // Llamar a los botones
    const buttonForOne = screen.getByText('9')
    expect(buttonForOne).toBeInTheDocument()

    const buttonForTwo = screen.getByText('9')
    expect(buttonForTwo).toBeInTheDocument()

    const buttonOperation = screen.getByText('+')
    expect(buttonOperation).toBeInTheDocument()

    const buttonResult = screen.getByText('=')
    expect(buttonResult).toBeInTheDocument()

    // Presionar los botones para la expresion en orden correcto
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)

    userEvent.click(buttonOperation)

    userEvent.click(buttonForTwo)

    userEvent.click(buttonResult)

    const window = await screen.findByText('Error')
    expect(window).toBeInTheDocument()
  })
})

describe('When the result`s length is bigger than 9', () => {
  it('-> the result gots slice to length 9', async () => {
    render(<App />)

    // Llamar a los botones
    const buttonForOne = screen.getByText('2')
    expect(buttonForOne).toBeInTheDocument()

    const buttonForTwo = screen.getByText('2')
    expect(buttonForTwo).toBeInTheDocument()

    const buttonForThree = screen.getByText('7')
    expect(buttonForTwo).toBeInTheDocument()

    const buttonOperation = screen.getByText('/')
    expect(buttonOperation).toBeInTheDocument()

    const buttonResult = screen.getByText('=')
    expect(buttonResult).toBeInTheDocument()

    // Presionar los botones para la expresion en orden correcto
    userEvent.click(buttonForOne)

    userEvent.click(buttonForTwo)

    userEvent.click(buttonOperation)

    userEvent.click(buttonForThree)

    userEvent.click(buttonResult)

    // Find all by text debido a que hay 2 textos con el mismo numero
    const window = await screen.findAllByText('3.1428571')
    // Esperamos que contenga el numero
    expect(window).toContain('3.1428571')
  })
})

describe('When the result`s length is lower than 0', () => {
  it('-> Throws error', async () => {
    render(<App />)

    // 7 - 22 = -15

    // Llamar a los botones
    const buttonForOne = screen.getByText('2')
    expect(buttonForOne).toBeInTheDocument()

    const buttonForTwo = screen.getByText('2')
    expect(buttonForTwo).toBeInTheDocument()

    const buttonForThree = screen.getByText('7')
    expect(buttonForTwo).toBeInTheDocument()

    const buttonOperation = screen.getByText('-')
    expect(buttonOperation).toBeInTheDocument()

    const buttonResult = screen.getByText('=')
    expect(buttonResult).toBeInTheDocument()

    // Presionar los botones para la expresion en orden correcto
    userEvent.click(buttonForThree)

    userEvent.click(buttonOperation)

    userEvent.click(buttonForOne)

    userEvent.click(buttonForTwo)

    userEvent.click(buttonResult)

    const window = await screen.findByText('Error')
    expect(window).toBeInTheDocument()
  })
})
