const myObject={
    js:"JavaScript",
    cpp:"C++",
    rb:'ruby',
    swift:'swift by app'
}

/* ----- for in looo -----*/

for(const key in myObject)
{
    console.log(key)
}

for(const key in myObject)
{
    console.log(myObject[key])
}

for(const key in myObject)
{
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


/*   for in for arrays */

console.log("----------------------")
const prog=[1,2,3,4,5,6,7,8]

for(const key in prog)
{
    console.log(key)
}



const map=new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
map.set('UK',"England")

console.log(map)

//wont run as map is not iteratable
for(const key in map)
{
    console.log(key)
}

