import React from "react"
import styled from "styled-components"
import { Navbar } from "./Navbar"
import mobilebg from '../assets/illustration-working.svg'
import StartedButton from "./Button"

const StyledHeader = styled.header`
width: 100%;
height: 930px;
margin: 0;
padding: 0;
background-color: white;
background-image: url(${mobilebg});
background-position: 0% 10%;
background-size: 120%;
background-repeat: no-repeat;
`
const StyledTitle = styled.h1`
margin: 70% 10% 0 10%;
font-size: 40px;
font-weight: 700;
text-align: center;
font-family: 'Poppins', sans-serif;
color: hsl(255, 11%, 22%);
`
export const StyledDescription = styled.p`
margin: 5% 5% 30% 5%;
color: hsl(257, 7%, 63%);
text-align: center;
font-size: 18px;
line-height: 2rem;
`

export const Header = () => {
    return (
        <StyledHeader>
            <Navbar/>
            <StyledTitle>More than just shorter links</StyledTitle>
            <StyledDescription>Build your brand's recognition and get detailed insights on how your links are performing.</StyledDescription>
            <StartedButton></StartedButton>
        </StyledHeader>
    )
}

export default Header
