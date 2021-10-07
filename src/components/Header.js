import React from "react"
import styled from "styled-components"
import './header.css'
import { Navbar } from "./Navbar"

export const StyledDescription = styled.p`
@media (max-width: 768px) {
margin: 5% 5% 20% 5%;
color: hsl(257, 7%, 63%);
text-align: center;
font-size: 18px;
line-height: 2rem;
}
`

const Header = () => {
    return (
        <header>
            <Navbar/>
            <h1>More than just shorter links</h1>
            <p className="intro-description">Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button className="button-header">Get Started</button>
        </header>
    )
}

export default Header
