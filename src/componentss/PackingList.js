import { useState } from 'react'
import Item from './Item'

export default function PackingList({
  items,
  onDeletItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortBy, setSortBy] = useState('input')
  //const [clear, setClear] = useState('')
  let sortedBy

  if (sortBy === 'input') sortedBy = items

  if (sortBy === 'description')
    sortedBy = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === 'packed')
    sortedBy = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className="list">
      <ul>
        {sortedBy.map((item) => (
          <Item
            item={item}
            onDeletItem={onDeletItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={'input'}>sort by input</option>
          <option value={'description'}>sort by description</option>
          <option value={'packed'}>sort by packed stats</option>
        </select>
        <button onClick={onClearItem}>clear List </button>
      </div>
    </div>
  )
}
