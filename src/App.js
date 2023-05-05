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
          <GridItem area="header" bg="lightblue">
            Header
          </GridItem>

          <GridItem area="intro" bg="lightgreen">
            Intro
          </GridItem>

          <GridItem area="locations" bg="lightslategray">
            Locations
          </GridItem>

          <GridItem area="visit" bg="lavender">
            Visit
          </GridItem>

          <GridItem area="footer" bg="lightsteelblue">
            Footer
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
