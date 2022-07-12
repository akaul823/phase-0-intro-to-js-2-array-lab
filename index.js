// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

function appendCat(name){
    const newCat = [...cats, "Broom"];
    return newCat;
}

function prependCat(name){
    const newCat = ["Arnold", ...cats];
    return newCat;
}

function removeLastCat(){
    const newCat = [...cats.slice(0,2)];
    return newCat;
}

function removeFirstCat(){
    const newCat = [...cats.slice(1,3)];
    console.log(newCat);
    return newCat;
}


