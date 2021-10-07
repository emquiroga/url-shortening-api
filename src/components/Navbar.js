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
@media (min-width:1440px) {
    &:nth-of-type(4) {
    margin-left: 40vw;
}  
@media (min-width:1980px) {
    &:nth-of-type(4) {
    margin-left: 60vw;
}
}
}
}
`
const DesktopSignup = styled.button `
display: none;
@media (min-width: 769px) {
display: block;
margin: auto;
max-width: 115px;
background-color: hsl(180, 66%, 49%);
border: none;
border-radius: 2rem;
font-size: 16px;
font-family: 'Poppins', sans-serif;
color: white;
cursor: pointer;

&:hover {
    color: white; 
    background-color:hsl(257, 27%, 26%);
    transition: all 150ms ease-in-out;
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
            <DesktopSignup>Sign Up</DesktopSignup>
            

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