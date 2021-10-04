import React from "react"
import styled from "styled-components"

const StyledStarted = styled.button`
display: block;
width: 200px;
height: 55px;
margin: auto;
background-color: hsl(180, 66%, 49%);
border: none;
border-radius: 2rem;
font-size: 20px;
font-weight: 700;
color: white;
cursor: pointer;
`
const StartedButton = () => {
    return (
        <StyledStarted>Get Started</StyledStarted>
    )
}
export default StartedButton