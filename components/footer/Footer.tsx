import { Flex, Grid, GridItem, Heading, Spacer, Text } from "@chakra-ui/react";
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
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      sx={{
        gap: 3,
        maxWidth: "70vw",
        minHeight: "200px",
        mx: "auto",
        p: "1rem",
        color: "teal"
      }}
    >
      <GridItem rowSpan={2} colSpan={2} borderRight="1px solid teal">
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
          <Text>Made with ❤️ By A.L.Singh</Text>
        </Flex>
      </GridItem>

      <GridItem
        rowSpan={2}
        colSpan={3}
        as={Flex}
        sx={{
          flexDirection: "column",
          justifyContent: "space-around",
          ml: "2rem",
        }}
      >
        <Heading as={"h5"} size={"sm"} >
          Reach Out :
        </Heading>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          sx={{
            gridRowGap: "2rem",
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
  );
}
