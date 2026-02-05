# Step 10.2: useEffect Hook

In this step, you will learn how to use the **useEffect hook**.

The `useEffect` hook allows you to run code when:
- A component renders
- State or props change
- A component is removed from the screen

---

## What You Will Learn

- What side effects are
- Why `useEffect` is needed
- How to use `useEffect`
- How dependency arrays work

---

## 1. What Is a Side Effect?

A side effect is any action that happens **outside the UI rendering**.

Examples:
- Fetching data
- Updating the document title
- Logging values to the console
- Setting timers

React provides `useEffect` to handle these actions safely.

---

## 2. Using useEffect

### Step 1: Create an Effect Demo Component

Inside `react-app/src/components/`, create a file called `EffectDemo.jsx`.

Paste the following code:

```jsx
import { useEffect, useState } from 'react'

function EffectDemo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Component rendered or count changed')
  }, [count])

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default EffectDemo

```
## 3. Understanding the Logic

```jsx
useEffect(() => {
  console.log('Component rendered or count changed')
}, [count])
```
- The effect runs when the component renders
- It runs again only when `count` changes
- `[count]` is the dependency array

## 4. Dependency Array Explained
Runs on every render

```jsx
useEffect(() => {
  console.log('Runs every render')
})
```

Runs only once (on mount)

```jsx
useEffect(() => {
  console.log('Runs once')
}, [])
```

Runs when specific values change

```jsx
useEffect(() => {
  console.log('Runs when count changes')
}, [count])
```
## 5. Using the Component in App.jsx
### Step 2: Update App.jsx

Open `react-app/src/App.jsx`.

Add the import:

```jsx 
import EffectDemo from './components/EffectDemo'
```

Add the component near the bottom:

```jsx
<EffectDemo />
```
## 6. Common Rules for useEffect

- Always declare dependencies correctly
- Avoid infinite loops
- Effects run after render
- Clean up effects when needed

## 7. Next Steps

In the next step, you will learn how to share data between components using context.

➡️ **Next Step:**  
Go to **useContext (Step 10.3)**  
[useContext Hook](../10.3-useContext/README.md)

⬅️ **Back to useState (Step 10.1)**  
Go to **useState (Step 10.1)**  
[useState Hook](../10.1-useState/README.md)

⬅️ **Back to Hooks Overview:**  
Go to **Step 10 - Hooks**  
[Step 10 - Hooks Overview](../10-hooks/README.md)

⬅️ **Back to Main Guide:**  
[Main README](../README.md)

