import React from "react"
import styled from "styled-components"
import {StyledDescription} from "./Header"
import { Card } from "./Card"
import brand from '../assets/icon-brand-recognition.svg'
import detailed from '../assets/icon-detailed-records.svg'
import fully from '../assets/icon-fully-customizable.svg'

const StyledStatics = styled.section`
width: 100%;
position: relative;
background-color: #F0F1F6;

:nth-child(2){
    padding-bottom: 50px; 
}
`

const StyledH2 = styled.h2`
margin: 0;
padding: 20% 0 10% 0;
font-size: 30px;
font-weight: 700;
text-align: center;
font-family: 'Poppins', sans-serif;
color: hsl(255, 11%, 22%);
`
const StyledDivider = styled.span`
display: block;
width: 8px;
height: 100px;
content: "";
margin: 0 auto;
background-color: hsl(180, 66%, 49%);
`

export const Home = () => {
    return (
        <StyledStatics>
            <StyledH2>
                Advanced Statistics
            </StyledH2>
            <StyledDescription>
                Track how your links are performing across the web with
                our advanced statistics dashboard.
            </StyledDescription>
            <Card
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content."
            bg={brand}
            />
            <StyledDivider />
            <Card 
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions."
            bg={detailed}
            />
            <StyledDivider />
            <Card 
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement."
            bg={fully}
            />
        </StyledStatics>
    )
}
export default Home