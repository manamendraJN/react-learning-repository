# Step 10.3: useContext Hook

In this step, you will learn how to use the **useContext hook**.

`useContext` allows you to **share data between components** without passing props manually at every level.

---

## What You Will Learn

- What prop drilling is
- Why `useContext` is needed
- How to create context
- How to consume context values

---

## 1. What Is Prop Drilling?

Prop drilling happens when data is passed through many components that do not need it, just to reach a deeply nested component.

This makes code:
- Hard to read
- Hard to maintain
- Error-prone

React solves this problem using **Context**.

---

## 2. Creating a Context

### Step 1: Create a Context File

Inside `react-app/src/`, create a folder called `context`.

Inside `context/`, create a file called `UserContext.jsx`.

Paste the following code:

```jsx
import { createContext } from 'react'

const UserContext = createContext()

export default UserContext
```
## 3. Providing Context Data
### Step 2: Wrap Components with Provider

Open `react-app/src/App.jsx`.

Import the context:

```jsx
import UserContext from './context/UserContext'
```
Wrap the JSX with `UserContext.Provider`:

```jsx
<UserContext.Provider value={{ name: 'Navodya', role: 'Student' }}>
  <div>
    <h1>React Fundamentals</h1>

    <Message />
    <User name="Alex" age={25} />

    <Counter />
    <ClickDemo />
    <InputDemo />
    <ToggleMessage />
  </div>
</UserContext.Provider>
```
## 4. Consuming Context Data
### Step 3: Create a Consumer Component

Inside `react-app/src/components/`, create a file called `ContextUser.jsx`.

Paste the following code:

```jsx
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function ContextUser() {
  const user = useContext(UserContext)

  return (
    <div>
      <h2>Context User</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  )
}

export default ContextUser
```

### 5. Using the Component in App.jsx

Add the import:

```jsx
import ContextUser from './components/ContextUser'
```
Add the component inside the Provider:

```jsx
<ContextUser />
```

## 6. Understanding the Flow

- Context is created using createContext
- Data is provided using Provider
- Any child component can access the data using useContext
- No props are passed manually

## 7. Next Steps

In the next step, you will learn how to access DOM elements directly using another hook.

➡️ **Next Step:**  
Go to ****  
[](.//README.md)

⬅️ **Back to useEffect (Step 10.2):**  
Go to **useEffect (Step 10.2)**  
[useEffect Hook](../10.2-useEffect/README.md)

⬅️ **Back to Hooks Overview:**  
Go to **Step 10 - Hooks**  
[Step 10 - Hooks Overview](../README.md)
