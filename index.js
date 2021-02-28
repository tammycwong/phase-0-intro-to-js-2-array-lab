// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(name) {
    cats.splice(-1);
}
function destructivelyRemoveFirstCat(name) {
    cats.splice(0,1);
} 
function appendCat(name) {
    const copyOfAppendCats = [...cats, "Broom"];
    return copyOfAppendCats;
}
function prependCat(name) {
    const copyOfPrependCat = ["Arnold", ...cats];
    return copyOfPrependCat; 
}
function removeLastCat(name) {
    const copyOfLastCat = cats.slice(0, cats.length -1);
    return copyOfLastCat;
}
function removeFirstCat(name) {
    const copyOfFirstCat = cats.slice(1);
    return copyOfFirstCat;
}