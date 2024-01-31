import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'

export type ItemID = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
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
  const {items, addItem, removeItem} = useItems()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget
    const input = elements.namedItem('item')

    const isInput = input instanceof HTMLInputElement

    if (!isInput || input == null) return

    addItem(input.value)

    input.value = ''
  }

  const createHandleRemoveItem = (id: ItemID) => () => {
    removeItem(id)
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
                items.map((item) => {
                  return <Item handleRemove={createHandleRemoveItem(item.id)} {...item} />
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
