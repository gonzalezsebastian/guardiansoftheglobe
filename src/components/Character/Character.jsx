import { useContext } from 'react';
import MyContext from '../../others/DataContext';
import './Character.css';

function Character() {

  const characters = useContext(MyContext)

  return (

    <div>
      {characters.map((character) => (
        <div key={character.alias}>
          <div className='Character'>
            <img src={character.picture} alt={character.alias} />
            <h2>{character.alias}</h2>
          </div>
        </div>
      ))}
    </div>
 );
}

export default Character

// <div className='info'>
// <h4>Real name:</h4>
// <p>{character.name}</p>
// <h4>Species:</h4>
// <p>{character.species}</p>
// <h4>Age:</h4>
// <p>{character.age}</p>
// <h4>Status:</h4>
// <p>{character.status}</p>
// <h4>Location:</h4>
// <p>{character.location}</p>
// <h4>Location:</h4>
// <p>{character.location}</p>
// <h4>Place of birth:</h4>
// <p>{character.placeofbirth}</p>
// </div>