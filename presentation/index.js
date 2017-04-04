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
          <Heading size={5}>Address Form gif</Heading>
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
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1}>FEATURES:</Heading>
          <Heading size={5}>Rep Index to Rep Page Gif</Heading>
          <List>
            <Appear>
              <ListItem>News Alerts</ListItem>
            </Appear>
            <Appear>
              <ListItem>General Information</ListItem>
            </Appear>
            <Appear>
              <ListItem>Articles</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1}>FEATURES:</Heading>
          <Heading size={5}>APIs</Heading>
          <List>
            <Appear>
              <ListItem>NYT</ListItem>
            </Appear>
            <Appear>
              <ListItem>ProPublica</ListItem>
            </Appear>
            <Appear>
              <ListItem>Google Maps / Civic Information</ListItem>
            </Appear>
            <Appear>
              <ListItem>Wikipedia</ListItem>
            </Appear>
            <Appear>
              <ListItem>Twitter</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1}>FEATURES:</Heading>
          <Heading size={5}>Native App gif in phone image</Heading>
          <List>
            <Appear>
              <ListItem>Native Capability for iOS and Android</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1}>Roadblocks</Heading>
          <List>
            <Appear>
              <ListItem>Article Search</ListItem>
            </Appear>
            <Appear>
              <ListItem>Representatives</ListItem>
            </Appear>
            <Appear>
              <ListItem>APIs</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1}>Roadmap</Heading>
          <List>
            <Appear>
              <ListItem>Local Representatives</ListItem>
            </Appear>
            <Appear>
              <ListItem>Better ways to contact: twitter, email form</ListItem>
            </Appear>
            <Appear>
              <ListItem>Automated Alerts: mailers</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={1}>Techstack</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Civis
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
