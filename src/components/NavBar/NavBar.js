import madgeek from '../../assets/madgeek.png';
import CarWidget from './CarWidget/CarWidget';

const NavBar = () => {
    return (
        <header>
            <nav className="nav-extended">
                <div className='center-align'>
                    <a href="#">
                        <img alt="logo" src={madgeek}/>
                    </a>
                </div>
                <div className="nav-content row valign-wrapper">
                    <ul className="tabs tabs-transparent col s11">
                        <li className="tab"><a href="#sale" className='black-text'>Sale items</a></li>
                        <li className="tab"><a className="active black-text" href="#collectibles">Collectibles</a></li>
                        <li className="tab"><a href="#account" className='black-text'>My account</a></li>
                        <li className="tab"><a href="#contact" className='black-text'>Contact</a></li>
                    </ul>
                    <CarWidget/>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;