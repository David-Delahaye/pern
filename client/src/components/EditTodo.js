import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async(e) => { 
      e.preventDefault();
        try {
            const body = {description};
            const response = await fetch (`http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers: {"Content-Type" :"application/json"},
                body: JSON.stringify(body)
            })

            window.location = ('/')
        } catch (err) {
            console.error(err.message);
        }
  }
  return (
    <Fragment>
      <button class="trigger">Edit</button>
      <div id={`id${todo.todo_id}`}>
        <input
          value={description}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
            onClick={e => updateDescription(e)}>
            Confirm
        </button>
      </div>
    </Fragment>
  );
};

export default EditTodo;
