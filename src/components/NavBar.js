import { useNavigate } from 'react-router-dom';
import madgeek from '../assets/madgeek-logo.png'
import CarWidget from './CarWidget';

const NavBar = () => {
    const navigate = useNavigate()

    const navigateTo = (path) => {
        navigate(`/${path}`)
    }

    return (
        <header>
            <nav className="nav-extended">
                <div className='center-align'>
                    <a href="/">
                        <img alt="logo" src={madgeek}/>
                    </a>
                </div>
                <div className="nav-content row valign-wrapper">
                    <ul id="tabs" className="tabs tabs-transparent col s11">
                        <li className="tab" onClick={() => navigateTo('brands')}>
                            <a href='/brands' className='black-text'>Brands</a>
                        </li>

                        <li className="tab" onClick={() => navigateTo('')}>
                            <a href='/' className="active black-text">Collectibles</a>
                        </li>

                        <li className="tab" onClick={() => navigateTo('myAccount')}>
                            <a href='/myAccount' className='black-text'>My account</a>
                        </li>

                        <li className="tab" onClick={() => navigateTo('contact')}>
                            <a href='/contact' className='black-text'>Contact</a>
                        </li>
                    </ul>
                    <CarWidget/>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;