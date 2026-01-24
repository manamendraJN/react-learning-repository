# Step 3: Components Module

In this step, you will learn about **components**, which are the **building blocks of React**.

A component is a **function** that returns a part of your UI.  
Instead of writing all your UI in one file, components let you **split your app into reusable pieces**. This makes your code easier to read, maintain, and reuse.

---

## What You Will Learn

- What a functional component is
- How to create reusable components
- How to import and use components in your app
- Why components are important for organizing React projects

---

## Creating Components

### 1. Functional Component

A functional component is **just a JavaScript function** that returns JSX.  

**Steps to create your first functional component:**

1. Inside `react-app/src/components/`, create a file called `Message.jsx`
2. Copy this code into `Message.jsx`:

```jsx
function Message() {
  return (
    <div>
      <h2>This is a functional component!</h2>
      <p>Functional components are just JavaScript functions that return JSX.</p>
    </div>
  )
}

export default Message
```
3. Open react-app/src/App.jsx and replace its content with:

```jsx
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div>
      <h1>React Fundamentals</h1>
      <Hello />
      <Message />
    </div>
  )
}

export default App
```
4. Save the file and refresh your browser. You should see:

- Hello React Basics (from Hello.jsx)

- This is a functional component! (from Message.jsx)

Components can be used multiple times without rewriting the code.

Example:
```jsx
function App() {
  return (
    <div>
      <h1>React Fundamentals</h1>
      <Message />
      <Message />
      <Message />
    </div>
  )
}
```
All three <Message /> instances display the same content, demonstrating reusability.
