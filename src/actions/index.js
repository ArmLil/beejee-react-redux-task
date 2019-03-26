export const LOAD = "LOAD";
export const SET_ADMIN = "SET_ADMIN";
export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const CREATE_DATA_RESPONSE = "CREATE_DATA_RESPONSE";
export const SET_URL = "SET_URL";

export const URL_ROOT = "https://uxcandy.com/~shapoval/test-task-backend";
export const DEVELOPER = "Lili";

const composeUrl = (sortField, sortDirection, page) => {
  let _url = `${URL_ROOT}/?developer=${DEVELOPER}`;
  _url += `&sort_field=${sortField}`;
  _url += `&sort_direction=${sortDirection}`;
  _url += `&page=${page + 1}`;
  return _url;
};

export const setUrl = (sortField, sortDirection, page) => ({
  type: SET_URL,
  url: composeUrl(sortField, sortDirection, page)
});

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = responseData => ({
  type: FETCH_DATA_SUCCESS,
  payload: { responseData }
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: { error }
});

export const setAdmin = isAdmin => ({
  type: "SET_ADMIN",
  isAdmin
});

export const createDataResponse = responseData => ({
  type: CREATE_DATA_RESPONSE,
  payload: { responseData }
});

export function fetchData(url) {
  return dispatch => {
    dispatch(fetchDataBegin());
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(res => {
        dispatch(fetchDataSuccess(res));
      })
      .catch(error => dispatch(fetchDataFailure(error)));
  };
}

export function createNewTask(data) {
  return dispatch => {
    return fetch(`${URL_ROOT}/create?developer=${DEVELOPER}`, {
      method: "POST",
      body: data
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(res => {
        console.log("createNewTask response", res);
        if (res.status === "ok") {
          dispatch(createDataResponse(res));
          alert("Task is created! ");
        } else {
          alert(JSON.stringify(res.message));
        }
      });
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
