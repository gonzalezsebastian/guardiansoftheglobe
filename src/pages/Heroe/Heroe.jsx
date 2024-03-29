import { useContext } from 'react';
import Navbar from '../../components/Navbar';
import MyContext from '../../others/DataContext';
import Character from '../../components/Character';


function Heroe () {
  
  const characters = useContext(MyContext);

  const heroCharacters = characters.filter((character) => character.rol === "Heroe");
  
  return (
    <>
      <MyContext.Provider value={heroCharacters}>
        <Navbar/>
        <Character/>
      </MyContext.Provider>
    </>
  );
}
export default Heroe;