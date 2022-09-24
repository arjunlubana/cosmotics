import { Box, Heading, Image } from "@chakra-ui/react";

export default function Headline() {
  return (
    <Box sx={{ position: "static", w: "100%", h: "100vh", mb: "5" }}>
      <Heading
        size="4xl"
        sx={{ position: "absolute", top: "50vh", ml: "0.5em" }}
      >
        Lighten <br />
        Up Your <br />
        Skin
      </Heading>
      <Image
        src="images/lume-wellness-zpMn92OY4I8-unsplash.jpg"
        alt="Woman holding body cream tube."
      />
    </Box>
  );
}
