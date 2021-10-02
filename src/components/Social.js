import React from "react"
import styled from "styled-components"
import fb from '../assets/icon-facebook.svg'
import tw from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import ig from '../assets/icon-instagram.svg'

const StyledWrapper = styled.div`
width: 60%;
height: auto;
margin: 3rem auto;
display: flex;
flex-flow: row;
justify-content: space-around;

`
const StyledIcon = styled.img`
width: 30px;
height: auto;
`

export const Social = () => {
    return(
        <StyledWrapper>
            <StyledIcon src={fb} />
            <StyledIcon src={tw} />
            <StyledIcon src={pinterest} />
            <StyledIcon src={ig} />
        </StyledWrapper>
    )
}
