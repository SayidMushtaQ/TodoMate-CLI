import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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
  useEffect(() => {
    const token = Cookie.get("accessToken");
    if (token) {
      fetch("/api/users/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ data }) => {
          setUser(data.user)
          console.log(data.user.email)
          localStorage.setItem('useEmail',data.user.email)
        })
        .catch(() => setUser(null));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
const UseAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, UseAuth };
