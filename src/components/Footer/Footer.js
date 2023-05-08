import { Flex, Image } from '@chakra-ui/react';
import footerImage from '../../assets/images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <Flex justifyContent="left" alignItems={'center'}>
      <Image
        className="footer"
        src={footerImage}
        boxSize="60px"
        marginLeft={'10px'}
      />
    </Flex>
  );
};

export default Footer;
