import React from "react";
import { Form } from "../Form";
import styles from "./TodoList.module.css";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      checked: false,
      isSelected: false,
    };
  }

  onClickAdd = (todoshka) => {
    const newTodos = [...this.state.todos, todoshka];

    this.setState({ todos: newTodos });
  };

  dobleClick = (id) => {
    const newTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      }
      return item;
    });
    this.setState({ todos: newTodos });
  };

  handleCheckboxChange = (id) => {
    const newTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    this.setState({ todos: newTodos });
  };

  deleteItem = (id) => {
    const filteredTodos = this.state.todos.filter((item) => item.id !== id);
    this.setState({ todos: filteredTodos });
  };

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
              <div
                className={
                  item.isSelected ? styles.todoItemSelected : styles.todoItem
                }
                key={item.id}
                onDoubleClick={() => this.dobleClick(item.id)}
                isSelected={item.selected}
              >
                <div className={styles.itemLeft}>
                  <input
                    onClick={() => this.handleCheckboxChange(item.id)}
                    className={styles.checkbox}
                    type="radio"
                    checked={item.checked}
                  ></input>

                  <p
                    className={
                      item.checked
                        ? styles.descriptionChecked
                        : styles.description
                    }
                  >
                    {item.text}
                  </p>
                </div>
                <button
                  className={styles.basket}
                  onClick={() => this.deleteItem(item.id)}
                ></button>
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
