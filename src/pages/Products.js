import { Link } from 'react-router-dom';
import CardList from '../components/Card/CardList';
import classes from './Products.module.css';

const storiesData = [
  {
    id: 'a1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Illustration_for_Maria_Morevna_-Koshchey_the_Deathless_carries_off_Maria_Morevna_-_crop.jpg/794px-Illustration_for_Maria_Morevna_-Koshchey_the_Deathless_carries_off_Maria_Morevna_-_crop.jpg',
    name: 'The Death of Koschei the Immortal',
    author: 'Alexander Afanasyev',
    description:
      'The story is based on the Russian legend of Koschei the Deathless, an evil spirit who can take multiple forms, including a man, monster, snake, and tornado. Koschei is not truly immortal but rather prolongs his own life by hiding his soul inside of animals or eggs.16 февр. 2022 г.',
  },
  {
    id: 'a2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Vasilisa.jpg',
    name: 'Vasilisa the Beautiful',
    author: 'Alexander Afanasyev',
    description:
      'It tells the tale of a beautiful girl named Vasilisa. When her mother dies, she gives her a magic doll. Her father remarries, and she gains an evil stepmother and two stepsisters. Despite the stepmothers attempts to diminish Vasilisas beauty, she continues to grow more beautiful',
  },
  {
    id: 'a3',
    image: 'https://citaty.info/files/portraits/neznaika.jpg',
    name: 'Donotknow',
    author: 'Jack V. Haney',
    description:
      'In this tale, a king and a queen have a son. Soon after, the queen dies and the king remarries, but his new wife hates her step-son and plans to kill him: first, by mixing poison in his food; next, putting poison on the stairs. The prince is warned of the attempts on his life by his friend, the colt.',
  },
];

const Products = () => {
  return (
    <section>
      <h1>The Product Page</h1>
      <CardList data={storiesData} />
    </section>
    //    <ul>
    //    <li>
    //      <Link to="/products/p1">Product 3</Link>
    //    </li>
    //    <li>
    //      <Link to="/products/p2">Product 2</Link>
    //    </li>
    //    <li>
    //      <Link to="/products/p3">Product 3</Link>
    //    </li>
    //  </ul>
  );
};

export default Products;
