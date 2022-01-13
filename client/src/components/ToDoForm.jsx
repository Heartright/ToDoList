import { useState } from "react";
import { Button, Input } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const ToDoForm = ({ addTodo }) => {
  const classes = useStyles();
  const [todoInput, settodoInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todoInput);
    settodoInput("");
  };

  const handleChange = (event) => {
    settodoInput(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
    <h2>Список задач</h2>
      <Input
        value={todoInput}
        onChange={handleChange}
        placeholder="Введите задачу"
      />
      <Button
        type="submit"
        size="small"
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        Добавить задачу
      </Button>
    </form>
  );
};


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
