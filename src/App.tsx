
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {useAuth} from '@/hooks/AuthContext'
function App() {
  const {loading,user}  = useAuth();
  if(loading){
    return <p>loading...</p>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={user ? <Dashboard /> : <Navigate to={"/login"} />}
        />
        <Route path="/login" element={!user?<Login />:<Navigate to={'/'}/>} />
        <Route path="/register" element={!user?<Register />:<Navigate to={'/'}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
