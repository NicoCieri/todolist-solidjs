import { createSignal } from "solid-js";
import type { Component } from "solid-js";
import Form from "./components/Form";
import List from "./components/List";
import { Task } from "./types";

const App: Component = () => {
  const [todoList, setTodoList] = createSignal<Task[]>([]);

  const onSave = (value: string) => {
    setTodoList([
      {
        text: value,
        completed: false,
      },
      ...todoList(),
    ]);
  };

  const onToggleTask = (i: number) => {
    setTodoList(
      todoList().map((task, index) =>
        index === i ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ margin: 0, padding: "0 10px" }}>
      <h1>Todo App</h1>

      <Form onSave={onSave} />

      <List tasks={todoList} onToggleTask={onToggleTask} />
    </div>
  );
};

export default App;
