import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CREATE_DATA_RESPONSE
} from "../actions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  pageCount: 0
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        taskCreateProcessed: false
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.responseData.message.tasks,
        pageCount: action.payload.responseData.message.total_task_count
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    case CREATE_DATA_RESPONSE:
      return {
        ...state,
        loading: false,
        taskCreateProcessed: true
      };
    default:
      return state;
  }
};
