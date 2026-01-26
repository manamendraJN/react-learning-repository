import { useState } from 'react'

function UseStateInput() {
  const [text, setText] = useState('')

  return (
    <div>
      <h3>useState Input</h3>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <p>You typed: {text}</p>
    </div>
  )
}

export default UseStateInput
