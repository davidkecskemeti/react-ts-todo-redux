import { createStore } from "redux";
import Store from "../models/store.interface";
import Todo from "../models/todo.interface";
import {
  ActionTypes,
  ADD_TODO,
  DELETE_TODO,
  SET_NEW_TODO,
  SET_TODOS,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "./actions";

const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

//Redux implementation
const todoReducer = (
  state: Store = {
    todos: [],
    newTodo: "",
  },
  action: ActionTypes
) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };
    case DELETE_TODO:
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload),
      };
    case SET_NEW_TODO:
      return {
        ...state,
        newTodo: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: updateTodo(state.todos, action.payload.id, action.payload.text),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: toggleTodo(state.todos, action.payload),
      };
    case ADD_TODO:
      return {
        ...state,
        newTodo: "",
        todos: addTodo(state.todos, state.newTodo),
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;
