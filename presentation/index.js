// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "linear-gradient(to left, #A43931, #1D4350 )",
  secondary: "#1D4350", //blue
  tertiary: "#fff",
  quartenary: "#CECECE",
  quinary: "#DC2424",
  senary: "#4A569D"
}, {
  primary: "Avenir",
  secondary: "Railway"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Civis
          </Heading>
          <Appear>
            <Text transition={["zoom"]}
              margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              Be a Better Citizen
            </Text>
        </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} >The Problem:</Heading>
          <List>
            <Appear>
              <ListItem>Poor Ui</ListItem>
            </Appear>
            <Appear>
              <ListItem>Too Much Noise</ListItem>
            </Appear>
            <Appear>
              <ListItem>Apathy</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1} >The Solution:</Heading>
          <BlockQuote>
            <Quote>
              A modern web application that makes it easy to stay informed and
              in touch with your representatives.
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1}>FEATURES:</Heading>
          <Heading size={2}>Address Form gif</Heading>
          <List>
            <Appear>
              <ListItem>Find your Represntatives in Database</ListItem>
            </Appear>
            <Appear>
              <ListItem>Search by Address or Zip Code</ListItem>
            </Appear>
            <Appear>
              <ListItem>Geolocation</ListItem>
            </Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
