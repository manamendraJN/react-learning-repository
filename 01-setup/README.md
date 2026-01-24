# Step 1: Setting Up Your Environment

In this step, you will prepare your computer to run React applications.
Do not skip this step, even if you are eager to write code.

React requires a few tools to work properly.
Each tool is explained below in simple terms.

---

## Tool 1: Node.js

Node.js allows your computer to run JavaScript outside the browser.
React uses Node.js to install libraries and run development servers.

Without Node.js, React applications cannot run.

### How to check if Node.js is installed

Open a terminal and run:

    node -v


- If you see a version number, Node.js is installed.
- If you get an error or no version is shown, Node.js is **not installed**.

#### Install Node.js if needed

Download and install the **LTS (Long Term Support) version** from the official website:

[https://nodejs.org](https://nodejs.org)

After installation, restart your terminal and run `node -v` again to confirm it works.

---

## Tool 2: npm (Node Package Manager)

npm comes with Node.js.
It is used to download and manage libraries needed by React.

You can check npm by running:

    npm -v


- If a version number is shown, npm is working correctly.
- If npm is not recognized, reinstall Node.js from [https://nodejs.org](https://nodejs.org)

---

## Tool 3: Code Editor

You need a code editor to write React code.
A code editor helps you read, write, and organize files.

A popular and beginner-friendly editor is:
- **Visual Studio Code (VS Code)**

#### Install VS Code if needed

Download it from the official website:

[https://code.visualstudio.com](https://code.visualstudio.com)

You can use another editor if you prefer, but all examples in this repository assume VS Code.

---

## What You Should Have Before Continuing

Before moving to the next step, make sure:
- Node.js is installed
- npm works in the terminal
- A code editor is installed and ready

In the next step, you will create your first React application.

## Create Your First React Application

Now that your tools are ready, let's create your first React application.

1. Open a terminal in your repository.
2. Run:

        npm create vite@latest react-app

3. Choose React + JavaScript
4. Go into the project folder:

        cd react-app

        npm install

        npm run dev

5. Open `src/App.jsx` and replace the code with:

        ```jsx
        function App() {
        return <h1>Hello React Beginners!</h1>
        }
        export default App
       
---


