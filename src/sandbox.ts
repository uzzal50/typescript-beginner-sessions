//function signatures

//eg : 1
let greet: (a: string, b: string) => void
greet = (name: string, lname: string) => {
  console.log(`name is ${name} and last name is ${lname}`)
}
greet('ujol', 'kc')

//eg : 2
let kc: (a: number, b: number, c: string) => number
kc = (numberOne: number, numberTwo: number, action: string) => {
  if (action === 'add') {
    return numberOne + numberTwo
  }
  return numberOne - numberTwo
}

//eg : 3
let iyer: (obj: { name: string; lname: string }) => void
type obj = { name: string; lname: string }
iyer = (ninja: obj) => {
  console.log(`${ninja.name} is ${ninja.lname}`)
}

//function bascis
const add = (a: number, b: number, c?: string | number) => {
  //c is optional
  console.log(a + b)
  console.log(c)
}

add(5, 5)
