export const availableColors = ['green', 'blue', 'orange', 'purple', 'red'];

export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
};

export const initialState = {
  status: '',
  colors: []
};

export const FILTER_ACTION_TYPES = {
  statusFilterChanged: 'statusFilterChanged',
  colorFilterAdded: 'colorFilterAdded',
  colorFilterRemoved: 'colorFilterRemoved'
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ACTION_TYPES.statusFilterChanged: {
      return {
        ...state,
        status: action.payload
      };
    }
    case FILTER_ACTION_TYPES.colorFilterAdded: {
      if (!state.colors.includes(action.payload)) {
        // dont repeat color
        return {
          ...state,
          colors: [...state.colors, action.payload]
        };
      }
      return state;
    }
    case FILTER_ACTION_TYPES.colorFilterRemoved: {
      const colors = state.colors.filter(c => c != action.payload);
      return {
        ...state,
        colors
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
