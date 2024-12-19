import React, { useState } from "react";
import TodoList from './components/TodoList.jsx'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [todos , setTodos] = useState([])
  const [todoInput,settodoInput] = useState("")
  const [filtered , setFiltered] = useState("all")
  const addTodo = ()=>{
    if (todoInput.trim()==='') return;
    setTodos([...todos ,{ id : Date.now() , text : todoInput, isCompleted : false}])
    settodoInput('') 
    console.log(todos);
    
  }
  const handleInputChange = (e) => {
    settodoInput(e.target.value);
  };

  const deleteAll = ()=>{
    setTodos([])
  }

  const deleteTodo = (id)=>{
    const filteredTodos = todos.filter((t) =>t.id !== id)
    setTodos(filteredTodos)
  }

  const complated = (id)=>{
    setTodos(todos.map(t => t.id === id ? {...t, isCompleted: !t.isCompleted } : t))
  }  
  

  return (
    <Container className="App">
      <h1 className="my-4 text-center">Todo App</h1>

      <Row className="mb-4">
        <Col sm={8} md={9}>
          <Form.Control
            type="text"
            placeholder="Add a new task"
            className="todo-input"
            value={todoInput}
            onChange={handleInputChange}
          />
        </Col>
        <Col sm={4} md={3}>
          <Button
            className="w-30"
            variant="primary"
            onClick={addTodo}
          >
            Add Todo
          </Button>
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center">
        <Col sm="auto">
          <Button
            variant="outline-secondary"
          >
            All Todos
          </Button>
        </Col>
        <Col sm="auto">
          <Button
            variant="outline-success"
          >
            Completed Todos
          </Button>
        </Col>
        <Col sm="auto">
          <Button
            variant="outline-warning"
          >
            Pending Todos
          </Button>
        </Col>
        <Col sm="auto">
          <Button
            className="filter-btn"
            variant="outline-danger"
            onClick={deleteAll}
          >
            Clear All
          </Button>
        </Col>
      </Row>
      <TodoList todos={todos} deleteTodo={deleteTodo} complated={complated}/>
    </Container>
  );
}

export default App;