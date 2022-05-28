import { square } from './Operations'

describe('Given a number', () => {
  it('Returns its squared', () => {
    expect(square(3)).toBe(9)
  })
})

describe('Given a string that contains a number', () => {
  it('Returns its squared', () => {
    expect(square('3')).toBe(9)
  })
})
