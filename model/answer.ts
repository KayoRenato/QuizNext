export default class AnswerModel {
    #value: string
    #correct: boolean
    #uncovered: boolean


    constructor(value: string, correct: boolean, uncovered = false) {
        this.#value = value
        this.#correct = correct
        this.#uncovered = uncovered
    }

    static correct(value: string) {
        return new AnswerModel(value, true)
    }

    static incorrect(value: string) {
        return new AnswerModel(value, false)
    }

    get value(): string {
        return this.#value
    }

    get correct(): boolean {
        return this.#correct
    }

    get uncovered(): boolean {
        return this.#uncovered
    }

}