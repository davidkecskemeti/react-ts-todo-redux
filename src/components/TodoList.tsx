import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Store from "../models/store.interface";
import Todo from "../models/todo.interface";
import TodoListItem from "./TodoListItem";

export interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = () => {
  const todoList: Todo[] = useSelector((state: Store) => state.todos);
  return (
    <>
      <Heading>Todo List</Heading>
      {todoList.map((todo: Todo) => (
        <TodoListItem todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
