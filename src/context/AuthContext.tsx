import { createContext, ReactNode, useEffect, useState } from "react";
import Cookie from 'js-cookie'
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
  useEffect(() => {
    const token = Cookie.get('accessToken');
    console.log(token)
    if (token) {
      fetch("/api/users/user", {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => setUser(data.user))
        .catch(() => setUser(null));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
export type { AuthContextProps };
