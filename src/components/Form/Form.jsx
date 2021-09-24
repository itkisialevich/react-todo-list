import { useState } from "react";
import { Button } from "../Button";
import styles from "./Form.module.css";

function getId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export function Form({ onClick }) {
  const [text, setText] = useState("");

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const onClickAdd = () => {
    const todoshka = {
      id: getId(),
      text: text,
      checked: false,
    };

    onClick(todoshka);
    setText("");
  };
  return (
    <div className={styles.headerApp}>
      <input
        className={styles.inputApp}
        value={text}
        onChange={onChangeInput}
        placeholder="Add item..."
      />
      <Button text="+" onClick={onClickAdd} />
    </div>
  );
}
