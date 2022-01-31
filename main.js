function calcAge(year){
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
