/*function calcAge(year){
    return 2022-year
}
function infoMan(name, year){
    const age = calcAge(year)
    if(age > 0){
        console.log('my name is ' + name + ', i am ' + age + ' year old')
    } 
    else{
        console.log('error')
    }    
}
infoMan('Sanjar', 1990)

const cars = ['volvo','mazda','ford']
console.log(cars)
console.log(cars[0])
cars[cars.length]='porsche'
console.log(cars)
*/
const cars = ['volvo','mazda','ford']
for(let i=0; i< cars.length; i++){
    console.log(cars[i]);
}
for (let mash of cars){
    console.log(mash)
    
}