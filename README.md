# Login Form

A React application featuring a toggle-based Login and Sign Up form UI.

---

## What This App Does

This is a simple **authentication UI** built with React. It displays a centered card on the screen with two tabs — **Login** and **SignUp** — that the user can switch between. The app does not connect to a backend; it is a front-end UI demonstration.

### Login Form
When the **Login** tab is active, the user sees:
- An **Email** input field
- A **Password** input field
- A **Forgot Password** link
- A **Login** button
- A prompt saying *"Not a Member? Signup Now"* — clicking it switches to the SignUp form

### SignUp Form
When the **SignUp** tab is active, the user sees:
- An **Email** input field
- A **Password** input field
- A **Confirm Password** input field
- A **Signup** button

---

## How It Works

### State Management
The component uses a single piece of React state:

```js
const [isLogin, setIsLogin] = useState(true);
```

- `isLogin = true` → Login form is shown
- `isLogin = false` → SignUp form is shown

Clicking the toggle buttons or the "Signup Now" link updates this state, and React re-renders the correct form.

### Component Structure

```
App.js
 └── LoginForm.js      ← all form logic lives here
```

- **`App.js`** is the root component. It simply renders `<LoginForm />`.
- **`LoginForm.js`** contains the toggle buttons and both forms, rendered conditionally using a ternary (`isLogin ? <LoginForm> : <SignUpForm>`).


## Project Structure

```
src/
├── App.js            # Root component — renders LoginForm
├── App.css           # All styles for the app
├── LoginForm.js      # Login/SignUp toggle component (main logic)
└── index.js          # Entry point — mounts App into the DOM
```



---

## Built With

- [React](https://reactjs.org/) v19
- [Create React App](https://create-react-app.dev/)
