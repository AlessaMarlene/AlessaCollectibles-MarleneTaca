import madgeek from '../../assets/madgeek-logo.png';

const NavBar = () => {
    return (
        <header>
            <nav className="nav-extended amber lighten-5">
                <div className='center-align'>
                    <a href="#" className="black-text">
                        <img alt="logo" src={madgeek}/>
                    </a>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a href="#sale" className='black-text'>Sale items</a></li>
                        <li className="tab"><a className="active black-text" href="#collectibles">Collectibles</a></li>
                        <li className="tab"><a href="#account" className='black-text'>My account</a></li>
                        <li className="tab"><a href="#contact" className='black-text'>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <div id="sale" className="col s12">Sale items</div>
            <div id="collectibles" className="col s12">Collectibles</div>
            <div id="account" className="col s12">My Account</div>
            <div id="contact" className="col s12">Contact</div>
        </header>
    );
}

export default NavBar;