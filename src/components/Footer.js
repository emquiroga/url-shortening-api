import React from "react"
import styled from "styled-components"
import './footer.css'
import { Social } from "./Social"

const StyledLink = styled.a`
text-decoration: none;
color: hsl(0, 0%, 75%);
text-align: center;
margin: .5rem auto;
`

export const Footer = () =>  {
    return (
        <footer>
            <h2 className="shortly">
                Shortly
            </h2>
            <>
                <h3>
                    Features
                </h3>
                <StyledLink>
                    Link Shortening
                </StyledLink>
                <StyledLink>
                    Branded Links
                </StyledLink>
                <StyledLink>
                    Analytics
                </StyledLink>
            </>
            <>    
                <h3>  
                    Resources
                </h3>
                <StyledLink>
                    Blog
                </StyledLink>
                <StyledLink>
                    Developers
                </StyledLink>
                <StyledLink>
                    Support
                </StyledLink>
            </>
            <>
                <h3>
                    Company
                </h3>
                <StyledLink>
                    About
                </StyledLink>
                <StyledLink>
                    Our Team
                </StyledLink>
                <StyledLink>
                    Careers
                </StyledLink>
                <StyledLink>
                    Contact
                </StyledLink>
            </>
            <Social />
        </footer>
    )
}