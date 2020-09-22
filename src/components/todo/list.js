import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const TodoList = (props) => {
    return (
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item
            variant={item.complete ? 'success' : 'danger'}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {`${item.text} Assigned to: ${item.assignee}`}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }


export default TodoList;
