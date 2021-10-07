import React from "react"
import styled from "styled-components"

const StyledStarted = styled.button`
display: block;
width: 200px;
margin: auto;
background-color: hsl(180, 66%, 49%);
border: none;
border-radius: 2rem;
font-size: 20px;
font-weight: 700;
color: white;
cursor: pointer;
&:hover {
    background-color: white; 
    color:hsl(257, 27%, 26%);
    transition: all 150ms ease-in-out;
}
`
const StartedButton = () => {
    return (
        <StyledStarted>Get Started</StyledStarted>
    )
}
export default StartedButton