import React from "react"
import styled from "styled-components"

const StyledHome = styled.section`
width: 100%;

`

const StyledTitle = styled.h1`
margin: auto;
font-size: 50px;
font-weight: 700;
text-align: center;
font-family: 'Poppins', sans-serif;
`

export const Home = () => {
    return (
        <StyledTitle>More than just shorter links</StyledTitle>
    )
}