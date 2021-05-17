import { createContext, useContext } from "react";
import { quizzes } from '../Data/data'



const DataContext = createContext();

export function DataProvider({ children }) {
    return (
        <DataContext.Provider value={{ quizzes }}>
            {children}
        </DataContext.Provider >
    )
}

export function useQuizData() {
    return useContext(DataContext)
}