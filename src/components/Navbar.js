import React, {useState} from "react";
import styled from "styled-components";
import './navbar.css'
import { Menu } from './Menu';
import Logo from "../assets/logo.svg"

const StyledWrapper = styled.div`
position: absolute;
top: 30px;
right: 5%;
width: 26px;
height: auto;
display: block;
z-index: 9999999999999;
`
const StyledSpan = styled.span`
display: block;
width: 26px;
height: 3px;
background-color: hsl(0, 0%, 75%);
&:not(:last-child) {
          margin-bottom: 5px;
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
            <img src={Logo} alt="Logo"/>
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