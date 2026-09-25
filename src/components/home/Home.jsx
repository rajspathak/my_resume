import React from "react";
import "./home.css";
import Data from "./Data";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__container container grid">
                <Data />
                <div className="home__visual">
                    <div className="home__img"></div>
                </div>
            </div>
        </section>
    )
}

export default Home;
