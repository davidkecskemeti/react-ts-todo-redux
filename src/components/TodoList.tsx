import { Heading } from "@chakra-ui/react";
import Todo from "../todo.interface";
import TodoListItem from "./TodoListItem";

export interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  return (
    <>
      <Heading>Todo List</Heading>
      {[].map((todo: Todo) => (
        <TodoListItem todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
