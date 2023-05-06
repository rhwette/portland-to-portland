import { Image, Box, Text, Button } from '@chakra-ui/react';
import './Locations.css';
import gridImage1a from '../../assets/images/grid1-1.png';
import criciethImage from '../../assets/images/Cricieth_Wales.png';
import bereaImage from '../../assets/images/Berea_KY.png';
import muramvyaImage from '../../assets/images/Muramvya_Burundi.png';
import hometownImage from '../../assets/images/hometown_earth.png';

const Locations = () => {
  return (
    <>
      <Box className="locationLayout">
        {/* City = Ukraine */}
        <Box className="locationCity">
          <Text className="locationCity_name">Kyiv, Ukraine</Text>
          <Image className="locationCity_picture" src={gridImage1a} />
          <Button
            fontSize={'12px'}
            colorScheme="blue"
            className="locationCity_button"
            href="https://www.forbes.com/advisor/investing/nft-non-fungible-token/"
          >
            Buy this artwork as NFT
          </Button>

          <div className="locationCity_artist">
            <Text className="locationCity_artist-label">ARTIST</Text>
            <Text className="locationCity_artist-name">
              Natalia Dolgushina, content producer
            </Text>
          </div>

          <Text className="locationCity_descript">
            <span className="locationCity_description">
              Kyiv (or Kiev), Ukraine's capital, is a large city located on the
              shores of the Dnipro river. Of course, no one in their right mind
              would swim in the river, unless they grew up here, in which case
              they've probably tried it at some point. Summers are hot here, and
              the winters are drafty, but the fall and the spring are are
              absolutely amazing.
            </span>
            <span className="locationCity_description">
              The city itself is a mix of pre-revolution, post-war and soviet
              architecture, all of it sprinkled with modified balconies. If
              you're on the right bank of the Dnipro, the landscape is difficult
              to traverse for people on bikes and those wearing heels. The left
              bank is considered far less interesting and prestigious though,
              even by people who live on the far outskirts of the right one.
            </span>
          </Text>
        </Box>

        <Box className="locationCity">
          {/* City = Cricieth Wales */}

          <Text className="locationCity_name">Cricieth, Wales</Text>
          <Image className="locationCity_picture" src={criciethImage} />
          <Button
            fontSize={'12px'}
            colorScheme="blue"
            className="locationCity_button"
            href="https://www.forbes.com/advisor/investing/nft-non-fungible-token/"
          >
            Buy this artwork as NFT
          </Button>

          <div className="locationCity_artist">
            <Text className="locationCity_artist-label">ARTIST</Text>
            <Text className="locationCity_artist-name">
              Steffan Warren, lead editor
            </Text>
            <Text className="locationCity_artist-name">
              Kseniya Glagoleva, project manager
            </Text>
          </div>

          <Text className="locationCity_descript">
            <span className="locationCity_description">
              The medieval ruin of Cricieth Castle overlooks the town below from
              a rock that juts out into the sea. It is thought to have been
              built by Llewelyn the Great in the 13th century. Some 900 years
              later, the self-styled Pearl of Wales on the Shores of Snowdonia
              has become a popular tourist destination during the summer months.
            </span>
            <span className="locationCity_description">
              A short walk down the road from the castle, you can enjoy the
              world's best ice cream at Cadwalader's, whose secret ingredient is
              rumored to be locally sourced seaweed. Another claim to fame is
              the fact that Cricieth won the Wales in Bloom award for five years
              in a row for its spectacular floral displays around town. It was
              also home to David Lloyd George, the only Welshman ever to hold
              the office of Prime Minister of the UK.
            </span>
          </Text>
        </Box>

        <Box className="locationCity">
          {/* City = Berea, USA */}

          <Text className="locationCity_name">Berea, USA</Text>
          <Image className="locationCity_picture" src={bereaImage} />
          <Button
            fontSize={'12px'}
            colorScheme="blue"
            className="locationCity_button"
            href="https://www.forbes.com/advisor/investing/nft-non-fungible-token/"
          >
            Buy this artwork as NFT
          </Button>

          <div className="locationCity_artist">
            <Text className="locationCity_artist-label">ARTIST</Text>
            <Text className="locationCity_artist-name">
              Travis Turner, author and editor
            </Text>
          </div>

          <Text className="locationCity_descript">
            <span className="locationCity_description">
              Berea is a small town located in the central part of Kentucky. The
              town is surrounded by beautiful forests and countryside. It's
              known as the arts and crafts capital of the state, and visitors
              will find plenty of shopping opportunities: shops with handmade
              jewelry, candles, wood items, galleries, glass studios, and more.
              The town holds a yearly festival celebrating "spoonbread", a local
              dish made with cornbread and served with a wooden spoon.
            </span>
            <span className="locationCity_description">
              However, it's probably known best for the local college. Berea
              College was founded in 1855 and was the first college in the south
              to be racially integrated, as well as the first to be
              coeducational. Somewhat uniquely, it charges no tuition — every
              student receives a full-tuition scholarship.
            </span>
          </Text>
        </Box>

        <Box className="locationCity">
          {/* City = Muramvya, Burundi */}

          <Text className="locationCity_name">Berea, USA</Text>
          <Image className="locationCity_picture" src={muramvyaImage} />
          <Button
            fontSize={'12px'}
            colorScheme="blue"
            className="locationCity_button"
            href="https://www.forbes.com/advisor/investing/nft-non-fungible-token/"
          >
            Buy this artwork as NFT
          </Button>

          <div className="locationCity_artist">
            <Text className="locationCity_artist-label">ARTIST</Text>
            <Text className="locationCity_artist-name">
              Grevisse Kenguruka, tech editor
            </Text>
          </div>

          <Text className="locationCity_descript">
            <span className="locationCity_description">
              Muramvya is one of the 18 provinces of Burundi. In the kingdom
              era, Muramvya was the royal capital and in 2007, because of its
              cultural and natural landscape, it was added to the UNESCO World
              Heritage Tentative List. It is located in the center of Burundi,
              between the country's political and economic capitals
            </span>
            <span className="locationCity_description">
              The weather is rather chilly at night, but during the day, you
              would think you're in heaven. At 2,665 meters (8,743 ft) above sea
              level, Mount Teza is one of the coldest places in the province.
              But that cool breeze allows for one of the largest plantations of
              tea and coffee in the country, which make up the bulk of Burundi's
              exports.
            </span>
            <span className="locationCity_description">
              The Kibira National Park, one of the largest wildlife reserves for
              apes, overlaps four provinces, including Muramvya. This National
              Park lies at the apex of the beautiful mountains of the Congo-Nile
              Divide, ranging between 1550 and 2660 meters of altitude. It is
              filled with beautiful vegetation, and a source for the various
              rivers and streams which provide water around the country.
            </span>
          </Text>
        </Box>

        <Box className="locationCity">
          {/* City = Town, Earth */}

          <Text className="locationCity_name">Hometown, Earth</Text>
          <Image className="locationCity_picture" src={hometownImage} />
          <Button
            fontSize={'12px'}
            colorScheme="blue"
            className="locationCity_button"
            href="https://www.forbes.com/advisor/investing/nft-non-fungible-token/"
          >
            Buy this artwork as NFT
          </Button>

          <div className="locationCity_artist">
            <Text className="locationCity_artist-label">ARTIST</Text>
            <Text className="locationCity_artist-name">many contributors</Text>
          </div>

          <Text className="locationCity_descript">
            <span className="locationCity_description">
              Hometown, Earth.... a fascinating location
            </span>
            <span className="locationCity_description">
              Each of us has a Hometown, Earth, that we call our own.
            </span>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Locations;
