const heroes=['a','b','c']
const vill=['d','e','f']

// heroes.push(vill)

// console.log(heroes)
// console.log(heroes[3][2])

// heroes.concat(vill)
// console.log(heroes)

// const new_heroes=heroes.concat(vill)
// console.log(new_heroes)

const all_new_heroes=[...heroes,...vill]
// console.log(all_new_heroes)

const another=[1,2,3,[4,5,6],7,[8,9,[0,12]]]

const real_array=another.flat(Infinity)
// console.log(real_array)


console.log(Array.isArray("Adp"))
console.log(Array.from("ADPPP"))
console.log(Array.from({name:"adp"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))