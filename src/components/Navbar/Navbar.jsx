import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <div className='navbar'>
            <h1>Guardians of the Globe</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/heroes'>Heroes</Link></li>
                <li><Link to='/villains'>Villains</Link></li>
                <li><Link to='/fights'>Fights</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;