import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todoAdded } from '../todos/todos-reducer/todos.actions';

const Header = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => setText(e.target.value);

  const addTodo = e => {
    e.preventDefault();
    if (text == '') {
      return;
    }
    dispatch(todoAdded(text));
    setText('');
  };

  return (
    <header className="header">
      <form onSubmit={addTodo}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Header;
