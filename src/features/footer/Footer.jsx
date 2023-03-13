import { useSelector, useDispatch } from 'react-redux';

import { capitalize } from '../../utils/capitalize';

import { StatusFilters, availableColors } from '../filters/filter-reducer/filter.slice';

import {
  statusFilterChanged,
  colorFilterAdded,
  colorFilterRemoved
} from '../filters/filter-reducer/filter.actions';

import {
  markAllCompleted,
  clearAllCompleted
} from '../todos/todos-reducer/todos.actions';

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's';

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};

const StatusFilter = ({ value: status }) => {
  const dispatch = useDispatch();

  const renderedFilters = Object.keys(StatusFilters).map(key => {
    const value = StatusFilters[key];
    const handleClick = () => {
      dispatch(statusFilterChanged(value));
    };

    const className = value === status ? 'selected' : '';

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

const ColorFilters = ({ value: colors }) => {
  const dispatch = useDispatch();

  const renderedColors = availableColors.map(color => {
    const checked = colors.includes(color);

    const handleChange = () => {
      if (!checked) {
        dispatch(colorFilterAdded(color));
      } else {
        dispatch(colorFilterRemoved(color));
      }
    };
    return (
      <label key={color}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span
          className="color-block"
          style={{
            backgroundColor: color
          }}
        ></span>
        {capitalize(color)}
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  );
};

const Footer = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);

  const todosRemaining = todos.filter(t => !t.completed).length;

  const { status, colors } = useSelector(state => state.filters);

  const handleMarkAllCompleted = e => {
    dispatch(markAllCompleted());
  };
  const handleClearAllCompleted = e => {
    todos.forEach(t => {
      if (t.completed) {
        dispatch(clearAllCompleted());
      }
    });
  };

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={handleMarkAllCompleted}>
          Mark All Completed
        </button>
        <button className="button" onClick={handleClearAllCompleted}>
          Clear All Completed
        </button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} />
      <ColorFilters value={colors} />
    </footer>
  );
};

export default Footer;
