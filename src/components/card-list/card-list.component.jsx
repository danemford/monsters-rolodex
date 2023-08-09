import Cards from '../cards/cards.component'
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Cards key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;