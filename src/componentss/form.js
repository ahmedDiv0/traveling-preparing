import { useState } from 'react'

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  //the new local state

  function handelSubmit(e) {
    e.preventDefault()

    if (!description) return

    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem)

    onAddItems(newItem)

    setDescription('')
    setQuantity(1)
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3> What do you want for your trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}
