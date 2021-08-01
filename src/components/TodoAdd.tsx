import { Button, Grid, Input } from "@chakra-ui/react";

export interface TodoAddProps {}

const TodoAdd: React.FC<TodoAddProps> = () => {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo" />
      <Button>Add Todo</Button>
    </Grid>
  );
};

export default TodoAdd;
