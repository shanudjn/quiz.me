import { createContext, useContext, useEffect, useReducer, useState } from "react";
// import { quizzes } from '../Data/data';
import axios from "axios";
// import { initialState, quizReducer } from "../Reducer/quiz-reducer"




const QuizContext = createContext();

export function QuizProvider({ children }) {

    // const [state, dispatch] = useReducer(quizReducer, initialState);

    const [quizzes, setQuizzes] = useState("")
    async function getQuizData() {
        try {
            const getQuizResponse = await axios.get("http://localhost:8080/quiz");
            console.log(getQuizResponse.data.allQuiz);
            const quizzes = getQuizResponse.data.allQuiz;
            if (getQuizResponse.status === 200) {
                setQuizzes(quizzes)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getQuizData()
    }, [])

    console.log({ quizzes })
    return (
        <QuizContext.Provider value={{ quizzes }}>
            {children}
        </QuizContext.Provider >
    )
}

export function useQuizData() {
    return useContext(QuizContext)
}