const app = "I don't do much"
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph){
return [kittens.push("Ralph")]
}

function destructivelyPrependKitten(){
 return [kittens.unshift("Bob")] 
}

function destructivelyRemoveLastKitten(){
  return [kittens.pop()]
}

destructivelyRemoveFirstKitten(){
  return [kittens.shift()]
}