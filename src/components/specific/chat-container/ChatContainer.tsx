import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Card from "../../common/card/Card";
import InputBox from "../input-box/InputBox";
import {
  getAIResponse,
  getLoading,
  getRecentPrompt,
  getShowResult,
} from "../../../redux/ChatWithAISlice";
import { useSelector } from "react-redux";
import { assets } from "../../../assets/assets";

const ChatContainer = () => {
  const aiResponse: string | null = useSelector(getAIResponse);
  const showResult: boolean = useSelector(getShowResult);
  const recentPrompt: string = useSelector(getRecentPrompt);
  const loading: boolean = useSelector(getLoading);
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
        <Flex
          className="result"
          p={"0px 5%"}
          maxH={"70vh"}
          overflowY={"scroll"}
          direction={"column"}
          w={"100%"}
        >
          <Flex
            className="result-title"
            m={"40px 0px"}
            align={"center"}
            gap={"20px"}
          >
            <Image w={"40px"} borderRadius={"50%"} src={assets.user_icon} />
            <Text>{recentPrompt}</Text>
          </Flex>
          <Flex className="result-data" align={"start"} gap={"20px"}>
            <Image h={"25px"} w={"25px"} src={assets.gemini_icon} />
            {loading ? (
              <Flex
                className="loader"
                direction={"column"}
                width={"100%"}
                gap={"10px"}
              >
                <hr />
                <hr />
                <hr />
              </Flex>
            ) : (
              <Text
                fontSize={"17px"}
                fontWeight={"300"}
                lineHeight={1.8}
                dangerouslySetInnerHTML={{ __html: aiResponse || "" }}
              ></Text>
            )}
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
