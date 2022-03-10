import React from 'react';

const NewTodoForm = (props) => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTodo">جدید Todo</label>
      <input onChange={props.newTodoChanged} id="newTodo" name="newTodo" value={props.newTodo} />
      <button type="submit">Todo اضافه کردن</button>
    </form>
  )
};

export default NewTodoForm;
