import { useState } from 'react'

function SimpleForm() {
  const [name, setName] = useState('')

  return (
    <div>
      <h3>Simple Form</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <p>You entered: {name}</p>
    </div>
  )
}

export default SimpleForm
