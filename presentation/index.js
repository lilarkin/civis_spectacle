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
        <Slide transition={["slide"]}  textColor="senary" bgColor="quartenary">
          <Typeface googleFont="Raleway" weight={600}>
            <Heading textColor="black"  size={1} fit caps lineHeight={1}>THE PROBLEM</Heading>
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
        <Slide transition={["spin"]} bgImage={images.hands} bgDarken={0.75}>
          <Typeface googleFont="Raleway" weight={600}>
            <Heading size={1} fit caps lineHeight={1} textColor="#039be5" >THE SOLUTION:</Heading>
          </Typeface>
          <BlockQuote>
            <Quote>
              <Heading size={4} textColor='white'>
              A modern web application that makes it easy to stay informed and
              in touch with your representatives.
              </Heading>
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary" textColor="secondary">
          <Heading size={1} textColor="secondary">FEATURES</Heading>
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
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={1} textColor="secondary">FEATURES</Heading>
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
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={1} textColor="secondary">FEATURES</Heading>
          <Heading size={5}>Native App gif in phone image</Heading>
          <List>
            <Appear>
              <ListItem>Native Capability for iOS and Android</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={1} textColor="secondary">FEATURES</Heading>
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
          <Heading size={1}>Techstack</Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.lightbulb} bgDarken={0.75} textColor="tertiary">
          <Heading size={1} style={{marginTop: "0px"}}>Learning Process</Heading>
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
        <Slide transition={["spin"]} bgImage={images.road} bgDarken={0.75} textColor="tertiary">
          <Heading size={1}>Moving Forward</Heading>
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
        
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Civis
          </Heading>
        </Slide>
      </Deck>
    );
  }
}



      /*<Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
        



          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Heading textColor="secondary" textFont="primary" textAlign="left" >
                FEATURES:
                <Heading size={2} textColor="primary" textFont="primary" align="flex-start flex-start" textAlign="left">
                  Map View
                  <List textColor="secondary" style={{lineHeight: '1.5', marginTop: '30px', marginRight: "20px", listStylePosition: "outside", paddingLeft: "40px"}}>
                    <Appear><ListItem>Google Maps JS API</ListItem></Appear>
                    <Appear><ListItem>Custom SVG Markers</ListItem></Appear>
                    <Appear><ListItem>Event Preview Info Windows</ListItem></Appear>
                  </List>
                </Heading>
              </Heading>
              <Image src={images.mapview} height="600px" margin="20px"/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Heading textColor="primary" textFont="primary" textAlign="left" >
                FEATURES:
                <Heading size={2} textColor="secondary" textFont="primary" align='flex-start flex-start' textAlign="left">
                  List View
                  <List textColor="primary" style={{lineHeight: '1.5', marginTop: '30px', marginRight: "20px", listStylePosition: "outside", paddingLeft: "40px"}}>
                    <Appear><ListItem>Instant Toggle List/Map</ListItem></Appear>
                    <Appear><ListItem>Structured View</ListItem></Appear>
                    <Appear><ListItem>Sorted By Time</ListItem></Appear>
                  </List>
                </Heading>
              </Heading>
              <Image src={images.listview} height="600px" style={{marginLeft: "120px"}}/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Heading textColor="secondary" textFont="primary" textAlign="left" >
                FEATURES:
                <Heading size={2} textColor="primary" textFont="primary" align='flex-start flex-start' textAlign="left">
                  Detail View
                  <List textColor="secondary" style={{lineHeight: '1.5', marginTop: '30px', marginRight: "20px", listStylePosition: "outside", paddingLeft: "40px"}}>
                    <Appear><ListItem>All Event Information</ListItem></Appear>
                    <Appear><ListItem>Get Directions</ListItem></Appear>
                  </List>
                </Heading>
              </Heading>
              <Image src={images.detailview} height="600px" style={{marginLeft: "120px"}}/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Heading textColor="primary" textFont="primary" textAlign="left" >
                FEATURES:
                <Heading size={2} textColor="secondary" textFont="primary" align='flex-start flex-start' textAlign="left">
                  Filter
                  <List textColor="primary" style={{lineHeight: '1.5', marginTop: '30px', marginRight: "20px", listStylePosition: "outside", paddingLeft: "40px"}}>
                    <Appear><ListItem>Filter By Date</ListItem></Appear>
                    <Appear><ListItem>Filter By Category</ListItem></Appear>
                  </List>
                </Heading>
              </Heading>
              <Image src={images.filter} height="600px" style={{marginLeft: "120px"}}/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="white">
            <Layout>
              <Heading textColor="secondary" textFont="primary" textAlign="left" >
                FEATURES:
                <Heading size={2} textColor="primary" textFont="primary" align='flex-start flex-start' textAlign="left">
                  Add Event
                  <List textColor="secondary" style={{lineHeight: '1.5', marginTop: '30px', marginRight: "20px", listStylePosition: "outside", paddingLeft: "40px"}}>
                    <Appear><ListItem>Address Geocoded</ListItem></Appear>
                    <Appear><ListItem>Date + Time = Unix Timestamp</ListItem></Appear>
                  </List>
                </Heading>
              </Heading>
              <Image src={images.addEvent} height="600px" style={{marginLeft: "120px"}}/>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.roadblock} bgDarken={0.75}>
            <Heading size={1} caps fit textColor="primary" textFont="primary">
              Roadblocks
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Broken Google Maps API Packages. Un-Stateful!</ListItem></Appear>
              <Appear><ListItem>Markers At Same Location, Clustering</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.road} bgDarken={0.75}>
            <Heading size={2} caps fit textColor="white">
              Roadmap
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Adding Events To Calendars</ListItem></Appear>
              <Appear><ListItem>Search Function</ListItem></Appear>
              <Appear><ListItem>Admin Backend</ListItem></Appear>
              <Appear><ListItem>Upvoting, Tags, & Comments</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.js} height="170px" style={{margin: "10px"}} />
            <Image src={images.github} height="170px" style={{margin: "10px"}} />
            <Image src={images.googlemap} height="170px" style={{margin: "10px"}} />
            <Image src={images.heroku} height="170px" style={{margin: "10px"}} />
            <Image src={images.materialize} height="170px" style={{margin: "10px"}} />
            <Heading size={2} caps fit textColor="white" textFont="primary" style={{padding: "10px"}}>
              Technology Stack
            </Heading>
            <Image src={images.momentjs} height="170px" style={{margin: "10px"}}/>
            <Image src={images.mongodb} height="170px" style={{margin: "10px"}}/>
            <Image src={images.nodejs} height="170px" style={{margin: "10px"}}/>
            <Image src={images.react} height="170px" style={{margin: "10px"}}/>
            <Image src={images.redux} height="170px" style={{margin: "10px"}}/>
          </Slide>
          <Slide transition={["zoom"]} bgColor="secondary">
            <Image src={images.thehaps} height="293px"/>
            <Heading size={1} fit textColor="#40c4ff">
              http://thehapsmap.com
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>*/
