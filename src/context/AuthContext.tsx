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
          setUser(data.user);
          localStorage.setItem('userEmail',data.user.email)
        })
        .catch(() =>{
          setUser(null)
          localStorage.removeItem('userEmail')
        } 
      );
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
