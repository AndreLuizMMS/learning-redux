import { useSelector, useDispatch } from 'react-redux';

import { capitalize } from '../filters/capitalize';
import { availableColors } from '../filters/filterSlice';

import { TODO_ACTION_TYPES } from '../todos/todosSilce';
import { FILTER_ACTION_TYPES } from '../filters/filterSlice';

import TimesSolid from './timesSolid.svg';

const selectedTodosByID = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId);
};

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const { text, completed, color, id } = todo;

  const handleCompletedChanged = e => {
    dispatch({
      type: TODO_ACTION_TYPES.toggled,
      payload: { completed: completed, id: id }
    });
  };

  const handleColorChanged = e => {
    dispatch({
      type: TODO_ACTION_TYPES.colorChanged,
      payload: { color: e.target.value, id: id }
    });
  };

  const handleDelete = e => {
    dispatch({ type: TODO_ACTION_TYPES.deleted, payload: id });
  };

  const colorOptions = availableColors.map(c => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={handleDelete}>
            <img src={TimesSolid} alt="" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
