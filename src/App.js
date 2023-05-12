import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Locations from './components/Locations/Locations';
import Visit from './components/Visit/Visit';
import Footer from './components/Footer/Footer';
import { cityData } from './Helper/Helper';

function App() {
  console.log('cityData', cityData);

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
            <Intro />
          </GridItem>

          <GridItem area="locations" bg="#2A2C2F">
            {cityData.map(cityData => {
              console.log('cityData', cityData);
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
