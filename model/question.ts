import shuffle from "../functions/shuffle"
import AnswerModel from "./answer"

export default class QuestionModel {
    #id: number
    #title: string
    #answers: AnswerModel[]
    #isRight: boolean

    constructor(id: number, title: string, answers: AnswerModel[], isRight = false) {
        this.#id = id
        this.#title = title
        this.#answers = answers
        this.#isRight = isRight
    }

    get id(): number {
        return this.#id
    }

    get title(): string {
        return this.#title
    }

    get answer(): any[] {
        return this.#answers
    }

    get isRight(): boolean {
        return this.#isRight
    }

    get isAnswered(): boolean {
        return this.#answers.some(answer => answer.uncovered)
    }

    // answeredWith(idx: number): QuestionModel {
    //     const isCorrect = this.#answers[idx]?.correct


    //     return new QuestionModel(this.#id, this.#title, this.)
    // }

    shuffleAnswers(): QuestionModel {
        let answersShuffled = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#title, answersShuffled, this.#isRight)
    }

    toObject() {
        return {
            id: this.id,
            title: this.#title,
            answers: this.#answers.map(answer => answer.toObject()),
            isRight: this.#isRight
        }
    }

}