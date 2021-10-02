import React, {useState} from "react";
import styled from "styled-components";
import bgmobile from '../assets/bg-shorten-mobile.svg'

const StyledShorten = styled.section`
width: 100%;
height: auto;
margin: 0;
padding: 0;
position: relative;
background-color: transparent;

`
const StyledWrapper = styled.div`
width: 90%;
padding: 0;
margin: auto;
position: absolute;
top: 0;
left: 50%;
transform: translate(-50%, -40%);
z-index: 999;
background-color: hsl(260, 8%, 14%);
background-image: url(${bgmobile});
background-position: top;
background-repeat: no-repeat;
background-size: cover;
border-radius: 1rem;
`
const StyledInput = styled.input`
width: 80%;
margin: 10%;
padding: 0.5rem 0;
font-family: 'Poppins', sans-serif;
font-size: 20px;
outline: none;
&::placeholder {
    color: hsla(0, 87%, 67%, 0.75);
    padding: 0 0 0 1rem;
}
&:focus {
    border: 3px inset hsl(0, 87%, 67%);
}
`
const StyledButton = styled.button`
width: 80%;
margin: 10%;
padding: 0.75rem 0;
font-size: 20px;
font-family: 'Poppins', sans-serif;
font-weight: 700;
text-align: center;
background-color: hsl(180, 66%, 49%);
color: white;
border: none;
border-radius: 3px;
`

export const Shorten = () => {
    return (
        <StyledShorten>
            <StyledWrapper>
                <StyledInput 
                placeholder="Shorten a link here..."
                />
                <StyledButton>
                    Shorten it!
                </StyledButton>
            </StyledWrapper>
        </StyledShorten>
    )
}