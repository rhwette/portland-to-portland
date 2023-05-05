import { Flex, Image } from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Flex justifyContent="center" alignItems={'center'}>
      <Image src={logo} boxSize="80px" />
    </Flex>
  );
};

export default Header;
