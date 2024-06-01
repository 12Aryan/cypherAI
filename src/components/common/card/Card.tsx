import { Flex, Image, Text } from "@chakra-ui/react";
import { chatCardsData } from "../../../global-data/GlobalData";

const Card = () => {
  return (
    <Flex gap="15px" padding="20px">
      {chatCardsData &&
        chatCardsData?.length &&
        chatCardsData?.map((chatCard, index) => (
          <Flex
            flex={1}
            className="card"
            key={index}
            h={"200px"}
            p={"15px"}
            bg={"#f0f4f9"}
            borderRadius={"10px"}
            position={"relative"}
            cursor={"pointer"}
            // border={"1px solid red"}
            direction={"column"}
          >
            <Text>{chatCard?.title}</Text>
            <Flex align={"center"} width={"100%"} justify={"center"}>
              <Image
                w={"35px"}
                p={"5px"}
                pos={"absolute"}
                bg={"white"}
                bottom={"10px"}
                right={"10px"}
                src={chatCard?.url}
              />
            </Flex>
          </Flex>
        ))}
    </Flex>
  );
};

export default Card;
