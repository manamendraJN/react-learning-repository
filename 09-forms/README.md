# Step 9: Forms and User Input

In this step, you will learn how to **handle forms and user input** in React.

Forms allow users to:
- Enter text
- Submit data
- Interact with applications

---

## What You Will Learn

- How to handle input fields
- Using `useState` with forms
- Handling form submission
- Preventing page reload

---

## 1. Why Forms Are Needed

In real applications:
- Users submit login details
- Users add data
- Users search content

React controls form inputs using **state**.

---

## 2. Handling a Text Input

### Step 1: Create a Form Component

Inside `react-app/src/components/`, create a file called `SimpleForm.jsx`.

Paste the following code:

```jsx
import { useState } from 'react'

function SimpleForm() {
  const [name, setName] = useState('')

  return (
    <div>
      <h3>Simple Form</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <p>You entered: {name}</p>
    </div>
  )
}

export default SimpleForm
```
### 3. Understanding Controlled Inputs

- The input value comes from React state
- `onChange` updates the state
- React controls the input

## 4. Handling Form Submission
### Step 2: Create a Submit Form Component

Inside `react-app/src/components/`, create a file called `SubmitForm.jsx`.

```jsx
import { useState } from 'react'

function SubmitForm() {
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Submitted email: ${email}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Form</h3>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default SubmitForm
```
## 5. Using Form Components in App.jsx
### Step 3: Update App.jsx

Open `react-app/src/App.jsx`.

Add the imports:

```jsx
import SimpleForm from './components/SimpleForm'
import SubmitForm from './components/SubmitForm'
```

Inside JSX (near the bottom):

```jsx
<SimpleForm />
<SubmitForm />
```

Final App.jsx (for reference):

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
    </div>
  )
}

export default App
```
## 6. Common Mistakes to Avoid

- Forgetting e.preventDefault()
- Not controlling input values with state
- Updating state incorrectly

➡️ **Next Step:**  
Go to ****  
[](..//README.md)

⬅️ **Back to Setup:**  
Go to **Step 8 - Lists**  
[Step 8 - Lists](../08-lists/README.md)

⬅️ **Back to Main Guide:**  
[Main README](../README.md)

