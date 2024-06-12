import { SimpleGrid, Flex, Image, Text } from "@chakra-ui/react";
import { chatCardsData } from "../../../global-data/GlobalData";

const Card = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, mobile: 1, tablet: 2, laptop: 4 }}
      spacing="15px"
      padding="20px"
      width={{ base: "80%", mobile: "70%", tablet: "70%", laptop: "100%" }}
    >
      {chatCardsData &&
        chatCardsData.length &&
        chatCardsData.map((chatCard, index) => (
          <Flex
            key={index}
            // h={"200px"}
            h={{base: "130px", mobile: "130px", tablet: "130px", laptop: "200px"}}
            p={"15px"}
            bg={'linear-gradient(90deg, #1F3A5F, #374357)'}
            borderRadius={"10px"}
            position={"relative"}
            cursor={"pointer"}
            direction={"column"}
            _hover={{ bg: "linear-gradient(90deg, #1F3A5F, #4d648d)" }}
            
          >
            <Text color={'#c4d6fb'}>{chatCard?.title}</Text>
            <Flex align={"center"} width={"100%"} justify={"center"}>
              <Image
                w={"35px"}
                p={"5px"}
                pos={"absolute"}
                bg={"linear-gradient(90deg, #4d648d, #acc2ef)"}
                bottom={"10px"}
                right={"10px"}
                src={chatCard?.url}
                borderRadius={"50%"}
                
                
              />
            </Flex>
          </Flex>
        ))}
    </SimpleGrid>
  );
};

export default Card;
