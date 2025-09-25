import Button from '../ui/Button';
import { navbarLinks } from '../../data';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import Logo from '../logo/Logo';
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container">
      <nav className="navbar-styles">
        {/* Logo */}
        <div className='logo-block'>
          <a href="/">
            <Logo className='logo-svg-header' colorImg='#000000' />
          </a>
        </div>

        <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer button-mobile"
      >
        {isMenuOpen ? <HiX /> : <FaBars />}
      </button>

        <ul className={`navbar-ul ${isMenuOpen? 'open-menu': 'close-menu'}`}>
          {navbarLinks.map((navLink) => {
            return (
              <li key={navLink.id} className="nav-link-header">
                <a href={navLink.href}>{navLink.text}</a>
              </li>
            );
          })}

          {/* Button */}
          <Button
            text="Request"
            className="nav-button-header"
          />
        </ul>

      </nav>

    </div>
  );
};

export default Navbar;
