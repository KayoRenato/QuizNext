import shuffle from "../functions/shuffle"
import AnswerModel from "./answer"

export default class QuestionModel {
    #id: number
    #title: string
    #isRight: boolean
    #answers: AnswerModel[]

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

    get answers(): any[] {
        return this.#answers
    }

    get isRight(): boolean {
        return this.#isRight
    }

    get isAnswered(): boolean {
        return this.#answers.some(answer => answer.uncovered)
    }

    answeredWith(idx: number): QuestionModel {
        const isCorrect = this.#answers[idx]?.correct
        const answers = this.#answers.map((answer, i) => {
            const answerSelected = idx === i
            const mustReveal = answerSelected || answer.correct
            return mustReveal ? answer.toUncover() : answer
        })
        return new QuestionModel(this.#id, this.#title, answers, isCorrect)
    }

    shuffleAnswers(): QuestionModel {
        let answersShuffled = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#title, answersShuffled, this.#isRight)
    }


    static createFromObject(obj: QuestionModel): QuestionModel {
        const res = obj.answers.map(answer => AnswerModel.createFromObject(answer))
        return new QuestionModel(obj.id, obj.title, res, obj.isRight)
    }

    toObject() {
        return {
            id: this.id,
            title: this.#title,
            isAnswered: this.isAnswered,
            isRight: this.#isRight,
            answers: this.#answers.map(answer => answer.toObject())
        }
    }

}