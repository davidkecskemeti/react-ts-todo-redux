import "./App.css";
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import TopBar from "./components/TodoBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
