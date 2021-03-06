import React, { useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
import useAjax from '../../hook/ajax';
import './todo.scss';
import { SettingsContext } from '../../context/settings'

function ToDo() {

  // State
  const {list, addItem, deleteItem, toggleComplete} = useAjax('http://localhost:3001/api/v1/todo')
  const ctx = useContext(SettingsContext)
    return (
      <Container>
        <Row>
          <Col md={2}>
          </Col>
          <Col md={7}>
          <header className="mb-3 mt-3">
            <Navbar bg="dark" variant="dark">
            <Nav>
              <Navbar.Brand>
              To Do List Manager ({list.filter(item => !item.complete).length})</Navbar.Brand>
            </Nav>
            </Navbar>
          </header>
          </Col>
          <Col md={2}>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
          </Col>
          <Col md={3}>
            <TodoForm handleSubmit={addItem} />
          </Col>
          <Col md={4}>
            <Button variant="dark" onClick={ctx.toggleComplete}>{ctx.showComplete ? 'Show complete' : 'Hide complete'}</Button>
            <TodoList
              list={list}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
              />
          </Col>
             <Col md={2}>
          </Col>
        </Row>
      </Container>
    );
}

export default ToDo;