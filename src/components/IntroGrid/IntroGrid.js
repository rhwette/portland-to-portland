import { Image } from '@chakra-ui/react';

const IntroGrid = ({ introGridPics }) => {
  return (
    <Image key={introGridPics} src={introGridPics} boxSize="150px" pb="15px" />
  );
};

export default IntroGrid;
