import { FILTER_ACTION_TYPES } from './filter.slice';

export function statusFilterChanged(status) {
  return {
    type: FILTER_ACTION_TYPES.statusFilterChanged,
    payload: status
  };
}

export function colorFilterAdded(color) {
  return {
    type: FILTER_ACTION_TYPES.colorFilterAdded,
    payload: color
  };
}
export function colorFilterRemoved(color) {
  return {
    type: FILTER_ACTION_TYPES.colorFilterRemoved,
    payload: color
  };
}
