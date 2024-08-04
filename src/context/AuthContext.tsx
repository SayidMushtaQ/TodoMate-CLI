import { createContext, ReactNode, useEffect, useState } from "react";
import Cookie from "js-cookie";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = Cookie.get("accessToken");
    if (token) {
      (async () => {
        try {
          const res = await fetch("/api/users/user", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          const {data} = await res.json();
          setUser(data.user)
          setLoading(false);
        } catch (err) {
          console.error(err);
          setLoading(false)
        }
      })();
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
