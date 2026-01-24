import Hello from './components/Hello'
import Message from './components/Message'
import User from './components/User'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <h1>React Fundamentals</h1>

      <Hello />
      <Message />

      <User name="Navodya" age={22} />
      <User name="Alex" age={25} />

      <Counter />
    </div>
  )
}

export default App
