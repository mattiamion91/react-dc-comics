function Navbar() {

    // dati per i link di navigazione
    const links = [
        { id: 1, text: 'CHARACTERS', url: '#', current: false },
        { id: 2, text: 'COMICS', url: '#', current: true },
        { id: 3, text: 'MOVIES', url: '#', current: false },
        { id: 4, text: 'TV', url: '#', current: false },
        { id: 5, text: 'GAMES', url: '#', current: false },
        { id: 6, text: 'COLLECTABLES', url: '#', current: false },
        { id: 7, text: 'VIDEOS', url: '#', current: false },
        { id: 8, text: 'FANS', url: '#', current: false },
        { id: 9, text: 'NEWS', url: '#', current: false },
        { id: 10, text: 'SHOP', url: '#', current: false },
    ];

    //funzione di rendering elemwnto lista

    const renderElementoLista = () => {
        return links.map((linkObj) => (
            <li key={linkObj.id}>
                <a href={linkObj.url} className={linkObj.current ? 'active' : ''}>{linkObj.text}
                </a>
            </li>
        ))
    }
    return (
        <header>
            <figure>
                <a href="#"><img src="public\dc-logo.png" alt="logo-dc" /></a>
            </figure>
            <nav>
                <ul>
                    {renderElementoLista()}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar

