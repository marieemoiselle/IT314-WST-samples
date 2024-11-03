function analyzeEquality(a, b) {
    if (a == b && a === b) {
        console.log(`Both loose and strict equality: ${a} and ${b} are equal.`);
    } else if (a == b && a !== b) {
        console.log(`Loose equality but NOT strict equality: ${a} and ${b} are equal.`);
    } else if (a !== b) {
        console.log(`${a} and ${b} are NOT equal by any comparison.`);
    } else {
        console.log(`Unexpected case for ${a} and ${b}.`);
    }
}

analyzeEquality(0, '');
analyzeEquality(false, '0');
analyzeEquality([1], 1); 
analyzeEquality(null, 0);
