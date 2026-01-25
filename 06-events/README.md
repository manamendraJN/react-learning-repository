# Step 6: Events and User Interaction

In this step, you will learn how React handles **user interactions** using events.

Events allow users to interact with your application by clicking buttons, typing in inputs, or triggering other actions.

---

## What You Will Learn

- What events are in React
- How to handle click events
- How to handle input change events
- How events work together with state

---

## 1. What Are Events?

An event is an **action performed by the user**, such as:
- Clicking a button
- Typing into an input
- Submitting a form

React events are written using **camelCase** and are attached directly to JSX elements.

Example:
```jsx
<button onClick={handleClick}>Click</button>
```
## 2. Handling Click Events

### Step 1: Create a Click Event Component

Inside `react-app/src/components/`, create a file called `ClickDemo.jsx`.

Paste the following code:

```jsx
function ClickDemo() {
  function handleClick() {
    alert('Button was clicked!')
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default ClickDemo
```
This component shows how a function is executed when a button is clicked.

## 3. Handling Input Events with State

User input is usually stored using state.

### Step 2: Create an Input Component

Inside `react-app/src/components/`, create a file called `InputDemo.jsx`.

Paste the following code:

```jsx
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
```
What is happening here:

- The input triggers onChange
- The event object contains the input value
- State is updated
- The UI updates automatically

## 4. Using Event Components in App.jsx
### Step 3: Update App.jsx

Open `react-app/src/App.jsx` and replace its content with:

```jsx
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

```

## 5. Important Rules About Events

- Event names use camelCase (onClick, onChange)
- Event handlers must be functions
- Do not call the function directly in JSX
- Events often update state

## 6. Next Steps

In the next step, you will learn about Conditional Rendering, which allows you to show or hide content based on conditions.

➡️ **Next Step:**  
Go to ****  
[](..//README.md)

⬅️ **Back to Setup:**  
Go to **Step 5 - Props**   
[Step 5 – State](../05-state/README.md)

⬅️ **Back to Main Guide:**  
[Main README](../README.md)