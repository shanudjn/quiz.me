type ACTIONTYPE =
    | { type: "CHANGE_SCORE"; payload: string }
    | { type: "SET_QUESTION"; payload: string }


export const initialState = { currentQuestionNumber: 0, score: 0, message: "" }

export function quizReducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case "CHANGE_SCORE":
            if (action.payload === "INCREASE") {
                return { ...state, score: state.score + 1, message: "Yay 🎉 the answer was right" }
            }
            return { ...state, score: state.score - 1, message: "Sorry 😥 Its the wrong answer" };

        case "SET_QUESTION":
            console.log("reducer", action.payload)
            if (action.payload === "START" || action.payload === "NEXT") {

                return { ...state, currentQuestionNumber: state.currentQuestionNumber + 1, message: "" };


            }

            return { ...state, currentQuestionNumber: 1, message: "" }

        default:
            return { ...state };
    }
}