'use strict'

function findLongestDominoString(input) {
    if (!input || input.length === 0) {
        return input;
    }

    let maxResult = [];

    for (let starter = 0; starter < input.length * 2; starter++) {
        let dominos = Array.from(input);

        // swap starter and put to first position
        let temp = dominos[0];
        const quotient = Math.floor(starter / 2);
        const remainder = starter % 2;

        // change initial domino direction
        if (remainder){
            let temp = dominos[quotient][0];
            dominos[quotient][0] = dominos[quotient][1];
            dominos[quotient][1] = temp;
        }

        dominos[0] = dominos[quotient];
        dominos[quotient] = temp;

        let result = [];
        result.push(dominos[0][0])
        result.push(dominos[0][1])

        let i = 1;
        while (i < dominos.length) {
            if (result[result.length - 1] === dominos[i][0]) {
                result.push(dominos[i][1])
                dominos.splice(i, 1)
                i = 0;
            } else if (result[0] === dominos[i][1]) {
                result.unshift(dominos[i][0])
                dominos.splice(i, 1)
                i = 0;
            }
            i++;
        }

        if (maxResult.length < result.length) {
            maxResult = Array.from(result);
        }
    }

    return maxResult
}

module.exports = {
    findLongestDominoString
}