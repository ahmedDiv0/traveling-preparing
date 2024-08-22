import { useState } from 'react'
import Logo from './logo'
import Form from './form'
import PackingList from './PackingList'
import Stats from './Stats'
/*
const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Socks', quantity: 12, packed: true },
  { id: 4, description: 'Socks', quantity: 12, packed: true },
  { id: 5, description: 'Socks', quantity: 12, packed: true },
]
*/
export default function App() {
  const [items, setItems] = useState([])

  function handelAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handelDeletItems(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handelToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function handelClearItem() {
    const confirmed = window.confirm(
      'Are you sure that you want to delelt this items'
    )
    if (confirmed) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        items={items}
        onDeletItem={handelDeletItems}
        onToggleItem={handelToggleItems}
        onClearItem={handelClearItem}
      />
      <Stats items={items} />
    </div>
  )
}
