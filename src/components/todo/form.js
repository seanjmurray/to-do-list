import React from 'react';
import useForm from '../hook/use-form';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const TodoForm = (props) =>{
  
  const  [ handleSubmit, handleInputChange ]= useForm(submitForm)

function submitForm (task) {
  props.handleSubmit(task);
}

    return (
      <Card className="card">

        <h4 className="ml-1">Add To Do Item</h4>
        <Form onSubmit={ handleSubmit }>
          <Form.Group>

          <Form.Label className="ml-1">
            To Do Item
          </Form.Label>
            <Form.Control 
              name="text"
              placeholder="Add To Do List Item"
              onChange={ handleInputChange }
            />
            </Form.Group>
            <Form.Group>
          <Form.Label className="ml-1">
            Difficulty Rating
          </Form.Label>
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={ handleInputChange } />
          <Form.Label className="ml-1">
            Assigned To
          </Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={ handleInputChange } />
          <Button type="submit" className="mt-2" variant='primary'>Add Item</Button>
          </Form.Group>
        </Form>
      </Card>
    );
}

export default TodoForm;