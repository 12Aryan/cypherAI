import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Card from "../../common/card/Card";
import InputBox from "../input-box/InputBox";
import {
  getAIResponse,
  getRecentPrompt,
  getShowResult,
} from "../../../redux/ChatWithAISlice";
import { useSelector } from "react-redux";
import { assets } from "../../../assets/assets";

const ChatContainer = () => {
  const aiResponse: string | null = useSelector(getAIResponse);
  const showResult: boolean = useSelector(getShowResult);
  const recentPrompt: string = useSelector(getRecentPrompt);
  return (
    <Flex
      className="chat-container"
      maxW={"900px"}
      m={"auto"}
      direction={"column"}
      w={"100%"}
    >
      {!showResult ? (
        <>
          {" "}
          <Flex
            className="greet"
            m={"50px 0px"}
            fontSize={"56px"}
            color={"#c4c7c5"}
            fontWeight={"500"}
            padding={"20px"}
            direction={"column"}
          >
            <Text as={"span"}>Hey, Dev.</Text>
            <Text>How can i assist you today?</Text>
          </Flex>
          <Box className="cards">
            <Card />
          </Box>
        </>
      ) : (
        <Flex className="result" direction={"column"} w={"100%"}>
          <Flex className="result-title">
            <Image w={"25px"} src={assets.user_icon} />
            <Text>{recentPrompt}</Text>
          </Flex>
          <Flex className="result-data">
            <Image w={"25px"} h={"25px"} src={assets.gemini_icon} />
            <Text dangerouslySetInnerHTML={{ __html: aiResponse || "" }}></Text>
          </Flex>
        </Flex>
      )}
      <Flex>
        <InputBox />
      </Flex>
    </Flex>
  );
};

export default ChatContainer;
