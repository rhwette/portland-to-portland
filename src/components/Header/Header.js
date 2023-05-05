import { Flex, Image } from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Flex justifyContent="left" alignItems={'center'}>
      <Image src={logo} boxSize="60px" marginLeft={'10px'} />
    </Flex>
  );
};

export default Header;
