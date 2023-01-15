export default class AnswerModel {
    #value: string
    #correct: boolean
    #uncovered: boolean


    constructor(value: string, correct: boolean, uncovered = false) {
        this.#value = value
        this.#correct = correct
        this.#uncovered = uncovered
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