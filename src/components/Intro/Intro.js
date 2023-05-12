import { Flex, Image, Text, Box, Grid } from '@chakra-ui/react';
import './Intro.css';
import IntroGrid from '../IntroGrid/IntroGrid';

const Intro = ({
  introTitle,
  introSubTitle,
  introPic,
  introTextTop,
  introTextMid,
  introTextAuth,
  introTextBot,
  introGridPics,
}) => {
  return (
    <>
      <Flex justifyContent={'center'}>
        <Text className="introTextLarge" w={'50%'} mt={'125px'}>
          {introTitle}
        </Text>
      </Flex>

      <Flex justifyContent={'center'}>
        <Text className="introTextMedium" w={'75%'} mt="50px">
          {introSubTitle}
        </Text>
      </Flex>

      <Flex justifyContent="center">
        <Image src={introPic} boxSize="100%" mt="50px" mb="40px" />
      </Flex>

      <Flex justifyContent={'center'}>
        <Text
          className="introTextLarge"
          textAlign={'left'}
          w={'65%'}
          mt="50px"
          mb="40px"
        >
          {introTextTop}
        </Text>
      </Flex>

      <Flex justifyContent={'center'}>
        <Text
          className="introTextMediumSmall"
          textAlign={'left'}
          w={'65%'}
          mt="50px"
        >
          {introTextMid}
        </Text>
      </Flex>

      <Flex justifyContent={'center'}>
        <Text
          className="introTextMediumSmall"
          textAlign={'right'}
          w={'65%'}
          mb="30px"
        >
          {introTextAuth}
        </Text>
      </Flex>

      <Flex justifyContent={'center'}>
        <Text className="introTextSmall" textAlign={'left'} w={'65%'} mb="40px">
          {introTextBot}
        </Text>
      </Flex>

      <Box display="flex" justifyContent={'center'}>
        <Grid className="introGrid">
          {introGridPics?.map(introGridPics => {
            return (
              <IntroGrid key={introGridPics} introGridPics={introGridPics} />
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Intro;
