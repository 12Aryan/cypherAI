import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../main-store/store";
import {
  chatWithAI,
  emptyAIResponse,
  getInputPrompt,
  setInputPrompt,
  setPreviousPrompts,
  setRecentPrompt,
  setShowResult,
} from "../../../redux/ChatWithAISlice";
import { PiMicrophoneBold } from "react-icons/pi";
import { IoSend } from "react-icons/io5";
import { TbPhoto } from "react-icons/tb";

const InputBox = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const inputPrompt: string = useSelector(getInputPrompt);

  const handleInputChange = (value: string) => {
    dispatch(setInputPrompt(value));
  };
  const handleSendPrompt = () => {
    dispatch(emptyAIResponse());
    dispatch(setShowResult(true));
    dispatch(setRecentPrompt(inputPrompt));
    dispatch(setPreviousPrompts(inputPrompt));
    dispatch(setInputPrompt(""));
    dispatch(chatWithAI(inputPrompt));
  };

  const handleInputKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSendPrompt();
    }
  };

  return (
    <Flex>
      <Box
        className="main-bottom"
        position={"absolute"}
        bottom={{ smMobile: "-50px", mobile: "-25px", tablet: 0 }}
        w={"100%"}
        maxW={"900px"}
        p={"0px 20px"}
        margin={"auto"}
        bg={"#0F1C2E"}
      >
        <Flex
          className="input-box"
          align={"center"}
          justifyContent={"space-between"}
          gap={"20px"}
          bg={"#1f2b3e"}
          p={"10px 20px"}
          borderRadius={"50px"}
        >
          <Input
            value={inputPrompt}
            onChange={(e) => {
              handleInputChange(e.target.value);
            }}
            onKeyDown={(e) => handleInputKeyPress(e)}
            type="text"
            flex={1}
            bg={"transparent"}
            border={"none"}
            outline={"none"}
            p={"8px"}
            placeholder="Enter a prompt here"
            _focusVisible={{ border: "none !important", outline: "none" }}
            color={"#c4d6fb"}
          />
          <Flex align={"center"} gap={"15px"}>
            <Box
              cursor={"pointer"}
              onClick={() => {}}
              title="Currently inactive"
            >
              <TbPhoto size={"20px"} color="#9dabc7" />
            </Box>
            <Box
              cursor={"pointer"}
              onClick={() => {}}
              title="Currently inactive"
            >
              <PiMicrophoneBold size={"20px"} color="#9dabc7" />
            </Box>
            {inputPrompt && (
              <Box cursor={"pointer"} onClick={handleSendPrompt}>
                <IoSend size={"18px"} color="#9dabc7" />
              </Box>
            )}
          </Flex>
        </Flex>
        <Text
          fontSize={"13px"}
          m={"15px auto"}
          textAlign={"center"}
          fontWeight={"300"}
          color={"#9dabc7"}
        >
          Cypher is evolving everyday, it may display inaccurate info sometimes,
          do cross check with other trusted sources
        </Text>
      </Box>
    </Flex>
  );
};

export default InputBox;
