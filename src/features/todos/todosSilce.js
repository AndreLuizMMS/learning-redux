const initialState = [
  { id: 0, text: 'Praticar react', completed: true },
  { id: 1, text: 'Aprender Redux', completed: false, color: 'purple' },
  { id: 2, text: 'Criar algo funcional!', completed: false, color: 'blue' }
];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export const TODO_ACTION_TYPES = {
  added: 'added',
  toggled: 'toggled',
  colorChanged: 'colorChanged',
  deleted: 'deleted',
  markAllCompleted: 'markAllCompleted',
  clearAllCompleted: 'clearAllCompleted'
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.added: {
      return [
        ...state,

        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false
        }
      ];
    }
    case TODO_ACTION_TYPES.toggled: {
      return state.map(t => {
        if (t.id != action.payload.id) {
          return t;
        }
        return {
          ...t,
          completed: !action.payload.completed
        };
      });
    }
    case TODO_ACTION_TYPES.colorChanged: {
      return state.map(t => {
        if (t.id == action.payload.id) {
          return {
            ...t,
            color: action.payload.color
          };
        }
        return t;
      });
    }
    case TODO_ACTION_TYPES.deleted: {
      return state.filter(t => t.id != action.payload);
    }
    case TODO_ACTION_TYPES.markAllCompleted: {
      return state.map(t => {
        return {
          ...t,
          completed: true
        };
      });
    }
    case TODO_ACTION_TYPES.clearAllCompleted: {
      return state.filter(t => t.completed == false);
    }
    default:
      return state;
  }
};

export default todosReducer;
