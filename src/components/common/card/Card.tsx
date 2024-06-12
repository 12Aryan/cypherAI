import { SimpleGrid, Flex, Image, Text } from "@chakra-ui/react";
import { chatCardsData } from "../../../global-data/GlobalData";

const Card = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, mobile: 1, tablet: 2, laptop: 4 }}
      spacing="15px"
      padding="20px"
      width={{ base: "100%", mobile: "70%", tablet: "70%", laptop: "100%" }}
    >
      {chatCardsData &&
        chatCardsData.length &&
        chatCardsData.map((chatCard, index) => (
          <Flex
            key={index}
            h={"200px"}
            p={"15px"}
            bg={"#f0f4f9"}
            borderRadius={"10px"}
            position={"relative"}
            cursor={"pointer"}
            direction={"column"}
            _hover={{ bg: "#dfe4ea" }}
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
    </SimpleGrid>
  );
};

export default Card;
