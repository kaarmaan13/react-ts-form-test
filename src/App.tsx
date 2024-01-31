import React, { useState } from 'react'
import './App.css'

type ItemID = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemID
  timestamp: number
  text: string
}

// const INITIAL_NOTES: Item[] = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Videojuegos 🎮'
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: 'Películas 🎞️'
//   }
// ]

function App() {

  const [items, setItems] = useState<Item[]>([])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const input = elements.namedItem('item')

    const isInput = input instanceof HTMLInputElement

    if (!isInput || input == null) return

    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: input.value
    }

    setItems(prevItems => {
      return [...prevItems, newItem]
    })

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemID) => () => {
    setItems(prevItems => {
      return prevItems?.filter(currentItem => currentItem.id !== id)
    })
  }

  return (
    <main>
      <h1>React Typescript NOTES</h1>
      <aside>
        <form onSubmit={handleSubmit} aria-label='Añadir elementos a la lista'>
          <label>
            Elemento a introducir:
            <input type="text" required name='item' />
          </label>
          <button>Añadir Nota</button>
        </form>
      </aside>
      <section>
        <h2>NOTAS:</h2>

        {
          items?.length === 0 ? (
            <p>
              <strong>No hay elementos en la lista.</strong>
            </p>
          ) : (
            <ul>
              {
                items?.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.text}
                      <button onClick={createHandleRemoveItem(item.id)} title='Eliminar'>
                        🗑️
                      </button>
                    </li>
                  )
                })
              }
            </ul>
          )
        }

      </section>
    </main>
  )
}

export default App
