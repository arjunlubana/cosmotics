import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import { SiHashnode } from "react-icons/si";
import { FaDev } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" sx={{ bg: "teal", color: "white", py: "2rem"}}>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        sx={{
          gap: 3,
          maxWidth: "70vw",
          minHeight: "200px",
          mx: "auto",
          p: "1rem",
        }}
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "space-between",
              h: "100%",
            }}
          >
            <Heading as={"h4"} size={"md"} textAlign={"left"}>
              Cosmotics
            </Heading>
            <Text>One Stop Cosmetics Shop</Text>
            <Spacer />
            <Text>Built with 💌 by ALS 🧑‍💻.</Text>
          </Flex>
        </GridItem>

        <GridItem
          rowSpan={2}
          colSpan={3}
          as={Flex}
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mt: 5,
          }}
        >
          <Text>Don't be Shy😊 Reach Out</Text>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            sx={{
              gridRowGap: "2rem",
              gridColumnGap: "5rem",
              fontSize: "28px",
            }}
          >
            <SiHashnode />
            <RiInstagramFill />
            <FaDev />
            <RiLinkedinBoxFill />
            <RiGithubFill />
            <RiTwitterFill />
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
