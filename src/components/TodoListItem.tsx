import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import Todo from "../models/todo.interface";
import { deleteTodo, toggleTodo, updateTodo } from "../store/actions";

export interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <Flex pt={2} key={todo.id}>
      <Checkbox onClick={() => dispatch(toggleTodo(todo.id))} />
      <Input
        onChange={(event) => dispatch(updateTodo(todo.id, event.target.value))}
        mx={2}
        value={todo.text}
      />
      <Button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
    </Flex>
  );
};

export default TodoListItem;
