import { Image, Box, Text, Button } from '@chakra-ui/react';
import './Locations.css';
import CityText from '../CityText/CityText';

const Locations = ({
  cityName,
  cityPic,
  cityArtistLabel,
  cityArtistName,
  cityDescription,
}) => {
  return (
    <>
      <Box className="locationLayout">
        {/* City = Ukraine */}
        <Box className="locationCity">
          <Text className="locationCity_name">{cityName}</Text>
          <Image className="locationCity_picture" src={cityPic} />
          <Button
            fontSize={'12px'}
            colorScheme="blue"
            className="locationCity_button"
            href="https://www.forbes.com/advisor/investing/nft-non-fungible-token/"
          >
            Buy this artwork as NFT
          </Button>

          <div className="locationCity_artist">
            <Text className="locationCity_artist-label">{cityArtistLabel}</Text>
            <Text className="locationCity_artist-name">{cityArtistName}</Text>
          </div>

          <Text className="locationCity_description">
            {cityDescription.map(cityDescription => {
              return <CityText cityDescription={cityDescription} />;
            })}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Locations;
