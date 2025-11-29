import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const isDark = theme === "dark";

  return (
    <footer
      style={{
        backgroundColor: isDark ? "#1e293b" : "#f1f5f9",
        borderTopColor: isDark ? "#1e293b" : "#e2e8f0",
        color: isDark ? "#94a3b8" : "#64748b",
      }}
      className="mt-8 border-t"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm gap-2">
        <p>© {new Date().getFullYear()} Context Assignment</p>
        <p>
          API user email:{" "}
          <span style={{ color: isDark ? "#06b6d4" : "#0284c7" }}>
            {user ? user.email : "N/A"}
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
