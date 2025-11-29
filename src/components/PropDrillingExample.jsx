import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function PropDrillingExample() {
  const userName = "Bishwajeet (from App via props)";
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div 
      style={{
        backgroundColor: isDark ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.95)",
        borderColor: isDark ? "#1e293b" : "#e2e8f0",
        color: isDark ? "#e2e8f0" : "#0f172a",
      }}
      className="rounded-2xl p-5 shadow-lg transition-all border space-y-3"
    >
      <p className="text-sm">
        This shows <span className="font-semibold">props drilling</span> –{" "}
        <code style={{ color: "#0284c7" }}>userName</code> is
        passed App → Parent → Child → FinalChild, even though only the last
        component really uses it.
      </p>
      <Parent userName={userName} />
    </div>
  );
}

function Parent({ userName }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  
  return (
    <div 
      style={{
        borderColor: isDark ? "#1e293b" : "#e2e8f0",
        color: isDark ? "#e2e8f0" : "#0f172a",
      }}
      className="mt-2 border rounded-xl p-3"
    >
      <h3 style={{ color: isDark ? "#f1f5f9" : "#0f172a" }} className="font-semibold mb-1">Parent</h3>
      <Child userName={userName} />
    </div>
  );
}

function Child({ userName }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  
  return (
    <div 
      style={{
        borderColor: isDark ? "#1e293b" : "#e2e8f0",
        color: isDark ? "#e2e8f0" : "#0f172a",
      }}
      className="mt-2 border rounded-xl p-3"
    >
      <h4 style={{ color: isDark ? "#f1f5f9" : "#0f172a" }} className="font-semibold mb-1">Child</h4>
      <FinalChild userName={userName} />
    </div>
  );
}

function FinalChild({ userName }) {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  
  return (
    <div 
      style={{
        backgroundColor: isDark ? "#0f172a" : "#f1f5f9",
        borderColor: isDark ? "#1e293b" : "#e2e8f0",
        color: isDark ? "#e2e8f0" : "#0f172a",
      }}
      className="mt-2 rounded-xl p-3 border"
    >
      <p style={{ color: isDark ? "#e2e8f0" : "#0f172a" }} className="text-sm">
        Final component received:{" "}
        <span style={{ color: isDark ? "#10b981" : "#059669" }} className="font-semibold">
          {userName}
        </span>
      </p>
    </div>
  );
}

export default PropDrillingExample;
