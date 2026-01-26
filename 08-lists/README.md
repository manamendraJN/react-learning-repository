# Step 8: Rendering Lists and Keys

In this step, you will learn how to **render lists of data** in React.

Most real applications display data as lists:
- User lists
- Product lists
- Messages
- Notifications

React uses JavaScript’s `.map()` function to render lists.

---

## What You Will Learn

- How to render lists using `.map()`
- Why keys are required in React
- How to avoid common list rendering issues

---

## 1. Why Lists Are Needed

In real applications:
- Data often comes as arrays
- Writing JSX manually for each item is not practical
- React allows looping using `.map()`

---

## 2. Rendering a Simple List

### Step 1: Create a List Component

Inside `react-app/src/components/`, create a file called `NameList.jsx`.

Paste the following code:

```jsx
function NameList() {
  const names = ['Navodya', 'Alex', 'Sam']

  return (
    <div>
      <h3>Name List</h3>
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default NameList
```
## 3. Understanding .map() and key

```jsx
names.map(name => (
  <li key={name}>{name}</li>
))
```

- `.map()` loops through the array
- Each item returns JSX
- `key` helps React identify each list item
- Keys must be unique

## 4. Rendering a List of Objects
### Step 2: Create a User List Component

Inside `react-app/src/components/`, create a file called `UserList.jsx`.

```jsx
function UserList() {
  const users = [
    { id: 1, name: 'Navodya', age: 22 },
    { id: 2, name: 'Alex', age: 25 },
    { id: 3, name: 'Sam', age: 20 }
  ]

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
```
## 5. Using List Components in App.jsx
### Step 3: Update App.jsx

Open `react-app/src/App.jsx`.

Add the imports:

```jsx
import NameList from './components/NameList'
import UserList from './components/UserList'
```
Inside JSX (near the bottom):

```jsx
<NameList />
<UserList />
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
    </div>
  )
}

export default App
```
## 6. Common Mistakes to Avoid

- Forgetting the key prop
- Using array index as key
- Returning JSX without wrapping elements

## 7. Next Steps

In the next step, you will learn how to handle forms and user input in React.

➡️ **Next Step:**  
Go to ****  
[Step 09 - Forms](../09-forms/README.md)

⬅️ **Back to Setup:**  
Go to **Step 07 - Conditional Rendering**  
[Step 07 - Conditional Rendering](../07-conditional-rendering/README.md)

⬅️ **Back to Main Guide:**  
[Main README](../README.md)