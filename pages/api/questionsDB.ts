import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
    new QuestionModel(1, 'When do you write to your friends?', [
        AnswerModel.incorrect("I don't know."),
        AnswerModel.incorrect("I write to my friends at home."),
        AnswerModel.correct("I do it whenever I have time."),
    ]),
    new QuestionModel(2, 'How old are you?', [
        AnswerModel.incorrect("I'd rather not tell my husband."),
        AnswerModel.incorrect("I'd rather not show you."),
        AnswerModel.correct("I'd rather not say."),
    ]),
    new QuestionModel(3, 'How about going to the theater tonight?', [
        AnswerModel.incorrect("I'm sorry to hear that."),
        AnswerModel.incorrect("Sure. Maybe some other time."),
        AnswerModel.correct("Sorry I have a business meeting tonight."),
    ]),
    new QuestionModel(4, 'Can I see your ticket, please?', [
        AnswerModel.incorrect("No, it's mine."),
        AnswerModel.incorrect("Yes, it's a ticket."),
        AnswerModel.correct("I'm afraid I can't find it."),
    ]),
    new QuestionModel(5, 'What is your city like?', [
        AnswerModel.incorrect("I like it a lot."),
        AnswerModel.incorrect("I have no idea."),
        AnswerModel.correct("It's small, but nice."),
    ]),
    new QuestionModel(6, 'Excuse me, can you tell me where the museum is?', [
        AnswerModel.incorrect("Why do I have to tell you?"),
        AnswerModel.incorrect("You have to know the ropes."),
        AnswerModel.correct("It's at the end of this street."),
    ]),
    new QuestionModel(7, "Can I pay by check? I don't have any cash on me.", [
        AnswerModel.incorrect("Sorry, the checks were stolen."),
        AnswerModel.incorrect("Sorry, that's not fair."),
        AnswerModel.correct("Sorry, we only take hard cash."),
    ]),
    new QuestionModel(8, 'How would you like your steak?', [
        AnswerModel.incorrect("A slice, please."),
        AnswerModel.incorrect("No, thanks."),
        AnswerModel.correct("Rare, please."),
    ]),
    new QuestionModel(9, 'What are you going to do on your summer vacation?', [
        AnswerModel.incorrect("I might have worked hard."),
        AnswerModel.incorrect("I traveled last summer."),
        AnswerModel.correct("I haven't thought about it."),
    ]),
    new QuestionModel(10, 'Have you studied English before?', [
        AnswerModel.incorrect("Yes, when I was born."),
        AnswerModel.incorrect("Yes, I'm interested in your English course."),
        AnswerModel.correct("Yes, but I need practice in speaking."),
    ]),

]

export default questions;