import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
    new QuestionModel( 1, 'When do you write to your friends?', [
        AnswerModel.incorrect("I don't know."),
        AnswerModel.incorrect("I write to my friends at home."),
        AnswerModel.correct("I do it whenever I have time."),
    ]),
    new QuestionModel( 2, 'How old are you?', [
        AnswerModel.incorrect("I'd rather not tell my husband."),
        AnswerModel.incorrect("I'd rather not show you."),
        AnswerModel.correct("I'd rather not say."),
    ]),

]

export default questions;