import React from "react";
import MemoryGame from "../Components/MemoryGame";

import './Home.css'

const Home = () => {
    return (
        <div>
            <section className="top-section">
                <h1 className="title">Message of the Day</h1>
                <p className="quote"><i className="fa fa-quote-left" ></i> When you
                    remember where God
                    brought you
                    out from, you will stop doubting where God can take you to. <i className="fa fa-quote-right"></i></p>
            </section>
            <MemoryGame />

        </div>
    )
}

export default Home;