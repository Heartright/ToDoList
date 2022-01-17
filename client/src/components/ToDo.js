import { useCallback } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

export const ToDo = ({ toggleTodo, deleteTodo, todo }) => {
  const { completed, id } = todo;

  const textOnclick = useCallback(() => {
    toggleTodo(id);
  }, [toggleTodo, id]);
  const deleteOnclick = useCallback(() => {
    deleteTodo(id);
  }, [deleteTodo, id]);

  return (
    <TodoItem key={todo.id}>
      <TodoText completed={completed} onClick={textOnclick}>
        {todo.task}
      </TodoText>
      <DeleteIcon onClick={deleteOnclick} />
    </TodoItem>
  );
};

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
  margin: 10px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgb(10, 119, 228) 0%,
    rgb(48, 63, 159) 70%
  );
  padding: 10px;
  border-radius: 10px;
  width: 61%;
`;


const TodoText = styled.div`
  word-break: break-all;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;
