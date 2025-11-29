import { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PropDrillingExample from "./components/PropDrillingExample";
import UserDetails from "./components/UserDetails";
import UserAddress from "./components/UserAddress";
import UpdateUserName from "./components/UpdateUserName";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import { useAuthContext } from "./hooks/useAuthContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isAuthenticated } = useAuthContext();
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";
  const bgColor = isDark 
    ? "linear-gradient(to bottom right, #0f172a, #0f172a, #0f172a)"
    : "linear-gradient(to bottom right, #ffffff, #f8fafc, #f1f5f9)";
  const textColor = isDark ? "#f1f5f9" : "#1e293b";

  return (
    <div 
      style={{
        background: bgColor,
        color: textColor,
      }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-10 space-y-10">
        <header className="text-center space-y-3">
          <p
            style={{
              backgroundColor: isDark ? "#0f172a" : "#e2e8f0",
              color: isDark ? "#94a3b8" : "#334155",
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs"
          >
            Week 5 • React Context API
          </p>

          <h1 className="text-3xl md:text-4xl font-extrabold text-sky-500">
            React useContext & Props Drilling Assignment
          </h1>

          <p
            style={{
              color: isDark ? "#cbd5e1" : "#64748b",
            }}
            className="max-w-2xl mx-auto text-sm md:text-base"
          >
            Global state management using Context API, <code>useContext</code>,
            API sharing, and a mini login system.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            1. Props Drilling Example
          </h2>
          <PropDrillingExample />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            2. Context API with API Data
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <UserDetails />
            <UserAddress />
          </div>
          <UpdateUserName />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            3. Mini Project: Login using Context
          </h2>
          <div className="max-w-xl mx-auto">
            {isAuthenticated ? <Profile /> : <LoginForm />}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
