import './App.css'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <Routes>
      <Route index element={ <Dashboard/>}/>
      <Route path='login' element={ <Login/>}/>
      <Route path='register' element={ <Register/>}/>
    </Routes>
  )
}

export default App
