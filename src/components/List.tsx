import { Component, For, Show } from "solid-js";
import { Task } from "../types";

interface Props {
  tasks: () => Task[];
  onToggleTask: (i: number) => void;
}

const List: Component<Props> = ({ tasks, onToggleTask }) => {
  return (
    <div>
      <ul>
        <For each={tasks()}>
          {(task, i) => (
            <li
              onClick={() => onToggleTask(i())}
              style={{
                ...(task.completed && {
                  "text-decoration": "line-through",
                }),
                cursor: "pointer",
              }}
            >
              {task.text}
            </li>
          )}
        </For>
      </ul>

      <Show when={!tasks().length}>
        <p>No tasks yet</p>
      </Show>
    </div>
  );
};

export default List;
