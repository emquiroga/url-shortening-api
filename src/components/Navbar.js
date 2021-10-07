import React, {useState} from "react";
import styled from "styled-components";
import './navbar.css'
import { Menu } from './Menu';
import Logo from "../assets/logo.svg"

const StyledWrapper = styled.div`
@media (max-width: 768px) {
position: absolute;
top: 30px;
right: 5%;
width: 26px;
height: auto;
display: block;
z-index: 9999999999999;
}
`
const StyledSpan = styled.span`
@media (max-width: 768px) {
display: block;
width: 26px;
height: 3px;
background-color: hsl(0, 0%, 75%);

&:not(:last-child) {
margin-bottom: 5px;
}
}
`
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
            

            <StyledWrapper 
            className={closed === true ? "" : "isOpen"}
            onClick={toggle}
            >
                <StyledSpan></StyledSpan>
                <StyledSpan></StyledSpan>
                <StyledSpan></StyledSpan>
            </StyledWrapper>
            <Menu 
            show={closed}
            />
        </nav>
    )
}