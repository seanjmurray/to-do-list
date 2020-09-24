import { useState } from 'react';

const useForm = (callback) => {

  const [item, setItem] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    callback(item);
    setItem({});
  };

  const handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value });

  }

  return [ handleSubmit, handleInputChange, item ];
};

export default useForm;