import React from "react"
import styled from "styled-components"
import './card.css'

const StyledIcon = styled.img`
position: absolute;
top: -30px;
left: 50%;
padding: 1rem;
transform: translate(-95%, -50%);
background-color: hsl(257, 27%, 26%);
border-radius: 50%;
z-index: 999;
`
export const Card = ({bg, title, description}) => {
    return (
        <div className="card">
            <StyledIcon 
            src={bg}
            />
            <h3 className="card-title">
                {title}
            </h3>
            <p>
                {description}
            </p>
        </div>
    )
}