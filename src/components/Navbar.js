import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false); // to show menu on clicking it
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click); // function to execute clicking effect on menu bar
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar" >
                <div className="navbar-container" >
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Spacenest <i className="fab fa-typo3">
                        </i>
                    </Link>
                    <div classname='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/Gallery'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/QuickFacts'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Quick Facts
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/Quiz'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Quiz
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={'btn--outline'}>Take a Quiz</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
