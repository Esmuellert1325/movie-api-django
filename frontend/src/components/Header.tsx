import styles from '../styles/Header.module.css';

type HeaderProps = {
    location: string
};

const Header = ({ location }: HeaderProps) => {
    return (
        <header style={styles}>
            {location === 'home' ?
                (
                    <h2>MOVIE API - You are on the home page</h2>
                )
                :
                null
            }
            {location === 'add' ?
                (
                    <h2>MOVIE API - You are on the add movie page</h2>
                )
                :
                null
            }
            {location === 'list' ?
                (
                    <h2>MOVIE API - You are on the list movies page</h2>
                )
                :
                null
            }
        </header>
    )
}

export default Header;