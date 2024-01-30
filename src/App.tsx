import React, { useState } from 'react'
import './App.css'

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`
  timestamp: number
  text: string
}

const INITIAL_NOTES: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Videojuegos 🎮'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Películas 🎞️'
  }
]

function App() {

  const [items, setItems] = useState(INITIAL_NOTES)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const input = elements.namedItem('item')

    const isInput = input instanceof HTMLInputElement

    if(!isInput || input == null) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: input.value
    }

    setItems((prevItems: Item[]) => {
      return [...prevItems, newItem]
    })

    input.value = ''
  }

  return (
    <main>
      <h1>React Typescript NOTES</h1>
      <aside>
        <form onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
            <input type="text" required name='item' />
          </label>
          <button>Añadir Nota</button>
        </form>
      </aside>
      <section>
        <h2>NOTAS:</h2>
        <ul>
          {
            items.map((item) => {
              return (
                <li key={item.id}>
                  {item.text}
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  )
}

export default App
