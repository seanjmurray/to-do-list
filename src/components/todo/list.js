import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SettingsContext } from '../../context/settings';



  const TodoList = (props) => {
    const ctx = useContext(SettingsContext)
    let list = props.list.filter(item => {
      if(ctx.showComplete){
        if(item.complete){
          return null
        } else {
          return item
        } 
      } else {
        return item
      }
    })

    list = list.sort((a,b) => a[ctx.sortBy] - b[ctx.sortBy] ? -1 : 1)
    return (
      <ListGroup>
        {list.map((item, i) => {
          if(i < ctx.itemCount){
            return (
          <ListGroup.Item 
            key={item._id}>
            <Row>
            <Col md={3}>
            <Button className="rounded-pill" variant={item.complete ? "success" : "danger"} onClick={() => props.toggleComplete(item._id)}>{item.complete ? "Complete" : "Pending"}
            </Button>
            </Col>
            <Col md={4}>
            <span className="ml-5">{`${item.assignee}`}
            </span>
            </Col>
            <Col md={3}> 
            </Col>
            <Col>
            <span onClick={() => props.deleteItem(item._id)}>X
            </span>
            </Col>
            </Row>
            <hr></hr>
            <Row>
            <span className="ml-3">{`${item.text}`}
            </span>
            </Row>
            <Row>
            <Col md={7}>
            </Col>
            <span className="ml-5">{`Difficulty: ${item.difficulty}`}
            </span>
            </Row>
          </ListGroup.Item>
            )} else {
              return null
            }
  })}
      </ListGroup>
    );
  }

export default TodoList;