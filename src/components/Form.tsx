import type { Component, JSX } from "solid-js";
import { createSignal } from "solid-js";

interface Props {
  onSave: (value: string) => void;
}

const Form: Component<Props> = ({ onSave }) => {
  const [inputValue, setInputValue] = createSignal("");

  const handleChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSave: JSX.EventHandler<HTMLFormElement, Event> = (e) => {
    e.preventDefault();

    if (inputValue() !== "") {
      onSave(inputValue());
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <input value={inputValue()} onInput={handleChange} type="text" />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Form;
