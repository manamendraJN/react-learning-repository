import { useState } from 'react'

function SubmitForm() {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Submitted email: ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Form</h3>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default SubmitForm
