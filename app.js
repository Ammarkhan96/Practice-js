// let age = 26
// let year = 1996
// console.log(age, year);

// age = 100
// console.log(age)

// const pointer = 200
// console.log(pointer)

// var score = 203
// console.log(score)

//string
// console.log('hello', 'world')


// let email = 'mario@theninjanet.com.pk'
// console.log(email)

//string concatenation
// let firstName = 'Brandon'
// let lastName = 'Sanderson'
// let fullName = firstName+ ' ' + lastName
// console.log(fullName)


//getting character
// console.log(fullName[3])
// console.log(lastName[4])


//string length
// console.log(fullName.length)
// console.log(lastName.length)
// console.log(firstName.length)


//string method
// console.log(fullName.toUpperCase())

// let result = (fullName.toLowerCase())
// console.log(result, fullName)


// let index = email.indexOf('@')
// console.log(index)




// var email = 'mario@thenetninja.co.pk'
// var result = email.lastIndexOf('n')
// var results = email.slice(0, 10)
// var resltss = email.slice(2, 6)
// var name1 = email.substring(3, 12)
// console.log(result)
// console.log(results)
// console.log(resltss)
// console.log(name1)

// var name2 = email.replace('m', 'w')
// console.log(name2)

// var name3 = email.replace('n', 'w')
// console.log(name3)






// var radius = 10
// var pi = 3.14
// console.log(radius, pi)


//math.operators:(+ - / * %)

// console.log(10 / 2)

// var radius = 10
//  var pi = 3.14

//  var result = radius % 3
//  console.log(result)


//  var ans = pi * radius**2
//  console.log(ans)


//  var answ = 5 * (10-3)**2
//  console.log(answ)


//  var likes = 14
//  likes = likes + 1
//  console.log(likes)

//  var like = 199
//  like++
//  console.log(like)

//  var liked = 251
//  liked--
//  console.log(liked)

//  var likd = 20
//  likd += 20
//  console.log(likd)


//  var likess = 45
//  likess -= 12
//  console.log(likess)

//  var liiked = 20
//  liiked *= 2
//  console.log(liiked)

//  var lliked = 20 
//  lliked /= 2
//  console.log(lliked)




//  console.log(5 / 'hello')


// var likes = 10

// var ans = ('This blog has ' +  likes + ' likes')
// console.log(ans)



// const title = 'Best reads of 2019'
// const author = 'Mario'
// const likes = 30
// //gigantic string:
// // var result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes '

// //backticks:
// // var result = `The blog called ${title} by ${author} has ${likes} likes`

// //html templates:
// var result = `
//   <h2>${title}</h2>
//   <p>By ${author}</p>
//   <span>This blog has ${likes} likes</span>
// `
// console.log(result)



//array:
// var ninjas = ['shaun', 'ryu', 'chun-li']
// console.log(ninjas)

// var ninja = ['shaun', 'ryu', 'chun-li']
// console.log(ninja[2])

// var ninjaa = ['shaun', 'ryu', 'chun-li']
// ninjaa[1] = 'Ken'
// console.log(ninjaa[1])


// var ages = [20, 24, 35, 46]
// console.log(ages[3])


// var random = ['shaun', 'crystal', 30, 21]
// console.log(random)

// console.log(ninja.length)
// console.log(random.length)

// array methods

// var result = ninjas.join(',')
// console.log(result)


// var results = ninjas.indexOf('chun-li')
// console.log(results)


// var my = ninjas.concat(['ken', 'crystal'])
// console.log(my)

// var may = ninjas.push('rush')
// console.log(ninjas)

// var maay = ninjas.pop('ken')
// console.log(maay)

// var age; 
// console.log(age, age + 3, `the ages is ${age}`)

// console.log(true, false, 'true', 'false')

// var email = 'luigi@thenetninja.co.pk'
// var names = ['mario', 'luigi', 'toad']

// // var result = email.includes('@')
// // var result = email.includes('luigi')
// var result = email.includes('!')

// console.log(result)


//comparison operators

// var age = 25
// console.log(age == 25)
// console.log(age == 30)
// console.log(age != 30)
// console.log(age > 20)
// console.log(age < 20)
// console.log(age <= 25)
// console.log(age >= 25)

// var names = 'shaun'
// console.log(names == 'shaun')
// console.log(names == 'Shaun')
// console.log(names > 'crystal')
// console.log(names > 'Shaun')
// console.log(names > 'Crystal')


// var score = '100' 
// score = Number(score)
// console.log(score + 1)
// console.log(typeof score)


// var rrr = Number('hello')
// var rrr = String(59)
// console.log(rrr)


// var bool = Boolean(100)
// console.log(bool , typeof bool)


// var text = 'Ammar Hanif Khan'
// var array = text.split(' ')
// console.log(array)



// var text = 'Please read this application and give me gravity'
// var array = text.split(' ')
// console.log(array)
// var pairofVowels = []
// var setofVowels = []
// function checkVowels(param) {
//     switch(param){
//         case 'a':
//             return true;
//         //break
//         case 'e':
//            return true;
//         case 'i':
//            return true;
//         case 'o':
//             return true;
//         case 'u':
//          return true;
//          default:
//         return false;
//     }
// }

