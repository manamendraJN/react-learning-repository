import { useState } from 'react'

function UseStateCounter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>useState Counter</h3>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default UseStateCounter