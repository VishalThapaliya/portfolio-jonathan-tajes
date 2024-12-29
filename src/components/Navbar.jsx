/**
 * @copyright 2024 Bishal Thapaliya
 * @license Apache-2.0
 */

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen}) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();
    
    const initActiveBox = () => {
        if (!activeBox) {
            return undefined;
        }

        
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        
    }

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

    useEffect(() => {
        initActiveBox();
    }, []);

    window.addEventListener('resize', initActiveBox)

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About Me',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Portfolio',
          link: '#portfolio',
          className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
    ];
    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {
                navItems.map(({ label, ref, link, className }, key) => (
                    <a 
                        key={key}
                        href={link}
                        className={className}
                        ref={ref}
                        onClick={activeCurrentLink}
                    >{label}</a>
                ))
            }
            <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

export default Navbar