# Step 5: State (useState)

In this step, you will learn about **state**, which allows a component to **remember and update data**.

State is used when data **changes over time**, such as counters, form inputs, or toggles.

---

## What You Will Learn

- What state is
- Why state is needed
- How to use the `useState` hook
- How state updates trigger re-renders

---

## 1. What Is State?

State is **data that belongs to a component**.

Unlike props:
- Props are passed into a component
- State is managed **inside** a component

When state changes, React **re-renders** the component.

---

## 2. Creating a Component with State

### Step 1: Create a Counter Component

Inside `react-app/src/components/`, create a file called `Counter.jsx`.

Paste the following code:

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  )
}

export default Counter

```
## 3. Using the Counter in App.jsx

### Step 2: Update App.jsx

Open `react-app/src/App.jsx` and replace its content with:

```jsx
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

```

## 4. Understanding useState
```jsx
const [count, setCount] = useState(0)
```
- count is the current state value
- setCount updates the state
- 0 is the initial value

When `setCount` is called:

- State updates
- Component re-renders
- UI updates automatically

## 5. Important Rules About State

- Never modify state directly
- Always use the setter function
- State updates cause re-renders
- Each component manages its own state

➡️ **Next Step:**  
Go to **Step 6 - Events**  
[Step 6 - Events](../06-events/README.md)

⬅️ **Back to Setup:**  
Go to **Step 4 - Props**   
[Step 4 – props](../04-props/README.md)

⬅️ **Back to Main Guide:**  
[Main README](../README.md)

