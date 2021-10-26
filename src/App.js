import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import AboutmePage from "./page/AboutmePage";
import DetailPage from "./page/DetailPage";
import EditPage from "./page/EditPage";
import Homepage from "./page/HomePage";
import TodolistPage from "./page/TodolistPage";

function App() {

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todo-list">Todo List</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
        </ul>
        <hr />
        <Switch>
            <Route exact path="/" children={<Homepage />} />
            
            {/* Todo List */}
            <Route exact path="/todo-list" children={<TodolistPage />} />
            <Route path="/todo-list/detail/:todo_id" children={<DetailPage />} />
            <Route path="/todo-list/edit/:todo_id" children={<EditPage />} />

            <Route path="/about-me" children={<AboutmePage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
