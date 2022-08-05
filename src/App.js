/**
 * This was created with <3 with reference to this tutorial posted on Medium:
 * https://towardsdatascience.com/build-a-simple-todo-app-using-react-a492adc9c8a4
 */

import React from "react";
import "./App.css";
import Todo from "./Components/Todo";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label><b>Add Todo</b></Form.Label>
          <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
        </Form.Group>
        <Button variant="primary mb-3" type="submit">
          Submit
        </Button>
      </Form>
  );
}

function App() {
  const[todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  // adds a new todo
  const addTodo = text => {
    const newTodos = [...todos,{ text }];
    setTodos(newTodos);
  };

  // updates status of a todo to be done
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  // deletes a Todo
  const removeTodo = index => {
    const newTodos = [...todos];
    // splices list to remove todo whos index matches
    newTodos.splice(index,1);
    setTodos(newTodos);
  };

  return (
      <div className="app">
        <div className="container">
          <h1 className="text-center mb-4">Todo List</h1>
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
                <Card>
                  <Card.Body>
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        markTodo={markTodo}
                        removeTodo={removeTodo}
                    />
                  </Card.Body>
                </Card>
            ))}
          </div>
        </div>
      </div>
  );
}

export default App;
