import { useContext } from 'react';
import Navbar from '../../components/Navbar';
import MyContext from '../../others/DataContext';
import Character from '../../components/Character';


function Villain () {
  
    const characters = useContext(MyContext);

    const villainCharacters = characters.filter((character) => character.rol === "Villain");
  
  return (
    <>
      <MyContext.Provider value={villainCharacters}>
        <Navbar/>
        <Character/>
      </MyContext.Provider>
    </>
  );
}
export default Villain;