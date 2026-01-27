# useState Hook

In this step, you will learn how to use the **useState hook** in React.

`useState` allows a component to:
- Store data
- Update data
- Re-render the UI when data changes

---

## What You Will Learn

- What `useState` is
- How to create state
- How to update state
- How state affects rendering

---

## 1. Why useState Is Needed

In real applications:
- Values change over time
- Buttons update numbers
- Inputs store text
- UI reacts to user actions

`useState` allows React to track these changes.

---

## 2. Creating State Using useState

### Step 1: Create a Counter Component

Inside `react-app/src/components/`, create a file called `UseStateCounter.jsx`.

Paste the following code:

```jsx
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

```
## 3. Understanding useState Syntax

```jsx
const [count, setCount] = useState(0)
```

- `count` → current state value
- `setCount` → function to update the state
- `0` → initial value

When `setCount` is called:

- State updates
- Component re-renders

## 4. Using useState with Input Fields
### Step 2: Create an Input State Component

Inside `react-app/src/components/`, create a file called `UseStateInput.jsx`.

```jsx
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
```
## 5. Using useState Components in App.jsx
### Step 3: Update App.jsx

Open `react-app/src/App.jsx`.

Add the imports:

```jsx
import UseStateCounter from './components/UseStateCounter'
import UseStateInput from './components/UseStateInput'
```
Inside JSX (near the bottom):

```jsx
<UseStateCounter />
<UseStateInput />
```
Final `App.jsx` (for reference):

```jsx
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

      <ToggleMessage />
      <StatusMessage isLoggedIn={false} />
      <HiddenMessage isVisible={true} />

      <NameList />
      <UserList />

      <SimpleForm />
      <SubmitForm />

      <UseStateCounter />
      <UseStateInput />
    </div>
  )
}

export default App
```
### 6. Common Mistakes to Avoid

- Updating state directly (`count++`)
- Forgetting to use the setter function
- Calling hooks inside conditions or loops

7. Next Steps

Next, you will learn how to run side effects using another hook.

➡️ **Next Step:**  
Go to **useEffect (Step 10.2)**  
[useEffect Hook](10-hooks/10.2-useEffect/README.md)

⬅️ **Back to Setup:**  
Go to **Step 10 - Hooks**  
[Step 10 - Hooks ](../10-hooks/README.md)

⬅️ **Back to Main Guide:**  
[Main README](../README.md)

