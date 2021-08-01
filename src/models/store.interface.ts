import Todo from "./todo.interface";

export default interface Store {
  todos: Todo[];
  newTodo: string;
}
