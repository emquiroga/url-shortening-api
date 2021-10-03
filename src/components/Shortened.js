import React from "react";
import styled from "styled-components";

const ShortenedWrapper = styled.div`
width: 90%;
background-color: white;
margin: 10% auto 0 auto;
border: 2px solid #F0F1F6;
border-radius: 10px;

`
const ShortenedSrc = styled.p`
margin: auto;
padding: 1rem;
font-size: 18px;
color: hsl(255, 11%, 22%);
`
const ShortenedOutput = styled.p`
margin: auto;
padding: 1rem;
font-size: 18px;
`
const StyledLink = styled.a`
text-decoration: none;
color: hsl(180, 66%, 49%);
`
const CopyBtn = styled.button`
width: 80%;
margin: 1rem 5%;
padding: 0.5rem 1rem;
border: none;
border-radius: 5px;
color: white;
font-size: 20px;
font-family: 'Poppins', sans-serif;
background-color: hsl(180, 66%, 49%);
`

export const Shortened = ({src, link}) => {
    return(
        <ShortenedWrapper>
            <ShortenedSrc>
                {src} Props here
            </ShortenedSrc>
            <hr style={{margin: 0}}/>
            <ShortenedOutput>
                <StyledLink 
                href={link}
                target="_blank"
                >
                    {link}
                </StyledLink>
            </ShortenedOutput>
            <CopyBtn>
                Copy
            </CopyBtn>
        </ShortenedWrapper>
    )
}