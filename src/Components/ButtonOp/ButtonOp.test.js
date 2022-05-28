import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // Necesario para los test de cosas como -> que se renderice el texto correcto
import userEvent from '@testing-library/user-event' // Eventos como dar click y otras cosas de usuario
import ButtonOp from './ButtonOp'
import App from '../../App'
import 'regenerator-runtime/runtime'// Async Await
// Async y await
it('renders', () => {
  render(<ButtonOp text="Square" />)
})

describe('Given a string -> string is a operator', () => {
  it('Renders the component with the text', () => {
    const character = 'character'
    render(<ButtonOp operation={character} />)

    // Esta constante representa nuestro componente
    const element = screen.getByText(character)
    expect(element).toBeInTheDocument()
  })
})

describe('The user selects the / operand', () => {
  it('-> do the visiion', async () => {
    render(<App />)

    // 7 - 22 = -15

    // Llamar a los botones
    const buttonForOne = screen.getByText('9')
    expect(buttonForOne).toBeInTheDocument()

    const buttonOperation = screen.getByText('-')
    expect(buttonOperation).toBeInTheDocument()

    const buttonForTwo = screen.getByText('3')
    expect(buttonForTwo).toBeInTheDocument()

    const buttonResult = screen.getByText('=')
    expect(buttonResult).toBeInTheDocument()

    // Presionar los botones para la expresion en orden correcto
    userEvent.click(buttonForOne)

    userEvent.click(buttonOperation)

    userEvent.click(buttonForTwo)

    userEvent.click(buttonResult)

    const window = await screen.findByText('3')
    expect(window).toBeInTheDocument()
  })
})

describe('The user selects the .', () => {
  it('-> create a decimal that can`t be longer that 9 characters', async () => {
    render(<App />)

    // 7 - 22 = -15

    // Llamar a los botones
    const buttonForOne = screen.getByText('9')
    expect(buttonForOne).toBeInTheDocument()

    const buttonForTwo = screen.getByText('.')
    expect(buttonForTwo).toBeInTheDocument()

    // Presionar los botones para la expresion en orden correcto
    userEvent.click(buttonForOne)

    userEvent.click(buttonForTwo)

    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)
    userEvent.click(buttonForOne)

    const window = await screen.findByText('9.9999999')
    expect(window).toBeInTheDocument()
  })
})

describe('The user selects the / operand', () => {
  it('-> do the visiion', async () => {
    render(<App />)

    // 7 - 22 = -15

    // Llamar a los botones
    const buttonForOne = screen.getByText('9')
    expect(buttonForOne).toBeInTheDocument()

    const buttonOperation = screen.getByText('-')
    expect(buttonOperation).toBeInTheDocument()

    const buttonForTwo = screen.getByText('3')
    expect(buttonForTwo).toBeInTheDocument()

    const buttonResult = screen.getByText('=')
    expect(buttonResult).toBeInTheDocument()

    // Presionar los botones para la expresion en orden correcto
    userEvent.click(buttonForOne)

    userEvent.click(buttonOperation)

    userEvent.click(buttonForTwo)

    userEvent.click(buttonResult)

    const window = await screen.findByText('3')
    expect(window).toBeInTheDocument()
  })
})
