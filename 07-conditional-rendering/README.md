# Step 7: Conditional Rendering

In this step, you will learn how to **render content conditionally** in React.

Conditional rendering allows you to show or hide parts of the UI based on:
- State values
- Conditions (true / false)
- User actions

---

## What You Will Learn

- What conditional rendering is
- Using `if` conditions
- Using the logical AND (`&&`) operator
- Using the ternary operator

---

## 1. Why Conditional Rendering Is Needed

In real applications:
- Show “Login” or “Logout”
- Show loading indicators
- Show error messages
- Show content only when data exists

React allows conditional rendering using **JavaScript expressions**.

---

## 2. Conditional Rendering Using State

### Step 1: Create a Toggle Component

Inside `react-app/src/components/`, create a file called `ToggleMessage.jsx`.

Paste the following code:

```jsx
import { useState } from 'react'

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>

      {isVisible && <p>This message is conditionally rendered.</p>}
    </div>
  )
}

export default ToggleMessage
```
## 3. Understanding the Logic

```jsx 
{isVisible && <p>...</p>}
```
- If `isVisible` is `true`, the paragraph is rendered
- If `isVisible` is `false`, nothing is rendered
- This uses the **logical AND (&&) operator**
- Commonly used when you only need a true condition

## 4. Conditional Rendering Using Ternary Operator

Sometimes you need two outputs, one for `true` and one for `false`.

### Step 2: Create a Status Component

Inside `react-app/src/components/`, create a file called `StatusMessage.jsx`.

```jsx 
function StatusMessage({ isLoggedIn }) {
  return (
    <p>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</p>
  )
}

export default StatusMessage
```
This uses the ternary operator:

- If isLoggedIn is true → shows “Welcome back!”
- If false → shows “Please log in”

## 5. Conditional Rendering Using if Condition

Sometimes you want to hide the entire component.

### Step 3: Create an if Based Component

Inside `react-app/src/components/`, create a file called `HiddenMessage.jsx`.

```jsx
function HiddenMessage({ isVisible }) {
  if (!isVisible) {
    return null
  }

  return <p>This message is visible</p>
}

export default HiddenMessage
```

- return null means render nothing
- if conditions are written outside JSX

## 6. Using Conditional Components in App.jsx
### Step 4: Update App.jsx

Open `react-app/src/App.jsx`.

Add the imports:

```jsx
import ToggleMessage from './components/ToggleMessage'
import StatusMessage from './components/StatusMessage'
import HiddenMessage from './components/HiddenMessage'
```
Inside JSX (near the bottom):

```jsx
<ToggleMessage />
<StatusMessage isLoggedIn={false} />
<HiddenMessage isVisible={true} />
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
    </div>
  )
}

export default App
```
## 7. Next Steps

In the next step, you will learn how to render lists using .map(),
which is required for dynamic data.

➡️ **Next Step:**  
Go to **Step 8 - Lists**  
[Step 8 - Lists](../08-lists/README.md)

⬅️ **Back to Setup:**  
Go to **Step 6 - Events**   
[Step 6 - Events](../06-events/README.md)

⬅️ **Back to Main Guide:**  
[Main README](../README.md)


