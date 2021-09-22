import './json/8_test-Literature-Classics.json'

export default class Test {
    constructor(title, testId, genre, genreId, head){
        this.title = title
        this.testId = testId
        this.genre = genre
        this.genreId = genreId
        this.head = head
    }
}

export function printTestLink(test){
    console.log(`./json/${test.testId}_${test.head}_${test.genreId}.json`)
}