// for (var i = 0; i < array.length; i++){
//     var word = array[i].split("")
//     for(var j = 0; j < word.length-1; j++){
//         var pair = word[j] + word[j + 1]
//         pairofVowels.push[pair]
//     }
// }
// console.log(pairofVowels);

// for (var i = 0; i < pairofVowels.length; i++){
//     var splittedPair = pairofVowels[i].split("")
//     var firstLetter = splittedPair[0]
//     var secondLetter = splittedPair[1]
//     if(checkVowels(firstLetter) && checkVowels(secondLetter)){
//         setofVowels.push(pairofVowels[i])
//     }
// }
//  console.log(setofVowels)



// var age = +prompt('Enter your age to check you are adult or not')
// console.log(age)
// if (age >= 18){
//     alert('Yes')
// }
// else if (age < 18 && age >= 1){
//     alert('No')
// }
// else {
//     alert('Invalid Age')
// }


// var text = "Hello World"
// function customIndexOf(param){
//  for(var i = 0; i < text.length; i++){
//     if (param === text[i]){
//         return i
//     }
//  }
//  return i - text.length - i
// }
// console.log(customIndexOf("r"))

//BMI Calculator

// var weigth = +prompt('Enter your Weigth in Ib')
// var heigth = +prompt('Enter your heigth in Inches')
// var result = (weigth / (heigth * heigth))* 703
// console.log(result)
// if (result >=0 && result < 18.5){
//     alert('Underweigth')
// }
// else if (result >= 18.5 && result <= 24.9){
//     alert('Normal weigth')
// }
// else if (result >= 25 && result<= 29.9)
// alert('Overwieght')

// else{
//     alert('Obesity')
// }


// var time = Number(prompt('Enter time in hundred hour format'))
// if (time >= 0000 && time < 1200){
//     alert('Good Morning!')
// }
// else if(time >= 1200 && time < 1700){
//     alert('Good Afternoon!')
// }
// else if (time >= 1700 && time < 2100){
//     alert('Good Evening!')
// }
// else if (time >= 2100 && time < 2359){
//     alert('Good Night')
// }
// else {
//     alert('Invalid time input')
// }


// for loop

// for (var i = 0; i < 5; i++){
//     console.log('in loop:' , i)
// }
// console.log('loop finished')


// for ( var i = 0; i < 7; i++){
//     console.log('in loop:', i)
// }
// console.log('loop finished')


// const names = ['mario', 'shawn', 'luingi']
// for (var i = 0; i < names.length; i++){
//     // console.log(i)
//     var html = `<div>${names[i]}</div>`
//     console.log(html)
// }


// var i = 0
// while (i < 5){
//     console.log('in loop:', i)
//     i++
// }


// const names = ['mario', 'luigi', 'shaun']
// var i = 0
// while (i < names.length){
//     console.log(names[i])
// }

// var i = 3

// do {
//     console.log('val of i is:', i)
//     i++;
// }while( i < 5)


// var i = 9
// do {
//     console.log('val of i is:', i)
//     i++;
// }while(i > 6)


// const age = 25

// if (age > 20){
// console.log('you are over 20 years old')
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi']
// if(ninjas.length > 4) {
//     console.log("that's a lot of  ninjas")
// }


//logical operations

// const password = 'p@ss12'
// if (password.length >= 12 && password.includes('@')){
//     console.log('that password is might strong!')
// }

// else if (password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('This password is strong enough!')
// }
// else{
//     console.log('This password is not strong enough!')
// }


//logical NOT(!)

// const user = false
// if(user){

// }
// console.log(!true)
// console.log(!false)



// var users = true
// if(users){

// }
// console.log(!false)
// console.log(!true)


// var abc = true 
// if(abc){

// }
// console.log(!false)
// console.log(!true)


// var efg = false
// if(!efg){
// console.log('you must logged in to continue')
// }
// console.log(!true)
// console.log(!false)


//break and continue

// var scores = [ 50, 25, 0, 30, 100, 20, 10 ]
// for (var i = 0; i < scores.length; i++){


//     if(scores[i] === 0) {
//         continue
//     }
//     console.log('your score: ' , scores[i])

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!')
//         break
//     }
// }


// swtich cases
// const grade = 'K';

// switch (grade) {
//     case 'A':
//     console.log('You got an A!')
//     break
//     case 'B':
//         console.log('You got an B!')
//         break
//     case 'C':
//          console.log('You got an C!')
//          break
//     case 'D':
//         console.log('You got an D!')
//         break    
//     case 'E':
//         console.log('You got an E!')
//         break
//     default:
//         console.log('Not a valid grade')
// }


//variables & block scope

var age = 30;

if (true){
   var agee = 40;
   names = 'shaun'
    console.log('inside 1st code block:', agee, names)
}

console.log('ouside code block:', age, names)