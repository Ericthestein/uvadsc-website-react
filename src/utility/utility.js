
const newlineRegularExpression = /\r?\n|\r/g;
export const newlinesToBr = (str) => {
    return str.replace(newlineRegularExpression, "<br>");
}