import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
width: 90%;
height: auto;
position: fixed;
margin: 30% 5% 0 5%;
display: flex;
flex-flow: column;
background-color: hsl(257, 27%, 26%);
text-align: center;
border-radius: 1rem;

z-index: 9999;
`
const StyledLink = styled.a`
margin: 1.75rem;
text-decoration: none;
color: white;
`
const StyledHr = styled.hr`
display: block;
width: 80%; 
height: 2px; 
margin: 0 auto;
background-color: grey;
border: none;
opacity: 0.75;
`
const StyledLogin = styled.button`
display: block;
width: 80%;
margin: 0 10% 10% 10%;
padding: 0.5rem 0;
background-color: hsl(180, 66%, 49%);
border: none;
border-radius: 2rem;
font-size: 16px;
font-family: 'Poppins', sans-serif;
color: white;
cursor: pointer;
`

export const Menu = ({show}) => {

    return (
        <>
        {show === false
        ?
        <StyledMenu>
            <StyledLink>Features</StyledLink>
            <StyledLink>Pricing</StyledLink>
            <StyledLink>Resources</StyledLink>
            <StyledHr />
            <StyledLink>Login</StyledLink>
            <StyledLogin>Sign Up</StyledLogin>
        </StyledMenu>
        :
        null
        }
        </>
    )
}