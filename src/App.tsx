import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AuthenticatUser from "@/middleware/authenticateUser";
function App() {
  return (
    <BrowserRouter>
      {/* <AuthenticatUser> */}
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      {/* </AuthenticatUser> */}
    </BrowserRouter>
  );
}

export default App;
