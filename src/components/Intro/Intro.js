import { Flex, Image, Text, Box, Grid } from '@chakra-ui/react';
import introImage from '../../assets/images/intro.png';
import './Intro.css';
import gridImage1a from '../../assets/images/grid1-1.png';
import gridImage1b from '../../assets/images/grid1-2.png';
import gridImage1c from '../../assets/images/grid1-3.png';
import gridImage1d from '../../assets/images/grid1-4.png';
import gridImage2a from '../../assets/images/grid2-1.png';
import gridImage2b from '../../assets/images/grid2-2.png';
import gridImage2c from '../../assets/images/grid2-3.png';
import gridImage2d from '../../assets/images/grid2-4.png';

const Intro = () => {
  return (
    <>
      <Flex justifyContent={'center'}>
        <Text className="introTextLarge" w={'50%'} mt={'125px'}>
          From Homeland to Homeland
        </Text>
      </Flex>

      <Flex justifyContent={'center'}>
        <Text className="introTextMedium" w={'75%'} mt="50px">
          An epic journey from Kentucky to Burundi through Wales and Ukraine
        </Text>
      </Flex>

      <Flex justifyContent="center">
        <Image src={introImage} boxSize="100%" mt="50px" mb="40px" />
      </Flex>

      <Flex justifyContent={'center'}>
        <Text
          className="introTextLarge"
          textAlign={'left'}
          w={'65%'}
          mt="50px"
          mb="40px"
        >
          Know the places your online pals come from a little better
        </Text>
      </Flex>

      <Flex justifyContent={'center'}>
        <Text
          className="introTextMediumSmall"
          textAlign={'left'}
          w={'65%'}
          mt="50px"
        >
          Every human being is an artist, a freedom being, called to participate
          in transforming and reshaping the conditions, thinking, and structures
          that shape and inform our lives.
        </Text>
      </Flex>

      <Flex justifyContent={'center'}>
        <Text
          className="introTextMediumSmall"
          textAlign={'right'}
          w={'65%'}
          mb="30px"
        >
          &#8212;Joseph Beuys
        </Text>
      </Flex>

      <Flex justifyContent={'center'}>
        <Text className="introTextSmall" textAlign={'left'} w={'65%'} mb="40px">
          The town of Practicum has brought together professionals from
          different corners of the world. Today, Practicum Art Gallery is proud
          to present stories and pictures from some of the people who dedicate
          their time and effort to making the future tech professionals of this
          town feel at home. Each of us has a unique story about the place we
          come from. Feel free to add your own story and a piece of visual art
          dedicated to your hometown to our collection. No matter where you're
          from, we're glad that you're our neighbor.
        </Text>
      </Flex>

      <Box display="flex" justifyContent={'center'}>
        <Grid className="introGrid">
          <Image src={gridImage1a} boxSize="150px" pb="15px" />
          <Image src={gridImage1b} boxSize="150px" pb="15px" />
          <Image src={gridImage1c} boxSize="150px" pb="15px" />
          <Image src={gridImage1d} boxSize="150px" pb="15px" />
        </Grid>
      </Box>

      <Box display="flex" justifyContent={'center'}>
        <Grid className="introGrid">
          <Image src={gridImage2a} boxSize="150px" pb="15px" />
          <Image src={gridImage2b} boxSize="150px" pb="15px" />
          <Image src={gridImage2c} boxSize="150px" pb="15px" />
          <Image src={gridImage2d} boxSize="150px" pb="15px" />
        </Grid>
      </Box>
    </>
  );
};

export default Intro;
