import React, { useState } from "react";
import styled from "styled-components";
import './shortened.css'


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
cursor: pointer;
`
const CopiedBtn = styled.button`
width: 80%;
margin: 1rem 5%;
padding: 0.5rem 1rem;
border: none;
border-radius: 5px;
color: white;
font-size: 20px;
font-family: 'Poppins', sans-serif;
background-color:hsl(257, 27%, 26%);
cursor: pointer;
`
export const Shortened = ({src, link}) => {
    const [copy, setCopy] = useState(false)
    return(
        <div className="shortened-wrapper">
            <p className="link-for">
                {src}
            </p>
            <hr style={{margin: 0}}/>
            <p className="link-output">
                <a className="shortened-link" 
                href={`https://${link}`}
                target="_blank"
                rel="noreferrer"
                >
                    {link}
                </a>
            </p>
            {copy === false
            ?
            <CopyBtn
            onClick={()=>setCopy(!copy)}>
            Copy
            </CopyBtn>
            :
            <CopiedBtn
            onClick={()=>setCopy(!copy)}>
                Copied!
            </CopiedBtn>
            }
        </div>
    )
}