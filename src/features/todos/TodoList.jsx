import { useDispatch, useSelector } from 'react-redux';

import TodoListItem from './TodoListItem';

const selectTodosId = state => state.todos.map(t => t.id);

const TodoList = () => {
  const todos = useSelector(selectTodosId);

  const renderedListItems = todos.map(todoId => {
    // array de componente
    return <TodoListItem key={todoId} id={todoId} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
