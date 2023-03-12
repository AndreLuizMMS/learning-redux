import { useSelector } from 'react-redux';

import colorFilteredListItems from './colorFilteredTodos';

import TodoListItem from './TodoListItem';

import todosSelector from './todosSelector';
import { colorFiltersSelector } from '../filters/filtersSelector';

const TodoList = () => {
  const todos = useSelector(todosSelector);
  const colorFilter = useSelector(colorFiltersSelector);

  const renderList = todos.map(todo => <TodoListItem key={todo.id} todo={todo} />);

  const renderFilteredList = colorFilteredListItems(colorFilter, todos).map(todo => (
    <TodoListItem key={todo.id} todo={todo} />
  ));

  return (
    <ul className="todo-list">
      {!colorFilter.length ? renderList : renderFilteredList}
      <></>
    </ul>
  );
};

export default TodoList;
