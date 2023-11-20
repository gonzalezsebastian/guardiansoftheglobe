import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../others/DataContext';
import './Character.css';

function Character() {
  const characters = useContext(MyContext);
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedAbilities, setSelectedAbilities] = useState([]);
  const [selectedRelationship, setSelectedRelationship] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredOrigin, setEnteredOrigin] = useState('');
  const [selectedWeakness, setSelectedWeakness] = useState([]);

  const filterCharactersByAge = () => {
    return characters.filter(character => {
      const characterAge =
        character.age === 'Unknown' ? 'Unknown' : parseInt(character.age, 10);

      return (
        selectedAge === 'all' ||
        (selectedAge === 'adolescent' && (characterAge && characterAge <= 18)) ||
        (selectedAge === 'adult' && (characterAge === 'Unknown' || (characterAge && characterAge > 18)))
      );
    });
  };

  const filterCharactersByAbilities = (filteredCharacters) => {
    return filteredCharacters.filter(character =>
      selectedAbilities.length === 0 || selectedAbilities.every(ability =>
        character.powers.some(power =>
          power.toLowerCase().includes(ability.toLowerCase())
        )
      )
    );
  };

  const filterCharactersByRelationship = (filteredCharacters) => {
    return filteredCharacters.filter(character =>
      selectedRelationship === '' ||
      character.affiliation.some(ally => 
        (typeof ally === 'string' ? ally : ally.name).toLowerCase().includes(selectedRelationship.toLowerCase())
      ) ||
      character.enemies.some(enemy => 
        (typeof enemy === 'string' ? enemy : enemy.name).toLowerCase().includes(selectedRelationship.toLowerCase())
      )
    );
  };

  const filterCharactersByName = (filteredCharacters) => {
    return filteredCharacters.filter(character =>
      enteredName.trim() === '' || character.alias.toLowerCase().includes(enteredName.toLowerCase())
    );
  };

  const filterVillainsByOrigin = (filteredCharacters) => {
    return filteredCharacters.filter(character =>
      enteredOrigin.trim() === '' || character.location.toLowerCase().includes(enteredOrigin.toLowerCase())
    );
  };

  const filterVillainsByWeakness = (filteredCharacters) => {
    return filteredCharacters.filter(character =>
      selectedWeakness.length === 0 || selectedWeakness.every(weakness =>
        character.weaknesses.some(characterWeakness =>
          characterWeakness.toLowerCase().includes(weakness.toLowerCase())
        )
      )
    );
  };

  const allAbilities = Array.from(new Set(characters.flatMap(character => character.powers)));
  const allWeaknesses = Array.from(new Set(characters.flatMap(character => character.weaknesses)));

  const filteredCharacters = filterVillainsByWeakness(
    filterVillainsByOrigin(
      filterCharactersByName(
        filterCharactersByRelationship(
          filterCharactersByAbilities(
            filterCharactersByAge()
          )
        )
      )
    )
  );

  return (
    <div>
      <div className='filterName'>
            <label htmlFor='nameFilter'>Filter by Name:</label>
            <input
              type='text'
              id='nameFilter'
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
        </div>
      <div className='characters'>
        {filteredCharacters.map((character) => (
          <div className='Character' key={character.alias}>
            <img src={character.picture} alt={character.alias} />
            {character.rol === 'Heroe' ? (
              <Link to={`/heroes/${character.link}`}>
                <h2 className='link'>{character.alias}</h2>
              </Link>
            ) : character.rol === 'Villain' ? (
              <Link to={`/villains/${character.link}`}>
                <h2 className='link'>{character.alias}</h2>
              </Link>
            ) : (
              <h2 className='link'>{character.alias}</h2>
            )}
          </div>
        ))}
      </div>
      <div className='filters'>
        <div className='filter'>
          <label htmlFor='ageFilter'>Filter by Age:</label>
          <select
            id='ageFilter'
            onChange={(e) => setSelectedAge(e.target.value)}
            value={selectedAge}
          >
            <option value='all'>All</option>
            <option value='adolescent'>Adolescent</option>
            <option value='adult'>Adult</option>
          </select>
        </div>
        <div className='filter'>
          <label htmlFor='abilitiesFilter'>Filter by Abilities:</label>
          <select
            id='abilitiesFilter'
            className='abilitiesFilter'
            multiple
            onChange={(e) => setSelectedAbilities(Array.from(e.target.selectedOptions, option => option.value))}
            value={selectedAbilities}
          >
            <option value=''>All</option>
            {allAbilities.map((ability, index) => (
              <option key={index} value={ability}>{ability}</option>
            ))}
          </select>
        </div>
        <div className='filter'>
          <label htmlFor='relationshipFilter'>Filter by Relationships:</label>
          <select
            id='relationshipFilter'
            onChange={(e) => setSelectedRelationship(e.target.value)}
            value={selectedRelationship}
          >
            <option value=''>All</option>
            {characters
              .reduce((allRelationships, character) => {
                const relationships = [
                  ...allRelationships,
                  ...character.affiliation.map(allies => allies.name),
                  ...character.enemies.map(enemy => enemy.name),
                ];
                return Array.from(new Set(relationships));
              }, [])
              .map((relationship, index) => (
                <option key={index} value={relationship}>{relationship}</option>
              ))
            }
          </select>
        </div>
      </div>

      <div className='filters'>
        <div className='filter'>
          <label htmlFor='originFilter'>Filter by Origin:</label>
          <input
            type='text'
            id='originFilter'
            value={enteredOrigin}
            onChange={(e) => setEnteredOrigin(e.target.value)}
          />
        </div>
        <div className='filter'>
          <label htmlFor='weaknessFilter'>Filter by Weakness:</label>
          <select
            id='weaknessFilter'
            className='weaknessFilter'
            multiple
            onChange={(e) => setSelectedWeakness(Array.from(e.target.selectedOptions, option => option.value))}
            value={selectedWeakness}
          >
            <option value=''>All</option>
            {allWeaknesses.map((weakness, index) => (
              <option key={index} value={weakness}>{weakness}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Character;