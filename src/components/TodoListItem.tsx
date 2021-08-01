import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import Todo from "../todo.interface";

export interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <Flex pt={2} key={todo.id}>
      <Checkbox />
      <Input mx={2} value={todo.text} />
      <Button>Delete</Button>
    </Flex>
  );
};

export default TodoListItem;
