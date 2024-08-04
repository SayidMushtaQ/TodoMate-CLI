import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProdectedRoute from "@/lib/protectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <ProdectedRoute>
              <Dashboard />
            </ProdectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
