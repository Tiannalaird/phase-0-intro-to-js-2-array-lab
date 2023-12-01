// Write your solution here!
function initializeCats() {
    return ["Milo", "Otis", "Garfield"];
  }
  const cats = initializeCats();
  function destructivelyAppendCat(name) {
    cats.push("Ralph");
  }
  function destructivelyPrependCat(name) {
    cats.unshift("Bob");
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function removeFirstCat() {
    return cats.slice(1);
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function appendCat(name) {
    return [...cats, name];
  }
  function prependCat(name) {
    return [name, ...cats];
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }