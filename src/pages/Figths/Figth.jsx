import './Figth.css';
import { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import MyContext from '../../others/DataContext';

function Figth() {
  const characters = useContext(MyContext);
  const fights = [
    { hero: 'Omni-Man', villain: 'Mauler Twins', winner: 'Omni-Man' },
    { hero: 'Invincible', villain: 'Mauler Twins', winner: 'Invincible' },
    { hero: 'Atom Eve', villain: 'Flaxans', winner: 'Atom Eve' },
    { hero: 'The Immortal', villain: 'Bi-Plane', winner: 'Bi-Plane' },
    { hero: 'Robot', villain: 'ReAnimen', winner: 'Robot' },
    { hero: 'Invincible', villain: 'Angstrom Levy', winner: 'Invincible' },
    { hero: 'Omni-Man', villain: 'Flaxans', winner: 'Omni-Man' },
    { hero: 'Invincible', villain: 'Angstrom Levy', winner: 'Angstrom Levy' },
    { hero: 'Atom Eve', villain: 'Mauler Twins', winner: 'Atom Eve' },
    { hero: 'The Immortal', villain: 'ReAnimen', winner: 'The Immortal' },
    { hero: 'Robot', villain: 'Bi-Plane', winner: 'Bi-Plane' },
    { hero: 'Invincible', villain: 'Mauler Twins', winner: 'Invincible' },
    { hero: 'Atom Eve', villain: 'Flaxans', winner: 'Atom Eve' },
    { hero: 'The Immortal', villain: 'Angstrom Levy', winner: 'Angstrom Levy' },
    { hero: 'Robot', villain: 'ReAnimen', winner: 'Robot' },
    { hero: 'Invincible', villain: 'Bi-Plane', winner: 'Bi-Plane' },
    { hero: 'Omni-Man', villain: 'ReAnimen', winner: 'Omni-Man' },
    { hero: 'Atom Eve', villain: 'Bi-Plane', winner: 'Bi-Plane' },
    { hero: 'The Immortal', villain: 'Mauler Twins', winner: 'Mauler Twins' },
    { hero: 'Robot', villain: 'Angstrom Levy', winner: 'Angstrom Levy' },
    { hero: 'Invincible', villain: 'Flaxans', winner: 'Flaxans' },
    { hero: 'Omni-Man', villain: 'Bi-Plane', winner: 'Omni-Man' },
    { hero: 'Atom Eve', villain: 'Angstrom Levy', winner: 'Atom Eve' },
    { hero: 'The Immortal', villain: 'Flaxans', winner: 'The Immortal' },
    { hero: 'Robot', villain: 'Mauler Twins', winner: 'Mauler Twins' },
    { hero: 'Invincible', villain: 'ReAnimen', winner: 'ReAnimen' },
  ];

  const [mostFrequentVillain, setMostFrequentVillain] = useState(null);
  const [topHeroes, setTopHeroes] = useState([]);
  const [mostDefeatedVillainByTeenHero, setMostDefeatedVillainByTeenHero] = useState(null);

  const findMostFrequentVillain = (heroName) => {
    const heroFights = fights.filter((fight) => fight.hero === heroName);
    const villainCounts = {};

    heroFights.forEach((fight) => {
      const villain = fight.villain;
      villainCounts[villain] = (villainCounts[villain] || 0) + 1;
    });

    const mostFrequentVillain = Object.keys(villainCounts).reduce((a, b) => (villainCounts[a] > villainCounts[b] ? a : b));

    return mostFrequentVillain;
  };

  const findTopHeroes = () => {
    const heroWins = {};
    
    fights.forEach((fight) => {
      const hero = fight.hero;
      const winner = fight.winner;

      if (hero === winner) {
        heroWins[hero] = (heroWins[hero] || 0) + 1;
      }
    });

    // Convert object to array and sort by victories
    const topHeroes = Object.keys(heroWins).map((hero) => ({ name: hero, victories: heroWins[hero] }));
    topHeroes.sort((a, b) => b.victories - a.victories);

    // Take the top 3 heroes
    return topHeroes.slice(0, 3);
  };

  const findMostDefeatedVillainByTeenHero = () => {
    const teenHeroes = characters.filter((character) => character.age && character.age < 18 && character.rol === 'Heroe');
    const teenHeroFights = fights.filter((fight) => teenHeroes.some((hero) => hero.alias === fight.hero));

    const villainCounts = {};
    
    teenHeroFights.forEach((fight) => {
      const villain = fight.villain;
      villainCounts[villain] = (villainCounts[villain] || 0) + 1;
    });

    const mostDefeatedVillain = Object.keys(villainCounts).reduce((a, b) => (villainCounts[a] > villainCounts[b] ? a : b));

    return mostDefeatedVillain;
  };

  const [selectedHero, setSelectedHero] = useState('Invincible');

  useEffect(() => {
    const frequentVillain = findMostFrequentVillain(selectedHero);
    setMostFrequentVillain(frequentVillain);

    const heroes = findTopHeroes();
    setTopHeroes(heroes);

    const defeatedVillain = findMostDefeatedVillainByTeenHero();
    setMostDefeatedVillainByTeenHero(defeatedVillain);
  }, [selectedHero]);

  return (
    <>
      <MyContext.Provider value={characters}>
        <Navbar />
        <div>
            <label htmlFor="heroSelect">Select a hero: </label>
            <select className='heroSelect' id="heroSelect" onChange={(e) => setSelectedHero(e.target.value)} value={selectedHero}>
                {characters
                .filter((hero) => hero.rol === 'Heroe')
                .map((hero) => (
                    <option key={hero.alias} value={hero.alias}>
                    {hero.alias}
                    </option>
                ))}
            </select>
            <h2>Results:</h2>
            <p>1. Villain fought most by {selectedHero}: {mostFrequentVillain}</p>
            <h3>2. Top 3 heroes with the most victories:</h3>
            <ul>
                {topHeroes.map((hero, index) => (
                <li key={index}>
                {hero.name}: {hero.victories} victories
                </li>
                ))}
            </ul>
            <p>3. Villain lost most against a teen hero: {mostDefeatedVillainByTeenHero}</p>
        </div>

      </MyContext.Provider>
    </>
  );
}

export default Figth;