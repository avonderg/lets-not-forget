import React from "react";
import "../App.css";
import { Button } from '@nextui-org/react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) {
    return (

        <div
            className="todo"
        >
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
            <div>
                <Button shadow color="success" rounded flat onClick={() => markTodo(index)}>✓</Button>{' '}
                <Button shadow color="error" rounded flat onClick={() => removeTodo(index)}>✕</Button>
            </div>
        </div>
    );
}

export default Todo;
