import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/common/sidebar/Sidebar.js";
import Main from "./components/main/Main.js";

const App = () => {
  return (
    <Flex>
      <Sidebar />
      <Main />
    </Flex>
  );
};

export default App;
