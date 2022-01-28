import { useState, useEffect } from "react";
import { ToDo } from "./components/ToDo";
import { ToDoForm } from "./components/ToDoForm";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

export const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3010/todo/");
    setTodos(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (todoInput) => {
    if (todoInput.trim()) {
      let newItem = {
        task: todoInput,
      };
      try {
        await axios.post("http://localhost:3010/todo/", newItem);
        fetchData();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const toggleTodo = async (id) => {
    try {
      await axios.patch(`http://localhost:3010/todo/?todoid=${id}`);
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3010/todo/?todoid=${id}`);
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
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
  width: 37%;
  min-height: 600px;
  background: #e2e2e9;
  text-align: center;
  margin: 20px auto;
  border-radius: 15px;
  padding-bottom: 32px;
`;
