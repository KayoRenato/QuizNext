import type { NextApiRequest, NextApiResponse } from 'next'
import questionsDB from '../questionsDB'

type Data = {
    id?: number
    msg?: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    try {
        const id = req.query.id ? +req.query.id : 0
        const hasQuestion = questionsDB.filter(question => question.id === id)[0]

        if (!!hasQuestion) {
            res.status(200).json(hasQuestion.toObject())
        } else {
            res.status(404).json({
                msg: 'Question not found!'
            })
        }

    } catch (error) {
        res.status(500).json({
            msg: 'Error while finding this page!'
        })
    }


}
