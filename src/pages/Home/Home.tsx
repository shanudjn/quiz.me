import React from 'react';
import Card from "../../Components/Card/Card"
import "tailwindcss/tailwind.css";
import "./Home.css"


function Home() {
    return (
        <div className={`game-grid grid sm:grid-cols-1 md:grid-cols-2 gap-5 container mx-auto`}>
            <Card quizname="Red Dead Redemption" numberOfQuestions={3} url="RDR" />
            <Card quizname="Batman Arkham Knight" numberOfQuestions={3} url="RDR3" />
            <Card quizname="Red Dead Redemption 2" numberOfQuestions={3} url="RDR2" />
            <Card quizname="GTA V" numberOfQuestions={3} url="RDR4" />
        </div >
    )
}

export default Home
