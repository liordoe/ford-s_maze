const checkAnswer = (args, answer) => args.reduce((a, c) => a+=c, 0) === answer;
const splitVals = (args, translated) => {
    let i = 0;
    return args.map(arg => {
        const res = translated.slice(i, i+arg.length);
        i += arg.length;
        return Number(res.join(''));
    });
};

module.exports = {
    checkAnswer,
    splitVals
};
