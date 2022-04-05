// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

// cats.push("Jimmy")

function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    let newCats = [...cats]
    newCats.push(name)
    return newCats
}
function prependCat(name) {
    let newCats = [...cats]
    newCats.unshift(name)
    return newCats
}
function removeLastCat(name) {
    let newCats = [...cats]
    newCats.pop()
    return newCats
}
function removeFirstCat(name) {
    let newCats = [...cats]
    newCats.shift()
    return newCats
}