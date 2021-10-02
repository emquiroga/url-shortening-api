import React from "react"
import styled from "styled-components"
import { Social } from "./Social"


const StyledFooter = styled.footer`
width: 100%;
margin: 0;
padding: 0;
display: flex;
flex-flow: column;
background-color: hsl(260, 8%, 14%);
`
const StyledShortly = styled.h2`
margin: 0;
padding: 4rem 0;
font-size: 40px;
color: white;
text-align: center;
`
const StyledH3 = styled.h3`
margin: 2rem auto;
font-size: 18px;
font-weight: 700;
color: white;
text-align: center;

`
const StyledLink = styled.a`
text-decoration: none;
color: hsl(0, 0%, 75%);
text-align: center;
margin: .5rem auto;

`

export const Footer = () =>  {
    return (
        <StyledFooter>
            <StyledShortly>
                Shortly
            </StyledShortly>
            <>
                <StyledH3>
                    Features
                </StyledH3>
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
                <StyledH3>  
                    Resources
                </StyledH3>
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
                <StyledH3>
                    Company
                </StyledH3>
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
        </StyledFooter>
    )
}