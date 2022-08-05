/**
 * This was created with <3 with reference to this tutorial posted on Medium:
 * https://towardsdatascience.com/build-a-simple-todo-app-using-react-a492adc9c8a4
 */

import React from "react";
import "./App.css";
import { NextUIProvider } from '@nextui-org/react';
import Todo from "./Components/Todo";
import { Form } from 'react-bootstrap';
import { Card, Col, Input, Grid, Text, Button, Row } from "@nextui-org/react";
import 'bootstrap/dist/css/bootstrap.min.css';

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");
  const [header, setHeader] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value || !header) return;
    addTodo(header, value);
    setValue("");
    setHeader("");
  };

  return (
      // <Form onSubmit={handleSubmit}>
      //   <Form.Group>
      //     <Form.Label><b>Add Todo</b></Form.Label>
      //     <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      //   </Form.Group>
      //   <Button variant="primary mb-3" type="submit">
      //     Submit
      //   </Button>
      // </Form>
  <Form onSubmit={handleSubmit}>
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
         Insert your item here
        </Text>
        <Text h4 color="white">
          <Input
              bordered
              labelPlaceholder="Input title"
              color="secondary" />
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Input
          width="120px"
          placeholder="Description"
      />
    </Card.Body>
    <Card.Image
        src="https://p.turbosquid.com/ts-thumb/Ws/j24pzG/4L/2/png/1648613576/1920x1080/fit_q99/0f4510d150c9fc6e0e6dc12e581947fce7aef44d/2.jpg"
        objectFit="cover"
        width="100%"
        height={340}
        alt="Card image background"
    />
    <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
    >
      <Row>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary" type="submit">
              <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
              >
               Submit
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  </Form>
  );
}

function App() {
  const[todos, setTodos] = React.useState([
    {
      header: "Sample",
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  // adds a new todo
  const addTodo = (header, text) => {
    const newTodos = [...todos,{ header, text }];
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
      <NextUIProvider>
      <div className="app">
        <div className="container">
          <h1 className="text-center mb-4">Todo List</h1>
          <FormTodo addTodo={addTodo} />
          <Grid.Container gap={2} justify="center">
            {todos.map((todo, index) => (
                <Grid xs={4}>
                <Card isHoverable variant="bordered">
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
                </Grid>
            ))}
          </Grid.Container>>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
