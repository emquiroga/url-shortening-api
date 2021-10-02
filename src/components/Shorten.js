import React, {useState, useEffect} from "react";
import styled from "styled-components";
import bgmobile from '../assets/bg-shorten-mobile.svg'
import shortLinks from "../services/ShortLinks";
import { Shortened } from "./Shortened";

const StyledShorten = styled.section`
width: 100%;
height: auto;
margin: 0;
padding: 0;
position: relative;
background: linear-gradient(180deg, white 50%, #F0F1F6);

`
const StyledWrapper = styled.div`
width: 90%;
padding: 0;
margin: auto;
background-color: hsl(260, 8%, 14%);
background-image: url(${bgmobile});
background-position: top;
background-repeat: no-repeat;
background-size: cover;
border-radius: 1rem;
`
const StyledInput = styled.input`
width: 80%;
margin: 10% 10% 0 10%;
padding: 0.5rem 0;
font-family: 'Poppins', sans-serif;
font-size: 20px;
outline: none;
border: 3px solid transparent;

&::placeholder {
    color: hsla(0, 87%, 67%, 0.75);
    padding: 0 0 0 1rem;
}
&:focus {
    border: 3px inset hsl(0, 87%, 67%);
}
`
const StyledOutput = styled.span`
display: block;
margin: 0 10%;
font-family: 'Poppins', sans-serif;
font-size: 18px;
font-style: italic;
color: hsla(0, 87%, 67%, 0.75);
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

    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    
    const [link, setLink] = useState("")
    
    useEffect(function () {
        shortLinks({myLink : 'https://www.youtube.com/watch?v=QBLbXgeXMU8&t=737s&ab_channel=midudev'}).then(link => setLink(link))
    }, [])

    return (
        <StyledShorten>
            <StyledWrapper>
                <StyledInput 
                placeholder="Shorten a link here..."
                value={value}
                onChange={handleChange}
                />
                {value === ''
                ?
                <StyledOutput>
                    Please add a link
                </StyledOutput>
                :
                null
                }
                <StyledButton>
                    Shorten it!
                </StyledButton>
            </StyledWrapper>
            <Shortened 
            link={link}
            />
            <Shortened 
            link={link}
            />
            <Shortened 
            link={link}
            />
        </StyledShorten>
    )
}