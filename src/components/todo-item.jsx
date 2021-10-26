import React from "react";
import styled from "styled-components";
import { EditIcon } from "../components/icons/edit";
import { EyeIcon } from "../components/icons/eye";
import { TrashIcon } from "../components/icons/trash";

import {
  Link,
  useRouteMatch
} from "react-router-dom";

const StyledTodoDesc = styled.span`
  padding: 2px;
  font-size: 18px;
  color: red;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const StyledTodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 400px;
  padding: 8px;
  border: 1px solid black;
`;

export function TodoItem(props) {
  const todo = props.todo;
  let { url } = useRouteMatch();

  return (
    <StyledTodoItem>
      <StyledTodoDesc completed={todo.completed}>{todo.title}</StyledTodoDesc>
      <span>
        <Link to={`${url}/detail/${props.todo.id}`}>
          <EyeIcon />
        </Link>

        <Link to={`${url}/edit/${props.todo.id}`}>
          <EditIcon />
        </Link>

        <TrashIcon />
      </span>
    </StyledTodoItem>
  );
}
