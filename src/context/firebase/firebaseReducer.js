import { ADD_USER, FETCH_USERS, ADD_GROUP, FETCH_GROUPS, CLEAR_GROUPS } from "../types"

const handlers = {
  // [ADD_USER]: (state, {payload}) => ({
  //   ...state,
  //   users: [...state.users, payload]
  // }),
  [FETCH_USERS]: (state, {payload}) => ({...state, users: payload }),
  [FETCH_GROUPS]: (state, {payload}) => ({...state, groupsList: payload }),
  [ADD_GROUP]: (state, {payload}) => ({...state, groupsList: [...state.groupsList, payload]}),
  [CLEAR_GROUPS]: (state) => ({...state, groupsList: []}),
  DEFAULT: state => state
}


export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}