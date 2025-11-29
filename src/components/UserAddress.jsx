import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function UserAddress() {
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
          Loading address...
        </p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div 
      style={cardStyle}
      className="rounded-2xl p-5 shadow-lg transition-all border space-y-1"
    >
      <h3 style={{ color: "#0284c7" }} className="text-lg font-semibold mb-1">
        User Address (Context)
      </h3>
      <p><span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>Street:</span> {user.address.street}</p>
      <p><span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>City:</span> {user.address.city}</p>
      <p><span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>Zip:</span> {user.address.zipcode}</p>
      <p><span style={{ color: isDark ? "#94a3b8" : "#64748b" }}>Company:</span> {user.company.name}</p>
    </div>
  );
}

export default UserAddress;
