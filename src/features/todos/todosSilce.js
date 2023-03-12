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
  clearAllCompleted: 'clearAllCompleted',
  todosLoaded: 'todosLoaded'
};

const todosReducer = (state = [], action) => {
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
    case TODO_ACTION_TYPES.todosLoaded: {
      return action.payload;
    }

    default:
      return state;
  }
};

export async function fetchTodos(dispatch, getState) {
  //fakeApi was not working
  const response = [
    {
      color: '',
      completed: false,
      text: 'Buy bread',
      id: 0
    },
    {
      color: '',
      completed: false,
      text: 'Read book',
      id: 1
    },
    {
      color: '',
      completed: false,
      text: 'Go jim',
      id: 2
    },
    {
      color: '',
      completed: false,
      text: 'Eat more ',
      id: 3
    },
    {
      color: '',
      completed: false,
      text: 'Code',
      id: 4
    },
    {
      color: '',
      completed: false,
      text: 'Drink coffee',
      id: 5
    }
  ];
  setTimeout(() => {
    dispatch({ type: TODO_ACTION_TYPES.todosLoaded, payload: response });
  }, 1000);
}

export default todosReducer;
