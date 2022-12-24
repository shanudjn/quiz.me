import React, { useEffect } from 'react';
import { useQuizData } from '../../Context/data-context';
import { useParams } from 'react-router';
import { Option, Question, Quiz } from '../../Data/data.types';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../../Context/auth-context';


function Result() {
    const { quizzes } = useQuizData();
    const { topicId, score } = useParams();
    const { token } = useAuth();

    useEffect(() => {
        saveScore();
    })

    async function saveScore() {
        console.log("save score")
        console.log(quizLet._id)
        const saveScoreResponse = await axios.post('https://quiz-me-backend.onrender.com/user/', { userScore: { quizId: quizLet._id, score: score } }, { headers: { authorization: `Bearer ${token}` } });
        console.log(saveScoreResponse)
    }

    const quizLet = quizzes.find((item: Quiz) => item.topicId === topicId)

    function getCorrectOption(question: Question) {

        const correctOption = question.options.find((item) => item.isRight)
        return correctOption?.option
    }

    console.log(score, quizLet)
    return (
        <div className="flex flex-col items-center">
            <div className={`flex flex-col mt-8`}><span className={`text-2xl`}>Score</span></div>
            <div className={`flex text-3xl `}>{score}</div>

            <div className={`flex flex-col`}>
                <div className={`flex flex-col`}>{quizLet.topicName}</div>
                {
                    quizLet.questions.map((question: Question) => {
                        return (
                            <div className={`flex flex-col items-start m-4 p-4 ring ring-green-400 rounded`} key={question.questionNo} >
                                <p className={`text-lg font-semibold`}>{question.question}</p>
                                <span >{
                                    getCorrectOption(question)
                                }
                                </span>
                            </div>
                        )
                    })
                }
                <Link to={`/`}><button className='m-4 p-4 bg-green-400 text-white text-white rounded w-48'>End Quiz</button></Link>

            </div>
        </div>


    )
}

export default Result
