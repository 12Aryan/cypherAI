import {  Flex, Image, Text } from "@chakra-ui/react";
import Card from "../../common/card/Card";
import InputBox from "../input-box/InputBox";
import {
  getAIResponse,
  getLoading,
  getRecentPrompt,
  getShowResult,
} from "../../../redux/ChatWithAISlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { assets } from "../../../assets/assets";
import { useTypingEffect } from "../../../hooks/UseTypingEffect";

const ChatContainer = () => {
  const aiResponse: string = useSelector(getAIResponse);
  const showResult: boolean = useSelector(getShowResult);
  const recentPrompt: string = useSelector(getRecentPrompt);
  const loading: boolean = useSelector(getLoading);
  const [aiResponseData, setAIResponseData] = useState<string>("");

  useEffect(() => {
    setAIResponseData(aiResponse || "");
  }, [aiResponse]);

  const typedText = useTypingEffect(aiResponseData || "", 8);

  return (
    <Flex
      className="chat-container"
      maxW={"900px"}
      m={"0 auto auto"}
      direction={"column"}
      w={"100%"}
      bg={'#0F1C2E'}
    >
      {!showResult ? (
        <>
        <Flex justify={'center'} width={'100%'}>

          <Flex
            className="greet"
            m={{tablet: '2px 0px', laptop: '35px 0px', laptopL :"40px 0px"}}
            fontSize={{base: '20px', smMobile :'25px',mobile: '30px', tablet : '40px' ,laptop: "52px", laptopL: '56px'}}
            color={"#c4c7c5"}
            fontWeight={"500"}
            padding={"20px"}
            direction={"column"}
            width={{ base: "80%", mobile: "70%", tablet: "70%", laptop: "100%" }}

          >
            <Text as={"span"}>Hey, there!</Text>
            <Text color={'#acc2ef'}>How can I assist you today?</Text>
          </Flex>
        </Flex>
          <Flex justify={'center'} className="cards" w={'100%'}>
            <Card />
          </Flex>
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
            <Text color={'#c4d6fb'}  >{recentPrompt}</Text>
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
              <pre
                style={{
                  fontSize: "17px",
                  fontWeight: "300",
                  lineHeight: 1.6,
                  maxWidth: "900px",
                  textWrap: "wrap",
                  color: "#c4d6fb",
                }}
                dangerouslySetInnerHTML={{ __html: typedText || "" }}
              ></pre>
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
