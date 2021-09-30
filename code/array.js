const arrayAnalysis = (array) => {
    return {
        min: Math.min(...array),
        max: Math.max(...array),
        average: array.reduce((a, b) => a + b) / array.length,
        length: array.length,
    }
};

export default arrayAnalysis;
