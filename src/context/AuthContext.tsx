import { createContext, ReactNode, useEffect, useState } from "react";
import Cookie from "js-cookie";


const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading,setLoading] = useState(true);
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
          setLoading(false);
        })
        .catch(() => {
          setUser(null);
          setLoading(false)
        });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider,AuthContext };
