const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = name => {
    cats.push(name);
};

const destructivelyPrependCat = name => {
    cats.unshift(name);
};

const destructivelyRemoveLastCat = () => {
    cats.pop();
};

const destructivelyRemoveFirstCat = () => {
    cats.shift();
};

const appendCat = name => {
    let newCats = [...cats]
    newCats.push(name);
    return newCats;
};

const prependCat = name => {
    let newCats = [...cats]
    newCats.unshift(name);
    return newCats;
};

const removeLastCat = () => {
    let newCats = [...cats]
    newCats.pop();
    return newCats;
};

const removeFirstCat = () => {
    let newCats = [...cats]
    newCats.shift();
    return newCats;
};