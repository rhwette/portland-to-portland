import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Locations from './components/Locations/Locations';
import Visit from './components/Visit/Visit';
import Footer from './components/Footer/Footer';
import { cityData } from './Helper/Helper';
import { introData } from './Helper/Helper';

function App() {
  return (
    <Box className="container">
      <Box marginRight={'10px'} marginLeft={'10px'} h="100%">
        <Grid
          templateAreas={`  "header"
                                  "intro"
                                  "locations"
                                  "visit"
                                  "footer"
                                  `}
        >
          <GridItem area="header" bg="#2A2C2F">
            <Header />
          </GridItem>

          <GridItem area="intro" bg="#2A2C2F">
            {introData.map(introData => {
              console.log('introData', introData);
              return (
                <Intro
                  key={introData.introTitle}
                  introTitle={introData.introTitle}
                  introSubTitle={introData.introSubTitle}
                  introPic={introData.introPic}
                  introTextTop={introData.introTextTop}
                  introTextMid={introData.introTextMid}
                  introTextAuth={introData.introTextAuth}
                  introTextBot={introData.introTextBot}
                  introGridPics={introData.introGridPics}
                ></Intro>
              );
            })}
            <Intro />
          </GridItem>

          <GridItem area="locations" bg="#2A2C2F">
            {cityData.map(cityData => {
              return (
                <Locations
                  key={cityData.cityName}
                  cityName={cityData.cityName}
                  cityPic={cityData.cityPic}
                  cityArtistLabel={cityData.cityArtistLabel}
                  cityArtistName={cityData.cityArtistName}
                  cityDescription={cityData.cityDescription}
                ></Locations>
              );
            })}
          </GridItem>

          <GridItem area="visit" bg="#2A2C2F">
            <Visit />
          </GridItem>

          <GridItem area="footer" bg="#2A2C2F">
            <Footer />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
