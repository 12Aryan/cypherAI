import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/common/sidebar/Sidebar.js";
import Toaster from "./components/common/toaster/Toaster.js";
import { useSelector } from "react-redux";
import { getToast } from "./redux/SharedSlice.js";
import ChatWithAI from "./features/chat-with-ai/ChatWithAI.js";

const App = () => {
  const toaster = useSelector(getToast);
  return (
    <Flex position={"relative"}>
      {toaster && <Toaster toastMessage="Internal server error" />}
      <Sidebar />
      <ChatWithAI />
    </Flex>
  );
};

export default App;
