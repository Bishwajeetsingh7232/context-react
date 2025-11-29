import { useState, useContext } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { ThemeContext } from "../context/ThemeContext";

function LoginForm() {
  const { login } = useAuthContext();
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const isDark = theme === "dark";

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email) return;
    login(name, email);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        backgroundColor: isDark ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.95)",
        borderColor: isDark ? "#1e293b" : "#e2e8f0",
        color: isDark ? "#e2e8f0" : "#0f172a",
      }}
      className="rounded-2xl p-5 shadow-lg transition-all border space-y-4"
    >
      <h3 style={{ color: "#0284c7" }} className="text-xl font-semibold">
        Login
      </h3>

      <div className="space-y-1">
        <label style={{ color: isDark ? "#cbd5e1" : "#475569" }} className="block text-sm">Name</label>
        <input
          type="text"
          style={{
            backgroundColor: isDark ? "#0f172a" : "#f8fafc",
            borderColor: isDark ? "#334155" : "#cbd5e1",
            color: isDark ? "#e2e8f0" : "#0f172a",
          }}
          className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label style={{ color: isDark ? "#cbd5e1" : "#475569" }} className="block text-sm">Email</label>
        <input
          type="email"
          style={{
            backgroundColor: isDark ? "#0f172a" : "#f8fafc",
            borderColor: isDark ? "#334155" : "#cbd5e1",
            color: isDark ? "#e2e8f0" : "#0f172a",
          }}
          className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 font-semibold text-sm hover:from-sky-300 hover:to-cyan-200 transition"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
