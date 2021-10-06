import React from "react"
import styled from "styled-components"
import './social.css'
import fb from '../assets/icon-facebook.svg'
import tw from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import ig from '../assets/icon-instagram.svg'

const StyledIcon = styled.img`
width: 20px;
height: auto;
margin: 0;
padding: 0;
`

export const Social = () => {
    return(
        <div className="social-wrapper">
            <StyledIcon src={fb} />
            <StyledIcon src={tw} />
            <StyledIcon src={pinterest} />
            <StyledIcon src={ig} />
        </div>
    )
}
