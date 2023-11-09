import { useContext } from 'react';
import Navbar from '../../components/Navbar';
import MyContext from '../../others/DataContext';
import { Link } from 'react-router-dom';
import './CharacterDetail.css';


function CharacterDetail () {
  
  const characters = useContext(MyContext)

  const character = characters.find((character) => character.link === window.location.pathname.split('/')[2]);
  
  const powers = character.powers.map((power) => <li key={character.powers}>{power}</li>);

  const weaknesses = character.weaknesses.map((weakness) => <li key={character.weaknesses}>{weakness}</li>);

  const affiliation = character.affiliation.map((affiliation) => <li key={character.affiliation}>{affiliation}</li>);

  const allies = character.allies.map((ally) => (
    <Link to={`${ally.link}`} key={ally.link}>
      <li>{ally.name}</li>
    </Link>
  ));

  const enemies = character.enemies.map((enemy) => (
    <Link to={`${enemy.link}`} key={enemy.link}>
      <li>{enemy.name}</li>
    </Link>
  ));


  return (
    <>
        <Navbar/>
        <div className='profile' key={characters.alias}>
            <div className='image'>
              <h2>{character.alias}</h2>
              <img src={character.picture} alt={character.alias} />  
            </div>
            <div className='info'>
              <h4>Real Name</h4><p>{character.name}</p>
              <h4>Species</h4><p>{character.species}</p>
              <h4>Age</h4><p>{character.age}</p>
              <h4>Occupation</h4><p>{character.occupation}</p>
              <div className='powers'>
                <h4>Powers</h4>
                <ul><p>{powers}</p></ul>
              </div>
              <div className='weaknesses'>
                <h4>Weaknesses</h4>
                <ul><p>{weaknesses}</p></ul>
              </div>
              <div className='affiliation'>
                <h4>Affiliation</h4>
                <ul><p>{affiliation}</p></ul>
              </div>
              <div className='allies'>
                <h4>Allies</h4>
                <ul><p>{allies}</p></ul>
              </div>
              <div className='enemies'>
                <h4>Enemies:</h4>
                <ul><p>{enemies}</p></ul>
              </div>
            </div>
        </div>
    </>
  );
}
export default CharacterDetail;