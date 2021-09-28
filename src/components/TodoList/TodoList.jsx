import React from "react";
import { Form } from "../Form";
import { TodoItem } from "../TodoItem";
import styles from "./TodoList.module.css";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      /*checked: false,
      isSelected: false,*/
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

  onClickDeleteSelectedItem = () => {
    const filteredTodos = this.state.todos.filter((item) => !item.isSelected);
    this.setState({ todos: filteredTodos });
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
              <TodoItem
                key={item.id}
                text={item.text}
                id={item.id}
                dobleClick={this.dobleClick}
                handleCheckboxChange={this.handleCheckboxChange}
                deleteItem={this.deleteItem}
                isSelected={item.isSelected}
                checked={item.checked}
              />
            );
          })}
        </div>
        {this.state.todos.length > 0 ? (
          <div className={styles.footer}>
            <button
              className={styles.buttonDelete}
              onClick={this.onClickDeleteSelectedItem}
            >
              Delete item
            </button>
            <button
              className={styles.buttonDelete}
              onClick={this.onClickDelete}
            >
              Delete all
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
