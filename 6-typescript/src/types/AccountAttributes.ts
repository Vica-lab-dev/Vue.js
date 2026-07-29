interface Note {
    date: Date,
    text: string,
}

export default interface AccountAttributes {
    createdAt: string,
    notes: Note[]
}