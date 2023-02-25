import './NavBar.css'

export const NavBar = () => {

    return (
        <header className='header'>
            <div>
                <a href='#inicio'>
                    <img src="./imgs/logo.png" title='logo' alt='logo'/>
                </a>
            </div>
            <div>
                <nav>
                    <a href='#link1'>link1</a>
                    <a href='#link2'>link2</a>
                    <a href='#link3'>link3</a>
                    <a href='#link4'>link4</a>
                </nav>
            </div>
        </header>
        
    )
}