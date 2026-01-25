import { useState } from 'react'

function InputDemo() {
  const [text, setText] = useState('')

  function handleChange(event) {
    setText(event.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  )
}

export default InputDemo
