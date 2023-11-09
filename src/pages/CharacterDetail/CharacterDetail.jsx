import { useContext } from 'react';
import Navbar from '../../components/Navbar';
import MyContext from '../../others/DataContext';
import './CharacterDetail.css';


function CharacterDetail () {
  
  const characters = useContext(MyContext)

  const character = characters.find((character) => character.link === window.location.pathname.split('/')[2]);
  
  return (
    <>
        <Navbar/>
        <div className='profile' key={characters.alias}>
            <div className='image'>
                <img src={character.picture} alt={character.alias} />
                <h2>{character.alias}</h2>
            </div>
            <div className='info'>
                <h4>Real name:<p>{character.name}</p></h4>
                <h4>Species:<p>{character.species}</p></h4>
                <h4>Age:<p>{character.age}</p></h4>
                <h4>Status:<p>{character.status}</p></h4>
                <h4>Location:<p>{character.location}</p></h4>
                <h4>Place of birth:<p>{character.placeofbirth}</p></h4>
            </div>
        </div>
    </>
  );
}
export default CharacterDetail;