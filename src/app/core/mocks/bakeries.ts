import { Bakery } from '../../models/bakery';

export const Bakeries: Bakery[] = [
  {
    imgSrc: '../../../assets/img/bakery/milk&bread.png',
    name: 'Wiebusch',
    address: 'Bielefelder Str. 21, Knetterheide',
    icons: [
      '../../../assets/icons/bakery/people-at-table.svg',
      '../../../assets/icons/bakery/coffee.svg',
      '../../../assets/icons/bakery/piece-of-cake.svg'
    ],
    openUntil: '19:00 Uhr',
    distance: '0,6 km',
    isFavorite: false
  }, {
    imgSrc: '../../../assets/img/bakery/rolls_and_bread.png',
    name: 'Bremehr',
    address: 'Gütersloher Str. 21, Gütersloh',
    icons: [
      '../../../assets/icons/bakery/people-at-table.svg',
      '../../../assets/icons/bakery/coffee.svg',
      '../../../assets/icons/bakery/piece-of-cake.svg'
    ],
    openUntil: '19:00 Uhr',
    distance: '4,6 km',
    isFavorite: false
  }, {
    imgSrc: '../../../assets/img/croissants.jpg',
    name: 'Höner',
    address: 'Bielefelder Str. 21, Bielefeld',
    icons: [
      '../../../assets/icons/bakery/drink.svg',
    ],
    openUntil: '19:00 Uhr',
    distance: '1,6 km',
    isFavorite: false
  }, {
    imgSrc: '../../../assets/img/bakery/girl.jpg',
    name: 'Meier',
    address: 'Otto-Brenner Str. 55, Bielefeld',
    icons: [],
    openUntil: '19:00 Uhr',
    distance: '2,6 km',
    isFavorite: false
  }, {
    imgSrc: '../../../assets/img/bread.png',
    name: 'Bernd',
    address: 'Meller Str. 145, Bielefeld',
    icons: [],
    openUntil: '20:00 Uhr',
    distance: '1,4 km',
    isFavorite: false
  },
];
