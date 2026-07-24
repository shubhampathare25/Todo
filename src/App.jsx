import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: "Buy Ghee",
      dueDate: "Today",
    },
  ]);

  const handleNewItems = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={todoItems}>
      <center className="todo-container">
        <AppName />

        <AddTodo onNewItem={handleNewItems} />

        <WelcomeMessage todoItems={todoItems} />

        <TodoItems onDeleteClick={handleDeleteItem} />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
