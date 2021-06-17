import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { quizReducer, initialState } from "../../Reducer/quiz-reducer"
import { useQuizData } from '../../Context/data-context'
import { Option, Question, Quiz } from '../../Data/data.types'
import './Quiz.css';


function QuizPage() {

    const { quizzes } = useQuizData();
    const { topicId } = useParams();


    const [state, dispatch] = useReducer(quizReducer, initialState)
    const [isAnswered, setIsAnswered] = useState(false)

    const [optionId, setOptionId] = useState(0);

    useEffect(() => {
        dispatch({ type: "SET_QUESTION", payload: "START" })
    }, [])



    const quizLet = quizzes.find((item: Quiz) => item.topicId === topicId)

    const currentQuestion = quizLet.questions.find((question: Question) => question.questionNo === state.currentQuestionNumber)

    const numberOfQuestions = quizLet.questions.length;



    console.log(topicId)

    function checkAnswer(option: Option) {


        if (option.isRight) {

            if (!isAnswered) {
                dispatch({ type: "CHANGE_SCORE", payload: "INCREASE" })
            }
            setIsAnswered(true)
            setOptionId(option.optionId)


        }
        else {

            if (!isAnswered) {
                dispatch({ type: "CHANGE_SCORE", payload: "DECREASE" })
            }
            setIsAnswered(true)
            setOptionId(option.optionId)


        }

    }

    function changeQuestion(payload: string) {

        if (state.currentQuestionNumber >= 1 && state.currentQuestionNumber < numberOfQuestions)
            dispatch({ type: "SET_QUESTION", payload: payload })
        setIsAnswered(false)


    }
    function getButtonClass(option: Option, optionId: number) {

        if (option.isRight && option.optionId === optionId && isAnswered) {
            return `ring-1 ring-green-400`
        }
        if (!option.isRight && option.optionId === optionId && isAnswered) {

            return `ring-1 ring-red-400`
        }
        return ''
    }



    console.log(quizLet)
    return (
        <div className={`flex flex-col`}>
            <div className={`flex sm:justify-around justify-between items-baseline m-4 p-4`}>
                <Link to="/"><button className={`ring-1 ring-green-400 p-2 rounded text-sm`}>Go Back</button></Link>
                <span>{quizLet.topicName}</span>
                <span >Score : <span className={`text-bold text-3xl`}>{state.score}</span> </span>
            </div>


            {
                <>
                    <div className={``}>

                        <div className="flex flex-col h-64 justify-between">
                            <div className="">
                                <p className={`text-lg font-semibold`}>{currentQuestion?.question}</p>
                            </div>
                            {!isAnswered && <div className={``}>
                                {
                                    currentQuestion?.options.map((option: Option) => {
                                        return (
                                            <div className="">
                                                <button
                                                    className={`bg-gray-100 sm:w-11/12 md:w-6/12 lg:w-1/2 m-2 p-1 bg-green-40 rounded`}
                                                    key={option.optionId}
                                                    onClick={() => { checkAnswer(option); }}
                                                >{option.option}
                                                </button>
                                            </div>

                                        )
                                    })
                                }
                            </div>}
                            {isAnswered && <div className={``}>
                                {
                                    currentQuestion?.options.map((option: Option) => {
                                        return (
                                            <div>
                                                <button
                                                    className={`bg-gray-100 sm:w-11/12 md:w-6/12 lg:w-1/2 m-2 p-1 bg-green-40 rounded ${getButtonClass(option, optionId)} `}
                                                    key={option.optionId}
                                                    onClick={() => checkAnswer(option)}
                                                    disabled

                                                >{option.option}
                                                </button>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                            }
                        </div>
                        {/* <button onClick={() => changeQuestion("PREVIOUS")}> Previous</button> */}
                        <div className={`m-8 p-4 h-16`}><span className={`text-center`}>{state.message}</span></div>
                        {
                            (state.currentQuestionNumber < numberOfQuestions)
                                ? <button className={`m-4 p-4 bg-green-400 text-white rounded w-48`} onClick={() => changeQuestion("NEXT")}>Next Question</button>
                                : <Link to={`/result/${topicId}/${state.score}`}><button className='m-4 p-4 bg-green-400 text-white text-white rounded w-48'>End Quiz</button></Link>
                        }

                    </div>
                </>
            }
        </div >
    )
}

export default QuizPage
