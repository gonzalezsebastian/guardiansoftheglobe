import { useContext } from 'react';
import Navbar from '../../components/Navbar';
import MyContext from '../../others/DataContext';
import Character from '../../components/Character';
import './Heroe.css';


function Heroe () {
  
  const characters = useContext(MyContext)
  console.log(characters)
  
  return (
    <>
      <MyContext.Provider value={characters}>
        <Navbar/>
        <Character/>
      </MyContext.Provider>
    </>
  );
}
export default Heroe;