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

const cars = ['volvo','mazda','ford']
for(let i=0; i< cars.length; i++){
    console.log(cars[i]);
}
for (let mash of cars){
    console.log(mash)
    
}

//number
console.log('MAX_SAFE_INTEGER',Number.MAX_SAFE_INTEGER)
console.log('math.pow 53', Math.pow(2,50)-1)
console.log('Min safe integer', Number.MIN_SAFE_INTEGER)
console.log('Max value', Number.MAX_VALUE)
console.log('min value', Number.MAX_VALUE)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('positive', Number.NaN)
console.log(Number.isNaN(42))
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(42))
const stringint='42'
const stringfloat='40.2'
console.log(Number.parseInt(stringint)+2)
console.log(Number.parseFloat(stringfloat)+2)
console.log(0.4+0.2)
console.log(+(0.4+0.2).toFixed(1))
console.log(parseFloat((0.4+0.2).toFixed(1)))

//bigInt
console.log(typeof 654549789765465)
console.log(typeof 6549849849813213213213156463465465456465464n)//BigInt
console.log(25n-24n)
console.log(-26n)
console.log(254.25n) //error
console.log(10n-4) //error
console.log(10n-BigInt(4))
console.log(5n/2n)//2n

// Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.pow(3,3))
console.log(Math.abs(-42))
console.log(Math.max(42,465,978,2132,46,987,32))
console.log(Math.min(42,465,978,2132,46,987,32))
console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))

//4 example function
function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
    
}
console.log(randomNumber(10,100))
 
//строки
const name = 'Санжар'
const age = 32
//const output = 'Привет, меня зовут '+ name+ 'и мне '+age+' года'
//const output = `Привет меня зовут ${name} и мне ${age < 34 ? '32':'27'} года`
const output = `kmjhkj
<div>
ghbndtn
</div>
`
console.log(output)

const myname = '   Sanjar   '
console.log(myname.length)
console.log(myname.toUpperCase())
console.log(myname.toLowerCase())
console.log(myname.indexOf('r'))
console.log(myname.startsWith('san'))
console.log(myname.endsWith('ar'))
console.log(myname.repeat(3))
console.log(myname.trim())
function personData(s, name, age){
if (age < 0){
 age="еще не родился"
}
return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName ="Sankar"
const personAge = -10
const output = personData`Имя:${personName}, Возрост: ${personAge} !`
console.log(output)

// Функции

// function declaration
function myself (name){
 console.log('my name is:', name);
}
myself('sanjar');

// function Experssion
const myself2 = function myself2(name) {
console.log( 'my name is:', name)
}
myself2('lilian')

//## разница между function declaration и function Experssion в том что деклорешен можно вызывать вызывать из любой части кода, а функция экспершен можно вызывать только после определения создания функции
console.log( typeof myself2)
console.dir(myself) // функция по сути своей это объект


//Анонимные функции
let counter = 0
const interval = setInterval(
    function(){
        if( counter===10){
            clearInterval(interval)            
        }
        else{
            console.log(++counter)
        }
    }
, 1000)
*/

// стрелоная функция
const arrow = (name) =>{
    console.log('Привет -', name)
}
arrow('Sardor')
const arrow2 = name2 => console.log('hi - I am', name2)
arrow2('Sanjar')

const pow2=num=> num**2
console.log(pow2(16))
const sum =(a=4,b=2)=>a+b
console.log (sum())
console.log(sum(6,8))

function sumAll(...all){
    let result=0;
    for (let num of all){
        result+=num
    }
    return result

}
const res = sumAll(1,20,3,48,5,78,7)
console.log(res)

function createMember(name){
    return function(lastName){
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('Azizov')
console.log(logWithLastName('Sanjar'))
console.log(logWithLastName('Sardor'))