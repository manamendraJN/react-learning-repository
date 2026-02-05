import Message from './components/Message'
import User from './components/User'
import Counter from './components/Counter'
import ClickDemo from './components/ClickDemo'
import InputDemo from './components/InputDemo'
import ToggleMessage from './components/ToggleMessage'
import StatusMessage from './components/StatusMessage'
import HiddenMessage from './components/HiddenMessage'
import NameList from './components/NameList'
import UserList from './components/UserList'
import SimpleForm from './components/SimpleForm'
import SubmitForm from './components/SubmitForm'
import UseStateCounter from './components/UseStateCounter'
import UseStateInput from './components/UseStateInput'
import EffectDemo from './components/EffectDemo'
import UserContext from './context/UserContext'
import ContextUser from './components/ContextUser'


function App() {
  return (
  <UserContext.Provider value={{ name: 'Navodya', role: 'Student' }}>
    <div>
      <h1>React Fundamentals</h1>

      <Message />

      <User name="Navodya" age={22} />
      <User name="Alex" age={25} />

      <Counter />

      <ClickDemo />
      <InputDemo />

      <ToggleMessage />
      <StatusMessage isLoggedIn={false} />
      <HiddenMessage isVisible={true} />

      <NameList />
      <UserList />

      <SimpleForm />
      <SubmitForm />

      <UseStateCounter />
      <UseStateInput />

      <EffectDemo />

      <ContextUser />

    </div>
      
  </UserContext.Provider>
  )
}

export default App
