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
  Typeface,
  Layout,
  Image,
  Fill,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  congress: require("../assets/congress.png"),
  hands: require("../assets/hands.jpg"),
  lightbulb: require("../assets/lightbulb.jpg"),
  road: require("../assets/road.jpg"),
  propublica: require("../assets/propublica.png"),
  nyt: require("../assets/nyt-t-logo.png"),
  googlemap: require("../assets/googlemap.png"),
  wikipedia: require("../assets/wikipedia.png"),
  twitter: require("../assets/twitter.png"),
  rails: require("../assets/rails.png"),
  ruby: require("../assets/ruby.png"),
  fontawesome: require("../assets/fontawesome.png"),
  github: require("../assets/github.png"),
  js: require("../assets/js.png"),
  materialize: require("../assets/materialize.png"),
  react: require("../assets/react.png"),
  redux: require("../assets/redux.png"),
  heroku: require("../assets/heroku.png"),
  addressForm: require("../assets/addressForm.gif"),
  civisNative: require("../assets/civisNative.gif"),
  rep: require("../assets/rep.gif"),
  prompic: require("../assets/prompic.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "linear-gradient(to left, #A43931, #1D4350 )",
  secondary: "#1D4350", //blue
  tertiary: "#fff",
  quartenary: "#757575",// grey
  quinary: "#A43931", //red
  senary: "000000"

}, {
  primary: { name: "Lato", googleFont: true, styles: [ "400", "700i" ] },
  secondary: { name: "Raleway", googleFont: true, styles: [ "400", "700i" ] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Typeface googleFont="Raleway" weight={600}>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary" textFont="secondary">
            Civis
            </Heading>
          </Typeface>
            <Appear>
              <Text transition={["zoom"]}
                margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                Democracy Depends on You!
              </Text>
            </Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.congress}>
          <Typeface googleFont="Raleway" weight={600}>
            <Heading textColor="quinary" size={1}>Why Civis?</Heading>
            <br />
          </Typeface>
            <Appear>
              <Heading size={5} textColor="senary">Civis makes it easy to stay informed and in touch with your legislators.
              </Heading>
            </Appear>
            <br />
            <Appear>
              <Heading size={5} textColor="senary">For people who want to be politically active!</Heading>
            </Appear>
        </Slide>
        <Slide transition={["slide"]}  textColor="senary" bgColor="#424242">
          <Typeface googleFont="Raleway" weight={600}>
            <Heading textColor="#9e9e9e"  size={1} fit caps lineHeight={1}>THE PROBLEM</Heading>
          </Typeface>
          <List textColor='white'>
            <Appear>
              <ListItem>Complicated Government Websites</ListItem>
            </Appear>
            <Appear>
              <ListItem>Information Overload</ListItem>
            </Appear>
            <Appear>
              <ListItem>Busy Lives</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgImage={images.hands} bgDarken={0.65}>
          <Typeface googleFont="Raleway" weight={600}>
            <Heading size={1} fit caps lineHeight={1} textColor="#039be5" >THE SOLUTION:</Heading>
          </Typeface>
          <BlockQuote>
            <Quote>
              <Heading size={4} textColor='white'>
              A modern, user-friendly web application that keeps you informed and in touch with your legislators.
              </Heading>
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary" textColor="secondary">
          <Heading size={1} textColor="secondary">FEATURES</Heading>
          <Heading size={4} textColor='quinary'>Find your legislators:</Heading>
          <br />
          <Heading>
             <Image src={images.addressForm} style={{ border: 'black solid 3px'}}/>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={1} textColor="secondary">FEATURES</Heading>
          <Heading size={4} textColor='quinary'>Learn about your legislators:</Heading>
          <br />
          <Heading>
             <Image src={images.rep} style={{ border: 'black solid 3px'}}/>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Layout>
            <Heading size={2} textColor="secondary" align="flex-start flex-start" textAlign="left">FEATURES
            <br />
            <Heading size={5} textColor='quinary'>
              Available for Native
            </Heading>
            <Heading size={5} textColor='quinary'>
              iOS and Android
            </Heading>
            </Heading>
            <br />
            <Image src={images.civisNative} style={{ border: 'black solid 3px'}} textAlign="right" height="600px"/>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={3} textColor="secondary">FEATURES</Heading>
          <Heading size={6}>APIs</Heading>
            <List textAlign='center'>
              <Layout>
                <Fill>
                <Appear>
                  <Image src={images.propublica} height="100px" style={{margin: "10px"}}  />
                </Appear>
                </Fill>
                <Fill>
                <Appear>
                  <Image src={images.nyt} height="100px" style={{margin: "10px"}}  />
                </Appear>
                </Fill>
                <Fill>
                <Appear>
                  
                  <Image src={images.googlemap} height="100px" style={{margin: "10px"}}  />
                </Appear>
                </Fill>
              </Layout>
              <Layout>
                <Fill>
                <Appear>
                  <Image src={images.wikipedia} height="100px" />
                </Appear>
                </Fill>
                <Fill>
                <Appear>
                  <Image src={images.twitter} height="100px"  />
                </Appear>
                </Fill>
              </Layout>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary" textColor="tertiary">
            <Image src={images.ruby} height="100px" style={{margin: "10px"}} />
            <Image src={images.react} height="100px" style={{margin: "10px"}} />
            <Image src={images.redux} height="100px" style={{margin: "10px"}} />
            <Image src={images.js} height="100px" style={{margin: "10px"}} />
            <Heading size={2} caps fit textColor="white" textFont="primary" style={{padding: "10px"}}>
              Technology Stack
            </Heading>
            <Image src={images.rails} height="100px" style={{margin: "10px"}}/>
            <Image src={images.github} height="100px" style={{margin: "10px"}}/>
            <Image src={images.heroku} height="100px" style={{margin: "10px"}}/>
            <Image src={images.materialize} height="100px" style={{margin: "10px"}}/>
            <Image src={images.fontawesome} height="100px" style={{margin: "10px"}}/>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.lightbulb} bgDarken={0.75} textColor="tertiary">
          <Heading size={1} style={{marginTop: "0px"}}>Learning Process</Heading>
          <List>
            <Appear>
              <ListItem>Article Search</ListItem>
            </Appear>
            <Appear>
              <ListItem>Database Structure</ListItem>
            </Appear>
            <Appear>
              <ListItem>Integrating APIs</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgImage={images.road} bgDarken={0.75} textColor="tertiary">
          <Heading size={1}>Moving Forward</Heading>
          <List>
            <Appear>
              <ListItem>Local Legislators</ListItem>
            </Appear>
            <Appear>
              <ListItem>Improved Contact Methods</ListItem>
            </Appear>
            <Appear>
              <ListItem>Improved News Alerts</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgImage={images.prompic}>
        </Slide>
      </Deck>
    );
  }
}
