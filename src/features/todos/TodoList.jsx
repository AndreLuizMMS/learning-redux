import { useSelector } from 'react-redux';

import colorFilteredListItems from '../../utils/colorFilteredTodos';

import TodoListItem from './TodoListItem';

import todosSelector from '../todos/todos-reducer/todos.selector';
import { filtersSelector } from '../filters/filter-reducer/filters.selector';

const TodoList = () => {
  const todos = useSelector(todosSelector);
  const { status, colors } = useSelector(filtersSelector);

  const colorFilteredArray = () => {
    let temp = [];
    if (!colors.length) {
      temp = todos;
    } else {
      temp = colorFilteredListItems(colors, todos);
    }
    return temp;
  };

  const statusFilteredArray = colorFiltered => {
    if (status == 'All') {
      return colorFiltered;
    }
    if (status == 'Active') {
      return colorFiltered.filter(t => t.completed == false);
    }
    if (status == 'Completed') {
      return colorFiltered.filter(t => t.completed == true);
    }
  };

  const filteredTodos = statusFilteredArray(colorFilteredArray()).map(todo => (
    <TodoListItem key={todo.id} todo={todo} />
  ));

  return <ul className="todo-list">{filteredTodos}</ul>;
};

export default TodoList;
