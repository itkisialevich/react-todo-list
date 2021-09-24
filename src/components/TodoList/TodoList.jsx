import React from "react";
import { Form } from "../Form";
import styles from "./TodoList.module.css";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      checked: false,
    };
  }

  onClickAdd = (todoshka) => {
    const newTodos = [...this.state.todos, todoshka];

    this.setState({ todos: newTodos });
  };

  handleCheckboxChange(id) {
    this.setState({ checked: !this.state.checked });
  }

  onClickDelete = () => {
    this.setState({ todos: [] });
  };

  render() {
    return (
      <div className={styles.appTodo}>
        <div className={styles.imageApp}>
          <h2 className={styles.appTitle}>Todo List</h2>
        </div>
        <div className={styles.appContent}>
          <Form onClick={this.onClickAdd} />
          {this.state.todos.map((item) => {
            return (
              <div className={styles.todoItem} key={item.id}>
                <div className={styles.itemLeft}>
                  <input
                    onClick={this.handleCheckboxChange.bind(this)}
                    className={styles.checkbox}
                    type="radio"
                    checked={this.state.checked}
                  ></input>
                  <p className={styles.description}>{item.text}</p>
                </div>
                <button className={styles.basket}></button>
              </div>
            );
          })}
        </div>
        <button className={styles.buttonDelete} onClick={this.onClickDelete}>
          Delete All
        </button>
      </div>
    );
  }
}
