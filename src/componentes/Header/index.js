import './style.css';

const Header = ({empresa}) => {

    return(
        <header>
            <h1>{empresa}</h1>
            <nav>
                <ul>
                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <li><a href="https://pt.wikipedia.org/wiki/Z%C3%A9_Pelintra" target="_blank" rel="noreferrer">história</a></li>
                    <li><a href="https://www.youtube.com/watch?v=jZgZGzM6UCI" target="_blank" rel="noreferrer">pontos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;