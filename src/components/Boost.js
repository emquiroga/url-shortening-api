import React from "react"
import styled from "styled-components"
import bg from '../assets/bg-boost-mobile.svg'
import Button from './Button'

const StyledBoost = styled.section`
width: 100%;
height: auto;
margin: 0;
padding: 130px 0;
background-color: hsl(257, 27%, 26%);
background-image: url(${bg});
background-repeat: no-repeat;
background-size: cover;
`
const StyledH2 = styled.h2`
margin: 2rem auto;
font-size: 30px;
font-weight: 700;
text-align: center;
color: white;
`

export const Boost = () => {
    return (
        <StyledBoost>
            <StyledH2>
                Boost your links today
            </StyledH2>
            <Button />
        </StyledBoost>
    )
}