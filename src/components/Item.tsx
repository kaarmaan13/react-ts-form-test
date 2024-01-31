export function Item (
    {  text, handleRemove} :
    {  text: string, handleRemove: () => void }
  ) {
  return (
    <li>
      {text}
      <button onClick={handleRemove} title='Eliminar'>
        🗑️
      </button>
    </li>
  )
}