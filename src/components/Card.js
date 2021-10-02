import React from "react"
import styled from "styled-components"
import {StyledDescription} from "./Header"


const StyledCard = styled.div `
width: 90%;
margin: 0 auto;
padding-bottom: 1px;
position: relative;
background-color: white;
`
const StyledH3 = styled.h3 `
font-size: 20px;
font-weight: 700;
text-align: center;
color: hsl(255, 11%, 22%);
margin: 10% 0;
padding-top: 20%;
`
const StyledIcon = styled.img`
position: absolute;
top: 0;
left: 50%;
padding: 1rem;
transform: translate(-50%, -50%);
background-color: hsl(257, 27%, 26%);
border-radius: 50%;
z-index: 999;
`
export const Card = ({bg, title, description}) => {
    return (
        <StyledCard>
            <StyledIcon 
            src={bg}
            />
            <StyledH3>
                {title}
            </StyledH3>
            <StyledDescription>
                {description}
            </StyledDescription>
        </StyledCard>
    )
}