import { useContext } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { ThemeContext } from "../context/ThemeContext";

function Profile() {
  const { user, logout } = useAuthContext();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  if (!user) return null;

  return (
    <div 
      style={{
        backgroundColor: isDark ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.95)",
        borderColor: isDark ? "#1e293b" : "#e2e8f0",
        color: isDark ? "#e2e8f0" : "#0f172a",
      }}
      className="rounded-2xl p-5 shadow-lg transition-all border space-y-3"
    >
      <h3 style={{ color: isDark ? "#10b981" : "#059669" }} className="text-xl font-semibold">
        Profile
      </h3>
      <p><span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>Name:</span> {user.name}</p>
      <p><span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>Email:</span> {user.email}</p>

      <button
        onClick={logout}
        className="mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-orange-400 text-slate-950 font-semibold text-sm hover:from-rose-400 hover:to-orange-300 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
