import Message from './components/Message'
import User from './components/User'
import Counter from './components/Counter'
import ClickDemo from './components/ClickDemo'
import InputDemo from './components/InputDemo'

function App() {
  return (
    <div>
      <h1>React Fundamentals</h1>

      <Message />

      <User name="Navodya" age={22} />
      <User name="Alex" age={25} />

      <Counter />

      <ClickDemo />
      <InputDemo />
      
    </div>
  )
}

export default App
