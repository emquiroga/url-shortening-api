import React from "react";
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
const StyledLogo = styled.img`
margin: 2rem;
`
const StyledWrapper = styled.div`
position: absolute;
top: 30px;
right: 5%;
display: flex;
flex-flow: column;
justify-content: space-around;
width: 50px;
height: 35px;
`
const StyledSpan = styled.span`
display: block;
width: 35px;
height: 4px;
background-color: hsl(0, 0%, 75%);
`
export const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledLogo src={Logo} alt="Logo"/>
            <StyledWrapper>
                <StyledSpan></StyledSpan>
                <StyledSpan></StyledSpan>
                <StyledSpan></StyledSpan>
            </StyledWrapper>
        </StyledNavbar>
    )
}