const name="adp"
const count=50

console.log(name+count+"hello")

console.log(`Hello this is ${name} and my repocount is ${count}`)

const gameName=new String("Mine-craft")
console.log(gameName)

console.log(gameName[2])
console.log(gameName[3])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('r'))

const newString=gameName.substring(0,4)
console.log(newString)

const another=gameName.slice(2,6)
console.log(another)

const another2=gameName.slice(-8,6)
console.log(another2)

const newString2="      adp      ";
console.log(newString2)
console.log(newString2.trim())

const url="https://adp/adppp%%%adp"
console.log(url.replace("%",'-'))
console.log(url.replace("%%",'-'))
console.log(url.replace("%%",'-'))

console.log(url.includes('adp'))

const jname="Java-Script-Type-Script"

console.log(jname.split('-'));