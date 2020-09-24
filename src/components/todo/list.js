import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

import { SettingsContext } from '../../context/settings'

const TodoList = (props) => {
  const settings = useContext(SettingsContext)

  const list = props.list.map((item,i) => {
    if(i < settings.itemCount){
      return(
    <ListGroup.Item
      variant={item.complete ? 'success' : 'danger'}
      key={item._id}
    >
      <span onClick={() => props.handleComplete(item._id)}>
        {`${item.text} Assigned to: ${item.assignee}`}
      </span>
    </ListGroup.Item> 
  )}})

    return (
      <ListGroup>
        {list}
      </ListGroup>
    );
  }


export default TodoList;
