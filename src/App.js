/**
 * This was created with <3 with reference to this tutorial posted on Medium:
 * https://towardsdatascience.com/build-a-simple-todo-app-using-react-a492adc9c8a4
 */

import React from "react";
import "./App.css";
import {NextUIProvider} from '@nextui-org/react';
import Todo from "./Components/Todo";
import { Form } from 'react-bootstrap';
import { Card, Col, Input, Grid, Text, Button, Link , Spacer} from "@nextui-org/react";
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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="inputTitle">
          {/*<Form.Label>Task Title</Form.Label>*/}
          <Text b color="warning">
            Task Title
          </Text>
          <Form.Control size="sm" type="title" value={header} onChange={e => setHeader(e.target.value)} placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="inputBody">
          {/*<Form.Label >Task Description</Form.Label>*/}
          <Text b color="warning">
            Task Description
          </Text>
          <Form.Control size="sm" type="descr"  value={value} onChange={e => setValue(e.target.value)} placeholder="Enter description" />
        </Form.Group>

        <Button shadow color="gradient" type="submit">
          Submit
        </Button>
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
    const newTodos = [...todos,{header,text}];
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
          <Spacer y={2} />
          <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
              }}
              weight="bold"
          >
            Forget Me Nots
          </Text>
          <Text
              h4
              size={40}
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
              weight="bold"
          >
            A simple to-do platform, for some of those things you just can't afford to forget. Don't worry, we've got you covered.
          </Text>
          <Spacer y={4} />
          <FormTodo addTodo={addTodo} />
          <Spacer y={2} />
          <Grid.Container gap={2} justify="center">
            {todos.map((todo, index) => (
                <Grid xs={4}>
                <Card isHoverable variant="bordered" title={todo.header}>
                  <Card.Header css={{ position: "absolute", zIndex: 1, top: 4 }}>
                    <img
                        alt="forget me not"
                        src="https://flyclipart.com/thumb2/royal-blue-flowers-background-771036.png"
                        width="34px"
                        height="34px"
                    />
                    <Grid.Container css={{ pl: "$6" }}>
                      <Grid xs={12}>
                        {/*<Text h4 css={{ lineHeight: "$xs" }}>*/}
                        {/*  Next UI*/}
                        {/*</Text>*/}
                        <Text size={12} weight="bold" transform="uppercase" color="#c197c7" css={{ lineHeight: "$xs" }}>
                          To-Do
                        </Text>
                      </Grid>
                      <Grid xs={12}>
                        <Text h3 color="secondary">
                          {todo.header}
                        </Text>
                      </Grid>
                    </Grid.Container>
                    {/*<Col>*/}
                    {/*  <Text size={12} weight="bold" transform="uppercase" color="D0B1E5">*/}
                    {/*    To-Do*/}
                    {/*  </Text>*/}
                    {/*  <Text h3 color="secondary">*/}
                    {/*    {todo.header}*/}
                    {/*  </Text>*/}
                    {/*</Col>*/}
                  </Card.Header>
                  <Spacer y={2} />
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
        <Text color="primary">
          Made with &#xe022 by <Link href="https://github.com/avonderg"> alex vdg </Link>.
        </Text>
    </NextUIProvider>
  );
}

export default App;
