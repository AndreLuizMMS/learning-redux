import { TODO_ACTION_TYPES } from './todos.slice';

export function todoAdded(text) {
  return {
    type: TODO_ACTION_TYPES.added,
    payload: text
  };
}

export function todoToggled(id, completed) {
  return {
    type: TODO_ACTION_TYPES.toggled,
    payload: { id: id, completed: completed }
  };
}

export function colorChanged(e, id) {
  return {
    type: TODO_ACTION_TYPES.colorChanged,
    payload: {
      color: e.target.value,
      id: id
    }
  };
}

export function deleteTodo(id) {
  return {
    type: TODO_ACTION_TYPES.deleted,
    payload: id
  };
}

export function markAllCompleted() {
  return {
    type: TODO_ACTION_TYPES.markAllCompleted
  };
}

export function clearAllCompleted() {
  return {
    type: TODO_ACTION_TYPES.clearAllCompleted
  };
}
export function todosLoaded(responde) {
  return {
    type: TODO_ACTION_TYPES.todosLoaded,
    payload: responde
  };
}
