import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import './App.css';

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
          <GridItem area="header">{/* <Header></Header> */}</GridItem>

          <GridItem area="intro">{/* <Intro /> */}</GridItem>

          <GridItem area="locations">{/* <Locations /> */}</GridItem>

          <GridItem area="visit">{/* <Visit /> */}</GridItem>

          <GridItem area="footer" bg="black">
            {/* <Footer /> */}
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
