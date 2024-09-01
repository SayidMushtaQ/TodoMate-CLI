import Navigation from "../components/Navigation.component";
import Todos from "../components/Todos.component";
import UserInputBox from "../components/userInputBox.component";
export default function Dashboard() {
  return (
    <div className="container">
      <div className="todo-box">
        <UserInputBox />
      </div>
      <div className="navigation">
        <Navigation />
      </div>
      <div className="todos-box">
        <Todos />
      </div>
    </div>
  );
}
