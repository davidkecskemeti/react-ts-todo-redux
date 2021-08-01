import "./App.css";
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import TopBar from "./components/TodoBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar />
        <TodoList />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  );
};

export default App;
