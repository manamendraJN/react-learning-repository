# Step 4: Props

In this step, you will learn about **Props**, which allow components to receive data.

Props (short for "properties") are how **data is passed from one component to another**.
Without props, all components would show the same static content.

---

## What You Will Learn

- What props are
- How to pass data to a component
- How to receive props inside a component
- Why props make components reusable

---

## 1. Understanding Props

A component can receive values from its parent component.
These values are called **props**.

Think of props like function parameters.

---

## 2. Creating a Component That Uses Props

### Step 1: Create a New Component

Inside `react-app/src/components/`, create a file called `User.jsx`.

Paste the following code:

```jsx
function User(props) {
  return (
    <div>
      <h3>User Name: {props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default User

```
This component expects two props:

- name
- age

## 3. Passing Props from App.jsx
### Step 2: Update App.jsx

Open `react-app/src/App.jsx` and replace its content with:

```jsx
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
```

## 4. What Is Happening Here?

- name and age are passed from App to User
- Each <User /> component receives different values
- The same component displays different data
- This makes the component reusable

## 5. Important Rules About Props

- Props are read-only
- A component cannot change its own props
- Props flow from parent to child
- Props make components dynamic

## 6. Next Steps

In the next step, you will learn about State, which allows components to manage their own data.

➡️ **Next Step:**  
Go to **Step 5 – State**  
[Step 5 – State](../05-state/README.md)

⬅️ **Back to Setup:**  
Go to **Step 4 – Props**   
[Step 3 – props](../04-props/README.md)

⬅️ **Back to Main Guide:**  
[Main README](../README.md)
