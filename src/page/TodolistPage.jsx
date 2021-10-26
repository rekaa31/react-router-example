import React from "react";
import { TodoItem } from "../components/todo-item";

export default function TodolistPage() {
    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
      // FIXME: fetch from api
      // sementara kita HARDCODE dulu.
      const staticTodos = [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: true,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
      ];
      setTodos(staticTodos);
    }, []); // depedencies empty => lifecyle ComponentDidMount
  
    return (
      <React.Fragment>
            <h3>Todo List</h3>

            <ul>
                {todos.map((value, index) => {
                    // each value adalah object
                    return <TodoItem key={value.id} todo={value} />;
                })}
            </ul>
      </React.Fragment>
    );
}