import UserInputBox from './components/userInputBox.component'
import './App.css'
import Navigation from './components/Navigation.component'
function App() {

  return (
    <div className='container'>
      <div className='todo-box'>
        <UserInputBox/>
      </div>
      <div className='navigation'>
        <Navigation/>
      </div>
    </div>
  )
}

export default App
