import React, { useState } from "react";
import styled from "styled-components";
import './shortened.css'


const CopyBtn = styled.button`
display: block;
width: 75%;
margin: 1rem auto;
padding: 0.5rem 0;
border: none;
border-radius: 5px;
color: white;
font-size: 20px;
font-family: 'Poppins', sans-serif;
background-color: hsl(180, 66%, 49%);
cursor: pointer;

&:hover {
    opacity: 0.75;
    transition: all 150ms ease-in-out;
}

@media (min-width: 1024px) {
    width: 15%;
    margin-right: 5%
}
`
const CopiedBtn = styled.button`
display: block;
width: 75%;
margin: 1rem auto;
padding: 0.5rem 0;
border: none;
border-radius: 5px;
color: white;
font-size: 20px;
font-family: 'Poppins', sans-serif;
background-color:hsl(257, 27%, 26%);
cursor: pointer;

&:hover {
    opacity: 0.75;
    transition: all 150ms ease-in-out;
}

@media (min-width: 1024px) {
    width: 15%;
    margin-right: 5%
}
`
export const Shortened = ({src, link}) => {
    const [copy, setCopy] = useState(false)

    function getLink () {
        let cb = navigator.clipboard;
        let paragraph = document.getElementById('link')
        cb.writeText(paragraph.innerText)
        return cb
    }
    function copyLink () {
        setCopy(!copy)
        getLink()
    }
    
    return(
        <div className="shortened-wrapper">
            <p className="link-for">
                {src}
            </p>
            <hr />
            <p className="link-output">
                <a className="shortened-link" 
                href={`https://${link}`}
                target="_blank"
                rel="noreferrer"
                id="link"
                >
                    {link}
                </a>
            </p>
            {copy === false
            ?
            <CopyBtn
            onClick={copyLink}>
            Copy
            </CopyBtn>
            :
            <CopiedBtn
            onClick={copyLink}>
                Copied!
            </CopiedBtn>
            }
        </div>
    )
}