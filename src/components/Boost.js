import React from "react"
import styled from "styled-components"
import './boost.css'



const StyledH2 = styled.h2`
margin: 0 auto 2rem auto;
font-size: 30px;
font-weight: 700;
text-align: center;
color: white;
`

export const Boost = () => {
    return (
        <section className="boost">
            <StyledH2>
                Boost your links today
            </StyledH2>
            <button className="boost-button">Get Started</button>
        </section>
    )
}