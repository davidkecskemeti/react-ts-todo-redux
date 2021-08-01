import { Button, Grid } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getTodos } from "../store/actions";
import ColorModeSwitcher from "./ColorModeSwitcher";

export interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  const dispatch = useDispatch();
  const todoUrl =
    "https://raw.githubusercontent.com/davidkecskemeti/react-ts-todo-redux/redux-thunk/todos.json";
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={() => dispatch(getTodos(todoUrl))}>Load</Button>
    </Grid>
  );
};

export default TopBar;
