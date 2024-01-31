import { type ItemID } from "../App";

export function Item (
    { id, text, handleRemove} :
    { id: ItemID, text: string, handleRemove: () => void }
  ) {
  return (
    <li key={id}>
      {text}
      <button onClick={handleRemove} title='Eliminar'>
        🗑️
      </button>
    </li>
  )
}