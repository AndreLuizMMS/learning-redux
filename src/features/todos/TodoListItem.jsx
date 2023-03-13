import { useDispatch } from 'react-redux';

import { capitalize } from '../../utils/capitalize';
import { availableColors } from '../filters/filter-reducer/filter.slice';

import {
  todoToggled,
  colorChanged,
  deleteTodo
} from '../todos/todos-reducer/todos.actions';

import TimesSolid from './timesSolid.svg';

const TodoListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const { text, completed, color, id } = todo;

  const handleCompletedChanged = e => {
    dispatch(todoToggled(id, completed));
  };

  const handleColorChanged = e => {
    dispatch(colorChanged(e, id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
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
