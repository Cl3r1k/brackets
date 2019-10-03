module.exports = function check(str, bracketsConfig) {

    let result = true;
    const openBracketStack = [];

    for (let chIndex = 0; chIndex < str.length; chIndex++) {

        const currentChar = str.charAt(chIndex);

        bracketsConfig.map(bracketsPair => {

            if (bracketsPair[0] === currentChar) {

                if (bracketsPair[0] !== bracketsPair[1]) {
                    openBracketStack.push(currentChar);
                } else {
                    if (openBracketStack.length > 0 && openBracketStack[openBracketStack.length - 1] === currentChar) {
                        openBracketStack.pop();
                    } else if (openBracketStack.length === 0) {
                        openBracketStack.push(currentChar);
                    } else {
                        let revIndex = openBracketStack.length - 1;
                        for (revIndex; revIndex > 0; revIndex--) {
                            if (openBracketStack[revIndex] === currentChar) {
                                result = false;
                                break;
                            }
                        }

                        if (revIndex === 0) {
                            openBracketStack.push(currentChar);
                        }
                    }
                }

            } else if (bracketsPair[1] === currentChar) {

                if (openBracketStack.length === 0 || openBracketStack[openBracketStack.length - 1] !== bracketsPair[0]) {
                    result = false;
                } else {
                    openBracketStack.pop();
                }
            }
        });
    }

    if (openBracketStack.length > 0) {
        result = false;
    }

    return result;

}
