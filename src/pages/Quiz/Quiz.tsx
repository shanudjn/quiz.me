import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom"
import { quizReducer, initialState } from "../../Reducer/quiz-reducer"
import { useQuizData } from '../../Context/data-context'
import { Option, Question, Quiz } from '../../Data/data.types'
import './Quiz.css';
import { Button, ButtonGroup } from "@chakra-ui/react"








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





    function checkAnswer(option: Option) {
        console.log("inside check answer", option)

        if (option.isRight) {
            console.log("correct")
            if (!isAnswered) {
                dispatch({ type: "CHANGE_SCORE", payload: "INCREASE" })
            }
            setIsAnswered(true)
            setOptionId(option.optionId)


        }
        else {
            console.log("wrong")
            if (!isAnswered) {
                dispatch({ type: "CHANGE_SCORE", payload: "DECREASE" })
            }
            setIsAnswered(true)
            setOptionId(option.optionId)


        }

    }

    function changeQuestion(payload: string) {
        console.log(payload)
        if (state.currentQuestionNumber >= 1 && state.currentQuestionNumber < numberOfQuestions)
            dispatch({ type: "SET_QUESTION", payload: payload })
        setIsAnswered(false)


    }
    function getButtonClass(option: Option, optionId: number) {
        console.log("Changeing button color")
        if (option.isRight && option.optionId === optionId && isAnswered) {

            return `button-bg-correct`
        }
        if (!option.isRight && option.optionId === optionId && isAnswered) {
            console.log(optionId, option.optionId)
            return `button-bg-wrong`
        }
        return ''
    }




    return (
        <div>
            <p>Here is the quiz</p>
            <Link to="/"><button>Go Back</button></Link>
            <p>Score : {state.score}</p>
            {
                <>
                    <p>{state.currentQuestionNumber}</p>
                    <p>{quizLet.topicName}</p>
                    <div>
                        <p>{currentQuestion?.question}</p>
                    </div>
                    { !isAnswered && <div>
                        {
                            currentQuestion?.options.map((option: Option) => {
                                return (
                                    <div style={{ margin: "1rem" }}>
                                        <button
                                            className="button-options"
                                            key={option.optionId}
                                            onClick={() => { checkAnswer(option); }}

                                        >{option.option}
                                        </button>
                                    </div>

                                )
                            })
                        }
                    </div>}
                    { isAnswered && <div>
                        {
                            currentQuestion?.options.map((option: Option) => {
                                return (
                                    <div style={{ margin: "1rem" }}>
                                        <button
                                            className={`button-options ${getButtonClass(option, optionId)}`}
                                            key={option.optionId}
                                            onClick={() => checkAnswer(option)}
                                            disabled

                                        >{option.option}
                                        </button>
                                    </div>

                                )
                            })
                        }
                    </div>}
                    {/* <Button onClick={() => changeQuestion("PREVIOUS")}> Previous</button> */}
                    <div>{state.message}</div>
                    {(state.currentQuestionNumber < numberOfQuestions)
                        ? <button onClick={() => changeQuestion("NEXT")}>Next Question</button>
                        : <Link to="/"><button>End Quiz</button></Link>
                    }


                </>
            }
        </div >
    )
}

export default QuizPage
