import { createContext, ReactNode, useEffect, useState } from "react";
import Cookie from "js-cookie";
interface AuthContextProps {
  user: User | null;
}
interface User {
  userName: string;
  email: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const token = Cookie.get("accessToken");
  useEffect(() => {
    console.log(token);
    if (token) {
      fetch("/api/users/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data)=>setUser(data))
        .catch(() => setUser(null));
    }
  }, [token]);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
export type { AuthContextProps };
