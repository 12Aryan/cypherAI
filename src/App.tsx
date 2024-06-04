import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/common/sidebar/Sidebar.js";
import Main from "./components/main/Main.js";
import Toaster from "./components/common/toaster/Toaster.js";
import { useSelector } from "react-redux";
import { getToast } from "./redux/SharedSlice.js";

const App = () => {
  const toaster = useSelector(getToast);
  return (
    <Flex position={"relative"}>
      {toaster && <Toaster toastMessage="internal server error" />}
      <Sidebar />
      <Main />
    </Flex>
  );
};

export default App;
