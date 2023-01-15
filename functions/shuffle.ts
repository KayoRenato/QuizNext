export default function shuffle(data: any[]): any[] {
    return data
        .map(item => ({ item, rand: Math.random() }))
        .sort((A, B) => A.rand - B.rand)
        .map(obj => obj.item)

}
