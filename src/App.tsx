import UserInputBox from './components/userInputBox.component'
import './App.css'
import Navigation from './components/Navigation.component'
import Todos from './components/Todos.component'
function App() {

  return (
    <div className='container'>
      <div className='todo-box'>
        <UserInputBox/>
      </div>
      <div className='navigation'>
        <Navigation/>
      </div>
      <div className='todos-box'>
        <Todos/>
      </div>
    </div>
  )
}

export default App
