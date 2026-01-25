# Step 3: Components & JSX

In this step, you will learn the **core building blocks of React**:
- Components
- JSX

You will modify the React app you created in Step 2.

---

## What Is a Component?

A component is a **reusable piece of UI**.
React applications are built by combining many components.

Examples:
- Header
- Button
- Footer
- Profile card

Each component is a JavaScript function.

---

## Open the Project in VS Code

1. Open VS Code
2. Open the folder `react-app`
3. Go to the `src` folder

---

## Understanding JSX

JSX looks like HTML, but it is written inside JavaScript.

Example:

```js
function App() {
  return <h1>Hello React</h1>;
}
```

JSX makes React code easier to read and write.

## Creating Your First Component

Inside the src folder, create a new folder called `components`

Inside that `components`, create a file called `Message.jsx`

Copy this code into `Message.jsx`:

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
Open `react-app/src/App.jsx` and replace its content with:

```jsx
import Message from './components/Message'

function App() {
  return (
    <div>
      <h1>React Fundamentals</h1>
      <Message />
    </div>
  )
}

export default App
```
Save the file and refresh your browser. You should see:

- React Fundamentals

- This is a functional component! (from Message.jsx)

- Functional components are just JavaScript functions that return JSX. (from Message.jsx)

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

➡️ **Next Step:**  
Go to **Step 4 – Props**  
[Step 3 – props](../04-props/README.md)

⬅️ **Back to Setup:**  
Go to **Step 2 – React Basics & App Creation**  
[Step 2 – React Basics & App Creation](../02-react-basics/README.md)

⬅️ **Back to Main Guide:**  
[Main README](../README.md)




