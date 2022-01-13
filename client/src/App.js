import { useState, useEffect } from "react";
import { ToDo } from "./components/ToDo";
import { ToDoForm } from "./components/ToDoForm";
import styled, { createGlobalStyle } from "styled-components";

export const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoInput) => {
    if (todoInput) {
      let newItem = {
        id: Math.floor(Math.random() * 1000),
        task: todoInput,
        completed: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const toggleTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      ),
    ]);
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <TodoWrapper>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <ToDo
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
      <GlobalStyle />
    </TodoWrapper>
  );
};

const GlobalStyle = createGlobalStyle`
 body {
  background: rgb(49, 111, 159);
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
`;
const TodoWrapper = styled.div`
  box-shadow: 0 0 100px 10px rgba(226, 228, 229, 0.641);
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background: #e2e2e9;
  text-align: center;
  margin: 20px auto;
  border-radius: 15px;
  padding-bottom: 32px;
`;
