import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { user } = useContext(UserContext);
  const { isAuthenticated, user: authUser } = useAuthContext();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <nav
      style={{
        backgroundColor: isDark ? "#1e293b" : "#f1f5f9",
        borderBottomColor: isDark ? "#1e293b" : "#e2e8f0",
        color: isDark ? "#f1f5f9" : "#0f172a",
      }}
      className="border-b"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-500/40">
            <span className="font-extrabold text-slate-950 text-lg">C</span>
          </div>
          <div>
            <p className="font-semibold leading-tight">
              Context Demo App
            </p>
            <p style={{ color: isDark ? "#94a3b8" : "#64748b" }} className="text-xs">
              useContext • API • Auth • Theme
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <div className="flex flex-col items-end">
            <span style={{ color: isDark ? "#cbd5e1" : "#475569" }}>
              API User:{" "}
              <span style={{ color: isDark ? "#06b6d4" : "#0284c7" }} className="font-medium">
                {user ? user.name : "loading..."}
              </span>
            </span>
            <span style={{ color: isDark ? "#cbd5e1" : "#475569" }}>
              Auth:{" "}
              <span
                style={{
                  color: isAuthenticated
                    ? isDark ? "#10b981" : "#059669"
                    : isDark ? "#ef4444" : "#dc2626"
                }}
              >
                {isAuthenticated ? authUser.name : "Not logged in"}
              </span>
            </span>
          </div>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-md bg-sky-500 text-white hover:bg-sky-400 shadow-md shadow-sky-400/30 text-xs font-medium"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
