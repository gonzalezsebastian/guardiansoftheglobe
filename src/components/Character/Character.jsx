import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../others/DataContext';
import './Character.css';

function Character() {

  const characters = useContext(MyContext)

  return (

    <div>
        <div className='characters'>
        {characters.map((character) => (
          <div className='Character' key={character.alias}>
            <img src={character.picture} alt={character.alias} />
            <Link to={`/heroes/${character.link}`}>
              <h2 className='link'>{character.alias}</h2>
            </Link>
          </div>
          ))}
        </div>
    </div>
 );
}

export default Character