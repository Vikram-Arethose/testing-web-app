import { Product } from '../../models/product';

export const ProductsList: Product[] = [
  {
    id: 0,
    img: '../../../../assets/img/bakery/roll1.jpg',
    imgCorner: '',
    name: 'Stone oven roll',
    details: '',
    price: 0.34,
    limit: null,
    sliced: 0
  },
  {
    id: 1,
    img: '../../../../assets/img/bakery/roll2.jpg',
    imgCorner: '',
    name: 'Pumpkin roll',
    details: 'Only Thu, Sun',
    price: 0.64,
    limit: null,
    sliced: 0
  },  {
    id: 2,
    img: '../../../../assets/img/bakery/roll3.jpg',
    imgCorner: '../../../../assets/img/bakery/bio.png',
    name: 'Multigrain roll',
    details: '',
    price: 0.74,
    limit: null,
    sliced: 0
  },  {
    id: 3,
    img: '../../../../assets/img/bakery/roll4.jpg',
    imgCorner: '../../../../assets/img/bakery/neu.png',
    name: 'Sponky roll',
    details: '',
    price: 0.69,
    limit: 2,
    sliced: 1
  },
];
