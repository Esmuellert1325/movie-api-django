import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faFilm} from '@fortawesome/free-solid-svg-icons';

const Navbar = (props: any) => {
    const handleClick = (e: any) => {
        e.preventDefault();
        props.sendLocation(e.target.name);
    };

    return (
        <nav className={styles.navbar}>
            <button name='home' onClick={handleClick}>
                <p>Home</p>
                <FontAwesomeIcon icon={faHouse}/>
            </button>
            <button name='add' onClick={handleClick}>
                <p>Add a movie</p> 
                <FontAwesomeIcon icon={faPlus}/>
            </button>
            <button name='list' onClick={handleClick}>
                <p>List Movies</p>
                <FontAwesomeIcon icon={faFilm}/>
            </button>
        </nav>
    )
}

export default Navbar;