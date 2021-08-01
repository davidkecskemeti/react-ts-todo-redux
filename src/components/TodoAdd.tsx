import { Button, Grid, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Store from "../models/store.interface";
import { addTodo, setNewTodo } from "../store/actions";

export interface TodoAddProps {}

const TodoAdd: React.FC<TodoAddProps> = () => {
  const newTodo = useSelector((state: Store) => state.newTodo);
  const dispatch = useDispatch();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={(event) => dispatch(setNewTodo(event.target.value))}
      />
      <Button onClick={() => dispatch(addTodo())}>Add Todo</Button>
    </Grid>
  );
};

export default TodoAdd;
