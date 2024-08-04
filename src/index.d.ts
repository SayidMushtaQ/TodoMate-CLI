interface AuthContextProps {
    user: User | null;
    loading:boolean
  }
  interface User {
    userName: string;
    email: string;
  }