import React from "react";
import styles from "./TodoItem.module.css";

export class TodoItem extends React.Component {
  render() {
    const {
      id,
      text,
      isSelected,
      checked,
      dobleClick,
      handleCheckboxChange,
      deleteItem,
    } = this.props;

    return (
      <div
        className={isSelected ? styles.todoItemSelected : styles.todoItem}
        key={id}
        onDoubleClick={() => dobleClick(id)}
        isSelected={isSelected}
      >
        <div className={styles.itemLeft}>
          <input
            onClick={() => handleCheckboxChange(id)}
            className={styles.checkbox}
            type="radio"
            checked={checked}
          ></input>

          <p
            className={checked ? styles.descriptionChecked : styles.description}
          >
            {text}
          </p>
        </div>
        <button
          className={styles.basket}
          onClick={() => deleteItem(id)}
        ></button>
      </div>
    );
  }
}
