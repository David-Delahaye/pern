import React, {Fragment} from 'react';
import './App.css';

//components

import InputTodo from "./components/InputTodo"
import ListTodos from './components/ListTodo';

function App() {
  return (
  <Fragment>
     <InputTodo/>
     <ListTodos/>
  </Fragment>
  );
}

export default App;
