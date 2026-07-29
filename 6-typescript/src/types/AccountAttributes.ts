export default interface AccountAttributes {
    createdAt: string,
    notes: {
        date: Date,
        text: string
    }[]
}