import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function UpdateUserName() {
  const { user, setUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const handleUpdate = () => {
    if (!user) return;
    setUser(prev => ({
      ...prev,
      name: "XYZ (Updated)",
    }));
  };

  return (
    <div 
      style={{
        backgroundColor: isDark ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.95)",
        borderColor: isDark ? "#1e293b" : "#e2e8f0",
        color: isDark ? "#e2e8f0" : "#0f172a",
      }}
      className="rounded-2xl p-5 shadow-lg transition-all border flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
    >
      <div>
        <h3 style={{ color: isDark ? "#f1f5f9" : "#0f172a" }} className="font-semibold">
          Update Global User Name
        </h3>
        <p style={{ color: isDark ? "#cbd5e1" : "#64748b" }} className="text-sm max-w-md">
          Clicking the button updates <code style={{ color: isDark ? "#06b6d4" : "#0284c7" }}>UserContext</code>.
          All components using the name re-render automatically.
        </p>
        <p style={{ color: isDark ? "#cbd5e1" : "#64748b" }} className="mt-2 text-sm">
          Current Name:{" "}
          <span style={{ color: isDark ? "#10b981" : "#059669" }} className="font-medium">
            {user ? user.name : "No user loaded"}
          </span>
        </p>
      </div>

      <button
        onClick={handleUpdate}
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-300 text-slate-950 font-semibold text-sm hover:from-sky-300 hover:to-cyan-200 transition"
      >
        Change Name Globally
      </button>
    </div>
  );
}

export default UpdateUserName;
