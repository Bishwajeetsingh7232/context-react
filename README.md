# React Context API – Props Drilling & useContext Explanation

---

## What is Props Drilling?

Props drilling happens when data is passed from a parent component to deeply nested child components through intermediate components even though those components do not use that data themselves.

This causes:
- Unnecessary prop passing
- Messy component structure
- Reduced readability
- Difficult maintenance

---

## Example of Props Drilling

```jsx
function App() {
  const userName = "Bishwajeet";

  return <Parent userName={userName} />;
}

function Parent({ userName }) {
  return <Child userName={userName} />;
}

function Child({ userName }) {
  return <FinalChild userName={userName} />;
}

function FinalChild({ userName }) {
  return <h3>Welcome, {userName}</h3>;
}
```

Only FinalChild uses the prop, but it is passed through Parent and Child unnecessarily.

---

## Solution: Context API and useContext

Instead of passing props through every component, React Context API allows data to be stored centrally and accessed directly.

---

## Example Without Props Drilling Using Context

```jsx
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Bishwajeet">
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <FinalChild />;
}

function FinalChild() {
  const userName = useContext(UserContext);
  return <h3>Welcome, {userName}</h3>;
}
```

Now no unnecessary props are passed.

---

## How useContext Solves Props Drilling

useContext allows components to read global state directly from Context. There is no need to pass props across components which do not need that data.

Advantages:
- Cleaner code
- Central state management
- Easy scalability
- Automatic UI updates

---

## Conclusion

Context API and useContext eliminate props drilling and improve maintainability of applications by sharing state globally across components.

---
