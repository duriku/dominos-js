'use strict'

const app = require('../app')
const expect = require('chai').expect

describe('App Module', () => {
    describe('"dominos"', () => {
        it('should export a function', () => {
            expect(app.findLongestDominoString).to.be.a('function')
        })

        it('should return an empty array', () => {
            expect(app.findLongestDominoString([])).to.deep.equal([]);
        })

        it('should return a single item', () => {
            expect(app.findLongestDominoString([[1,2]])).to.deep.equal([1,2]);
        })

        it('should return a the longest item two items', () => {
            expect(app.findLongestDominoString([[1,2], [2, 3]])).to.deep.equal([1,2,3]);
        })

        it('should return a the longest item two items opposite order', () => {
            expect(app.findLongestDominoString([[2, 3], [1,2]])).to.deep.equal([1,2,3]);
        })

        it('should return a the first item, if no match', () => {
            expect(app.findLongestDominoString([[2, 3], [5,5]])).to.deep.equal([2,3]);
        })

        it('should return a the longest item, four items', () => {
            expect(app.findLongestDominoString([[2, 3],  [1,8], [5,5], [3,5] ])).to.deep.equal([2,3,5,5]);
        })

        it('should return a the longest item, four items starting with mid domino', () => {
            expect(app.findLongestDominoString([[1,8], [5,5], [2, 3], [3,5] ])).to.deep.equal([2,3,5,5]);
        })

        it('should return a the longest item, four items starting with mid domino reverse order', () => {
            expect(app.findLongestDominoString([[1,8], [5,5], [3, 2], [3,5] ])).to.deep.equal([2,3,5,5]);
        })
    })
})