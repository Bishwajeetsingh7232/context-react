import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function UserDetails() {
  const { user, loading } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const cardStyle = {
    backgroundColor: isDark ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.95)",
    borderColor: isDark ? "#1e293b" : "#e2e8f0",
    color: isDark ? "#e2e8f0" : "#0f172a",
  };

  if (loading) {
    return (
      <div 
        style={cardStyle}
        className="rounded-2xl p-5 shadow-lg transition-all border"
      >
        <p style={{ color: isDark ? "#cbd5e1" : "#64748b" }} className="text-sm">
          Loading user...
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div 
        style={cardStyle}
        className="rounded-2xl p-5 shadow-lg transition-all border"
      >
        <p style={{ color: isDark ? "#f87171" : "#dc2626" }} className="text-sm">
          No user found.
        </p>
      </div>
    );
  }

  return (
    <div 
      style={cardStyle}
      className="rounded-2xl p-5 shadow-lg transition-all border space-y-1"
    >
      <h3 style={{ color: "#0284c7" }} className="text-lg font-semibold mb-1">
        User Details (Context)
      </h3>
      <p><span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>Name:</span> {user.name}</p>
      <p><span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>Username:</span> {user.username}</p>
      <p><span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>Email:</span> {user.email}</p>
      <p><span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>Phone:</span> {user.phone}</p>
    </div>
  );
}

export default UserDetails;
