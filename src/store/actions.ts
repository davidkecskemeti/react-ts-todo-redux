import Todo from "../models/todo.interface";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_NEW_TODO = "SET_NEW_TODO";
export const SET_TODOS = "SET_TODOS";

export type ActionTypes =
  | { type: typeof ADD_TODO }
  | { type: typeof DELETE_TODO; payload: number }
  | { type: typeof SET_TODOS; payload: Todo[] }
  | { type: typeof UPDATE_TODO; payload: { id: number; text: string } }
  | { type: typeof TOGGLE_TODO; payload: number }
  | { type: typeof SET_NEW_TODO; payload: string };

export const addTodo = (): ActionTypes => ({ type: ADD_TODO });
export const deleteTodo = (id: number): ActionTypes => ({
  type: DELETE_TODO,
  payload: id,
});
export const toggleTodo = (id: number): ActionTypes => ({
  type: TOGGLE_TODO,
  payload: id,
});
export const updateTodo = (id: number, text: string): ActionTypes => ({
  type: UPDATE_TODO,
  payload: {
    id,
    text,
  },
});
export const setTodos = (list: Todo[]): ActionTypes => ({
  type: SET_TODOS,
  payload: list,
});
export const setNewTodo = (text: string): ActionTypes => ({
  type: SET_NEW_TODO,
  payload: text,
});
