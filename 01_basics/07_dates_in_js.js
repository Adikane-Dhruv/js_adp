//date

let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)

let createDate=new Date(2023,0,23)
console.log(createDate.toDateString())


let createDate2=new Date(2023,0,23,5,6)
console.log(createDate2.toLocaleString())

let timestp=Date.now()
console.log(timestp)
console.log(createDate.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getHours())

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))