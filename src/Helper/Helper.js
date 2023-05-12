//import image data from assets/images
import ukraineImage from '../assets/images/grid1-1.png';
import criciethImage from '../assets/images/Cricieth_Wales.png';
import bereaImage from '../assets/images/Berea_KY.png';
import muramvyaImage from '../assets/images/Muramvya_Burundi.png';
import hometownImage from '../assets/images/hometown_earth.png';

import introImage from '../assets/images/intro.png';

import gridImage1a from '../assets/images/grid1-1.png';
import gridImage1b from '../assets/images/grid1-2.png';
import gridImage1c from '../assets/images/grid1-3.png';
import gridImage1d from '../assets/images/grid1-4.png';
import gridImage2a from '../assets/images/grid2-1.png';
import gridImage2b from '../assets/images/grid2-2.png';
import gridImage2c from '../assets/images/grid2-3.png';
import gridImage2d from '../assets/images/grid2-4.png';

//add image imports for Intro section

// here is an array of objects with all data for each city

export const cityData = [
  {
    cityName: 'Ukraine',
    cityPic: ukraineImage,
    cityArtistLabel: 'ARTIST',
    cityArtistName: ['Natalia Dolgushina, content producer'],
    cityDescription: [
      "Kyiv (or Kiev), Ukraine's capital, is a large city located on the shores of the Dnipro river. Of course, no one in their right mind would swim in the river, unless they grew up here, in which case they've probably tried it at some point. Summers are hot here, and the winters are drafty, but the fall and the spring are are absolutely amazing.",
      "  The city itself is a mix of pre-revolution, post-war and soviet architecture, all of it sprinkled with modified balconies. If you're on the right bank of the Dnipro, the landscape is difficult to traverse for people on bikes and those wearing heels. The left bank is considered far less interesting and prestigious though, even by people who live on the far outskirts of the right one.",
    ],
  },

  {
    cityName: 'Cricieth, Wales',
    cityPic: criciethImage,
    cityArtistLabel: 'ARTIST',
    cityArtistName: [
      'Steffan Warren, lead editor',
      'Kseniya Glagoleva, project manager',
    ],
    cityDescription: [
      'The medieval ruin of Cricieth Castle overlooks the town below from a rock that juts out into the sea. It is thought to have been built by Llewelyn the Great in the 13th century. Some 900 years later, the self-styled Pearl of Wales on the Shores of Snowdonia has become a popular tourist destination during the summer months.',
      "A short walk down the road from the castle, you can enjoy the world's best ice cream at Cadwalader's, whose secret ingredient is rumored to be locally sourced seaweed. Another claim to fame is the fact that Cricieth won the Wales in Bloom award for five years in a row for its spectacular floral displays around town. It was also home to David Lloyd George, the only Welshman ever to hold the office of Prime Minister of the UK.",
    ],
  },

  {
    cityName: 'Berea, USA',
    cityPic: bereaImage,
    cityArtistLabel: 'ARTIST',
    cityArtistName: ['Travis Turner, author and editor'],
    cityDescription: [
      'Berea is a small town located in the central part of Kentucky. The town is surrounded by beautiful forests and countryside. It\'s known as the arts and crafts capital of the state, and visitors will find plenty of shopping opportunities: shops with handmade jewelry, candles, wood items, galleries, glass studios, and more. The town holds a yearly festival celebrating "spoonbread", a local dish made with cornbread and served with a wooden spoon.',
      "However, it's probably known best for the local college. Berea College was founded in 1855 and was the first college in the south to be racially integrated, as well as the first to be coeducational. Somewhat uniquely, it charges no tuition — every student receives a full-tuition scholarship.",
    ],
  },

  {
    cityName: 'Muramvya, Burundi',
    cityPic: muramvyaImage,
    cityArtistLabel: 'ARTIST',
    cityArtistName: ['Grevisse Kenguruka, tech editor'],
    cityDescription: [
      "Muramvya is one of the 18 provinces of Burundi. In the kingdom era, Muramvya was the royal capital and in 2007, because of its cultural and natural landscape, it was added to the UNESCO World Heritage Tentative List. It is located in the center of Burundi, between the country's political and economic capitals.",
      "The weather is rather chilly at night, but during the day, you would think you're in heaven. At 2,665 meters (8,743 ft) above sea level, Mount Teza is one of the coldest places in the province. But that cool breeze allows for one of the largest plantations of tea and coffee in the country, which make up the bulk of Burundi's exports.",
      'The Kibira National Park, one of the largest wildlife reserves for apes, overlaps four provinces, including Muramvya. This National Park lies at the apex of the beautiful mountains of the Congo-Nile Divide, ranging between 1550 and 2660 meters of altitude. It is filled with beautiful vegetation, and a source for the various rivers and streams which provide water around the country.',
    ],
  },

  {
    cityName: 'Hometown, Earth',
    cityPic: hometownImage,
    cityArtistLabel: 'ARTIST',
    cityArtistName: ['many contributors'],
    cityDescription: [
      'Hometown, Earth.... a fascinating location',
      'Each of us has a Hometown, Earth, that we call our own.',
    ],
  },
];

export const introData = [
  {
    introTitle: 'From Homeland to Homeland',
    introSubTitle:
      'An epic journey from Kentucky to Burundi through Wales and Ukraine',
    introPic: introImage,
    introTextTop: 'Know the places your online pals come from a little better',
    introTextMid:
      'Every human being is an artist, a freedom being, called to participate in transforming and reshaping the conditions, thinking, and structures that shape and inform our lives.',
    introTextAuth: '\u2014 Joseph Beuys',
    introTextBot:
      "The town of Practicum has brought together professionals from different corners of the world. Today, Practicum Art Gallery is proud to present stories and pictures from some of the people who dedicate their time and effort to making the future tech professionals of this town feel at home. Each of us has a unique story about the place we come from. Feel free to add your own story and a piece of visual art dedicated to your hometown to our collection. No matter where you're from, we're glad that you're our neighbor.",
    introGridPics: [
      gridImage1a,
      gridImage1b,
      gridImage1c,
      gridImage1d,
      gridImage2a,
      gridImage2b,
      gridImage2c,
      gridImage2d,
    ],
  },
];
