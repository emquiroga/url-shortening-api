import React from "react"
import { Card } from "./Card"
import './statistics.css'
import brand from '../assets/icon-brand-recognition.svg'
import detailed from '../assets/icon-detailed-records.svg'
import fully from '../assets/icon-fully-customizable.svg'

export const Home = () => {
    return (
        <section>
            <h2 className="advanced">
                Advanced Statistics
            </h2>
            <p className="advanced-description">
                Track how your links are performing across the web with
                our advanced statistics dashboard.
            </p>
            <div className="cards-wrapper">
            <Card
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content."
            bg={brand}
            />
            
            <div className="divider"></div>

            <Card 
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions."
            bg={detailed}
            />

            <div className="divider"></div>

            <Card 
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement."
            bg={fully}
            />
            </div>
        </section>
    )
}
export default Home