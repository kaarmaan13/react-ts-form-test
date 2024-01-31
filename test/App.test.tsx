import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from '../src/App'

describe('<App />', () => {
  // test('should work', () => {
  //   render(<App />)

  //   expect(
  //     screen.getByText('React Typescript NOTES')
  //   ).toBeDefined()
  // })

  // END TO END 
  test('Should add items and remove them', async () => {
    const user = userEvent.setup()

    render(<App />)

    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    const form = screen.getByRole('form')
    expect(form).toBeDefined()
    
    const button = form.querySelector('button')
    expect(button).toBeDefined()
    
    const ramdomText = crypto.randomUUID()
    await user.type(input, ramdomText)
    await user.click(button!)
    
    const list = screen.getByRole('list')
    expect(list).toBeDefined()
    
    screen.debug()
    expect(list.childNodes.length).toBe(1)
    
    const item = screen.getByText(ramdomText)
    const removeButton = item.querySelector('button')
    expect(removeButton).toBeDefined()
    
    await user.click(removeButton!)
    
    screen.debug()
    const noResults = screen.getByText('No hay elementos en la lista.')
    expect(noResults).toBeDefined()
  })
})