import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
width: 90%;
max-width: 500px;
height: auto;
position: absolute;
top: 80%;
left: 50%;
transform: translate(-50%, 0);
display: flex;
flex-flow: column;
background-color: hsl(257, 27%, 26%);
text-align: center;
border-radius: 1rem;
z-index: 9999;
`
const StyledLink = styled.a`
margin: 1.5rem;
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
const StyledSignUp = styled.button`
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

&:hover {
    background-color: white; 
    color:hsl(257, 27%, 26%);
    transition: all 150ms ease-in-out;
}
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
            <StyledSignUp>Sign Up</StyledSignUp>
        </StyledMenu>
        :
        null
        }
        </>
    )
}