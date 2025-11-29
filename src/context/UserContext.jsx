import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);   
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const value = { user, setUser, loading };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
