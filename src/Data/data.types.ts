export type Option = {
    optionId: number;
    option: string;
    isRight: boolean;
}
export type Question = {
    questionNo: number
    question: string;
    points: number;
    negativePoints: number;
    options: Option[]
}

export type Quiz = {
    topicId: string;
    topicName: string;
    questions: Question[]
}

export type Quizzes = Quiz[]