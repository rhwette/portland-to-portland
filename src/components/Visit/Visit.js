import { Box, Text, Button } from '@chakra-ui/react';
// import visitImage from '../../assets/images/Visit-Us.png';
import './Visit.css';

const Visit = () => {
  return (
    <Box className="visit_image">
      <Text className="visit_textLarge">Visit Us</Text>
      {/* <Text className="visit_textSmall">
        Year-round Practicum&nbsp;Art&nbsp;Gallery
        404&nbsp;Tim&nbsp;Berners-Lee&nbsp;Ave
      </Text> */}
      <Text className="visit_textSmall">Year-Round</Text>
      <Text className="visit_textSmall">Practicum Art Gallery</Text>
      <Text className="visit_textSmall">404 Tim Berner-Lee Ave</Text>
      {/* <Image src={visitImage} boxSize="60px" marginLeft={'10px'} /> */}
      <Button
        className="visit_button"
        colorScheme="blue"
        href="https://practicum.yandex.com"
      >
        Buy tickets
      </Button>
    </Box>
  );
};

export default Visit;
