import { Flex } from "@chakra-ui/react";
import Navbar from "../../common/navbar/Navbar";
import ChatContainer from "../chat-container/ChatContainer";

const Main = () => {
  return (
    <>
      <Flex
        className="main"
        flex={1}
        minH={"100vh"}
        pb={"15vh"}
        position={"relative"}
        direction={"column"}
        bg={'#0F1C2E'}
      >
        <Navbar />
        <ChatContainer />
      </Flex>
    </>
  );
};

export default Main;
