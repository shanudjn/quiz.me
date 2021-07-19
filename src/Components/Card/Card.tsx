import React from 'react';
import { Link } from 'react-router-dom';


function Card({ quizname, numberOfQuestions, url }: { quizname: string, numberOfQuestions: number, url: string }) {
    return (
        <>
            <div className={`game-card h-48 flex flex-col justify-around items-start p-4 shadow`}>
                <div className={`card-top flex flex-col items-start`}>
                    <span className={`font-bold text-lg`}>{quizname}</span>
                    <span className={`text-base`}>A quiz on {quizname}</span>
                </div>
                <div className={`flex flex-row justify-between w-full items-end`}>
                    {/* <span>{numberOfQuestions}</span> */}
                    <Link to={`/quiz/${url}`}><button className={`bg-green-400 p-2 rounded text-sm text-white`} >Start Quiz</button></Link>
                </div>

            </div>

        </>
    )
}

export default Card
