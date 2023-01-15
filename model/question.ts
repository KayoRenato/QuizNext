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

        // for (let answer of this.#answers) {
        //     return answer.uncovered ?? true
        // }

        // return false
    }

}