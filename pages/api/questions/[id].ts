/* eslint-disable import/no-anonymous-default-export */
import questionsDB from '../questionsDB'

export default (req, res) => {
    const idSelected = +req.query.id
    const hasQuestion = questionsDB.filter(question => question.id === idSelected)

    if (hasQuestion.length === 1) {
        const questionSelected = hasQuestion[0].shuffleAnswers()
        res.status(200).json(questionSelected.toObject())
    } else {
        res.status(204).send(0)
    }

}
