import { Box, Text, Button } from '@chakra-ui/react';
import './Visit.css';

const Visit = () => {
  return (
    <Box className="visit_image">
      <Text className="visit_textLarge">Visit Us</Text>
      <Text className="visit_textSmall">Year-Round</Text>
      <Text className="visit_textSmall">Practicum Art Gallery</Text>
      <Text className="visit_textSmall">404 Tim Berner-Lee Ave</Text>
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
