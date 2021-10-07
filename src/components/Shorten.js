import React, {useState} from "react";
import './shorten.css'
import shortLinks from "../services/ShortLinks";
import { Shortened } from "./Shortened";

export const Shorten = () => {

    const [value, setValue] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const [link, setLink] = useState("")
    
    const submit = (event) => {
        event.preventDefault()
        shortLinks({myLink: value})
        .then(link => setLink(link))
    }
    const validLink = new RegExp(
        `shrtco.de/[a-zA-Z0-9._:$!%-]`
    )

    // useEffect(function submit (event) {
    //  event.preventDefault()
    //     shortLinks({myLink: value})
    //     .then(link => setLink(link))
    // }, [value])

    return (
        <div className="shorten">
            <form
            onSubmit={submit}>
                <input 
                placeholder="Shorten a link here..."
                value={value}
                onChange={handleChange}
                />
                {value === ''
                ?
                <span>
                    Please add a link
                </span>
                :
                null
                }
                <button className="shorten-button"
                type="submit"
                >
                    Shorten it!
                </button>
            </form>
            {link.match(validLink)
            ?
            <>
                <Shortened
                src="https://www.yourwebsite.com" 
                link={link}
                />
                <Shortened
                src="https://twitter.com/yourprofile" 
                link={link}
                />
                <Shortened
                src="https://www.linkedin.com/yourprofile" 
                link={link}
                />
            </>
            :
            null
            }
        </div>
    )
}