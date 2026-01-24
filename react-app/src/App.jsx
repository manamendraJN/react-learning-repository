import Hello from './components/Hello'
import Message from './components/Message'
import User from './components/User'

function App() {
  return (
    <div>
      <h1>React Fundamentals</h1>

      <Hello />
      <Message />

      <User name="Navodya" age={22} />
      <User name="Alex" age={25} />
      <User name="Maria" age={30} />
    </div>
  )
}

export default App
