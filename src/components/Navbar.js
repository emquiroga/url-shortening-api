import React, {useState} from "react";
import styled from "styled-components";
import './navbar.css'
import { Menu } from './Menu';
import Logo from "../assets/logo.svg"


const DesktopLink = styled.a `
display: none;
@media (min-width: 769px) {
display: block;
margin: auto 0 auto 3rem;
text-decoration: none;
color: hsl(0, 0%, 75%);
font-weight: 700;

&:nth-of-type(4) {
    margin-left: 20%;
}

&:hover {
    color: hsl(257, 27%, 26%);
    cursor: pointer;
    transition: all 200ms ease-in-out;
}
@media (min-width:1440px) {
    margin: auto 0 auto 5rem;
    &:nth-of-type(4) {
    margin-left: 30vw;
}  
@media (min-width:1920px) {
    margin: auto 0 auto 5rem;
    &:nth-of-type(4) {
    margin-left: 50vw;
}
}
}
}
`
    
export const Navbar = () => {
    const [closed, setOpen] = useState(true)

    const toggle = () => {
        setOpen(!closed)
        document.getElementById('body').classList.toggle('no-scroll')
    }
    return (
        <nav>
            <img src={Logo} alt="Logo" className="logo"/>

            <DesktopLink>Features</DesktopLink>
            <DesktopLink>Pricing</DesktopLink>
            <DesktopLink>Resources</DesktopLink>
            <DesktopLink>Login</DesktopLink>
            <button className="signup-button">Sign Up</button>
            

            <div 
            className={closed === true ? "mobile-menu" : "mobile-menu isOpen"}
            onClick={toggle}
            >
                <span className="span-menu"></span>
                <span className="span-menu"></span>
                <span className="span-menu"></span>
            </div>
            <Menu 
            show={closed}
            />
        </nav>
    )
}