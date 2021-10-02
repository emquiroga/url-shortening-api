import React, {useState} from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg"

const StyledNavbar = styled.nav`
width: 100%;
height: 100px;
margin: 0;
padding: 0;
display: flex;
flex-flow: row;
position: relative;
`
export const StyledLogo = styled.img`
margin: 2rem;
`
const StyledWrapper = styled.div`
position: absolute;
top: 30px;
right: 5%;
width: 26px;
height: auto;
display: block;
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
    const open = () => setOpen(!closed)
    return (
        <StyledNavbar>
            <StyledLogo src={Logo} alt="Logo"/>
            <StyledWrapper 
            className={closed === true ? "" : "isOpen"}
            onClick={open}
            >
                <StyledSpan></StyledSpan>
                <StyledSpan></StyledSpan>
                <StyledSpan></StyledSpan>
            </StyledWrapper>
        </StyledNavbar>
    )
}