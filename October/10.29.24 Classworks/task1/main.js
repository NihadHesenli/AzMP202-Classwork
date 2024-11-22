// task-1

// let age = +prompt("Yasi daxil edin")

// if(age >= 65 && age <= 125){
//     alert("pensiyaya dusdun")
// }else{
//     alert("pensiyaya dusmursen get isle")
// }

// task - 2

// let firstSide = +prompt("Birinci bucaqi daxil et");
// let secondSide = +prompt("Ikinci bucaqi daxil et");
// let thirdSide = +prompt("Ucuncu bucaqi daxil et");

// if(firstSide === secondSide && secondSide === thirdSide){
//     alert("Beraber terefli ucbucaq")
// }else if(firstSide === secondSide && secondSide !== thirdSide){
//     alert("Duz bucaqli")
// }else{
//     alert("Muxtelif terefli")
// }

// task-3

// let number = +prompt("Reqem daxil et");

// if(number % 2 == 0){
//     alert('cut ededdir')
// }else{
//     alert("tek eddeddir")
// }

// task-4

// let week = +prompt("Ayi daxil edin")

// switch (week) {
//     case 1:
//         alert("Yanvar")
//         break;
//     case 2:
//         alert("Fevral")
//         break;
//     case 3:
//         alert("Mart")
//         break;
//     case 4:
//         alert("Aprel")
//         break;
//     case 5:
//         alert("May")
//         break;
//     case 6:
//         alert("Iyun")
//         break;
//     case 7:
//         alert("Iyul")
//         break;
//     case 8:
//         alert("Avqust")
//         break;
//     case 9:
//         alert("Sentyabr")
//         break;
//     case 10:
//         alert("OKtyabr")
//         break;
//     case 11:
//         alert("Noyabr")
//         break;
//     case 12:
//         alert("Dekabr")
//         break;

//     default:
//         if(week > 12){
//             alert("Bele ay yoxdur")
//         }
//         break;
// }

// task-5

// let number = prompt("Reqem daxil edin")

// if(number %2 === 0){
//     if(number %3 === 0 && number %5 ===0){
//         alert("eded 3 ve 5 bolunur")

//     }else{
//         alert("eded 3 ve 5 bolunmur")
//     }
// }else{
//     alert("eded tek ededdir")
// }

// task-6

// let number = prompt("eded daxil edin");

// let qaliq = (number % 2);

// if(number %2 === 0){
//     alert("qaliq tam bolundu")
// }else{
//     alert(`${qaliq}`)
// }

// task-7

// let number1 = +prompt("eded daxil ele")
// let number2 = +prompt("2 ci eded daxil et")

// if(number1 * number2 > 0){
//     alert("hasil musbetddir")

// }else{
//     alert("hasil menfidir")
// }

// task-8

// let number = prompt("eded daxil et")
// if (number > 0 && number < 100) {
//     alert("eded 0-100 araligindadi")
// }else(
//     alert("eded 0-100 araliginda deyil")
// )

// task-9

// let number1 = prompt("birinic musbet ededi daxil edin")
// let number2 = prompt("ikinci msubet ededi daxil edin")
// let number3 = prompt("ucuncu musbet eded daxil edin")

// if (number1 > 0 && number2 > 0 && number3 > 0) {
//     if(number1 > number2 && number1 > number3){
//         alert(number1)
//     }else if( number2 > number1 && number2 > number3){
//         alert(number2)
//     }else if(number3 > number1 && number3 > number2){
//         alert(number3)
//     }
// }else{
//     alert("ededler musbet eded deyil")
// }

// task-10

// let grade = prompt("Yigdigin bali yaz")

// if(grade > 0){
//     if(grade >= 90){
//         alert("A aldin")
//     }else if(grade >= 80 && grade < 90){
//         alert("B aldin")
//     }else if(grade >= 70 && grade < 80){
//         alert("C aldin")
//     }else if(grade >= 60 && grade < 70){
//         alert("D aldin")
//     }else if(grade > 0){
//         alert("F aldin")
//     }
// }else{
//     alert("qaqa sen partlatmisan")
// }

// task-11-1

// let age = +prompt("Yasivi qeyd ele")

// if(age > 0){
//     if(age >= 65){
//         alert("Yasli ")
//     }else if(age < 65 && age >= 18){
//         alert("Yetkin")
//     }else if(age < 18){
//         alert("Maladoy")
//     }
// }else{
//     alert("menfi yas olur?")
// }

// task-11-2

// let dayHour = prompt("Saati daxil et")

// if(dayHour < 24 && dayHour > 0){
//     if(dayHour < 6){
//         alert("Geceniz xeyir")
//     }else if (dayHour < 12) {
//         alert("Sabahiniz xeyir")
//     }else if(dayHour < 17){
//         alert("Gunortaniz xeyir")
//     }else{
//         alert("Axsaminiz xeyir")
//     }

// }else{
//     alert("duzgun saat daxil et")
// }

// task-12

// let x = +prompt("X deyisenin qiymetinin daxil edin")
// let y = +prompt("Y deyisenin qiymetinin daxil edin")

// if(x > 0 && y < 0){
//     alert(x*4 + y*2 +4)

// }else if(x > 0 && y === 0){
//     alert(x*2 - y +3)
// }else if(x < 0 && y > 0){
//     alert(x*3 + y*4 +3)
// }else{
//     alert("X sifir ola bilmez")
// }
    
// task-13

// let salary = +prompt("Emek haqqinizi daxil edin")
// let amount = +prompt("Istediyiniz meblegi daxil edin")
// let month = +prompt("Istediyiniz Muddeti daxil edin")

// let maxCredit = salary * 10;
// let monthlyPayment = amount / month;

// if(month < 36 && maxCredit > salary && monthlyPayment < salary * 0.45  ){
//     if(month < 12){
//         alert(`${amount} azn mebleq size 13% ${month} ay muddetinde ${monthlyPayment}`)

//     }else if(month < 24 ){

//         alert(`${amount} azn mebleq size 15% ${month} ay muddetinde ${monthlyPayment}`)

//     }else if(month < 36){

//         alert(`${amount} azn mebleq size 17% ${month} ay muddetinde ${monthlyPayment}`)
//     }else{
//         alert('size bu shertlerle kredit dushmur')
//         console.error("size bu shertlerle kredit dushmur");
//     }
// }else{
//     alert('size bu shertlerle kredit dushmur')
//     console.error("size bu shertlerle kredit dushmur");
// }