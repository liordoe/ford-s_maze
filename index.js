const permute = require('./permute');
const { checkAnswer, splitVals } = require('./utils');

console.time('permutations');
const PERMUTATIONS = permute('1234567890'.split('')).filter(x => x[0] !== '0');
console.timeEnd('permutations');

const summ  = (...args) => {
    const val = args.reduce((a, c) => a+=c, '');
    const alphabet = [...new Set(val)];
    let currInd = 0;
    let res = false;
    let answer, vals = 0;

    console.time('loop');
    do {
        const permutation = PERMUTATIONS[currInd];
        const map = new Map([]);
        for (let i = 0; i < alphabet.length; i++) {
            map.set(alphabet[i], permutation[i]);
        }

        const translated = val.split('').map(x => map.get(x));
        const splitted = splitVals(args, translated);

        [ answer, ...vals ] = splitted.reverse();
        res = checkAnswer(vals, answer);
        currInd++;
    } while (!res && currInd < PERMUTATIONS.length);
    console.timeEnd('loop');

    console.log(`${vals.reduce((a, c) => [c + ' + '].concat(a),  [` = ${answer}`]).join('')} - ${res}`);
};

summ('donald', 'gerald', 'robert');
