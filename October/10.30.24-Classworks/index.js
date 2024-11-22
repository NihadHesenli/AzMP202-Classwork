// for (let i = 0; i <= 100 ; i++) {
//     console.log(i);
    
// }

// let count;

// for (let i = 0; i <= 100 ; i++) {
//     if(i%2===1){
//        count =i++;
        
//     }
    
// }
// console.log(count);

// let sum = 0;

// for (let i = 0; i <= 100 ; i++) {
//     if(i%5===0){
//         sum+=i;
//     }
    
// }
// console.log(sum);


// let array =[12,14,35,56,68,93]
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i]
// }
// console.log(sum);


// for (let i = 0; i < array.length; i++) {
//     if (i%2===1) {
//         sum += array[i]
//     }
// }
// console.log(sum);

// for (let i = 0; i < array.length; i++) {
//     if (i%2===0) {
//         sum += array[i];
        
//     }
// }
// console.log(sum);

// let max= 0

// for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//         max = array[i];
//     }
// }

// let min= 100

// for (let i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//         min = array[i];

//     }
// }
// let ferq= max - min

// console.log(ferq);


// let num = 12

// for (let i = 0; i < array.length; i++) {
//     if (num===array[i]) {
//         console.log(num);
//         break
//     }else{
//         console.log("netu idi otsyuda");
//         break;
        
//     }
    
// } 


// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
//   ];

// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].salary > 60000) {
//         console.log(employees[i]);
   
//     }
// }

// let num = prompt("reqem daxil et")

// let fac= 1

// for (let i = num; i > 0; i--) {
//     fac *= i
// }

// alert(fac)

// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloremque at! Accusamus doloribus voluptates sint earum quidem. Delectus, accusamus asperiores."
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === "l") {
//         count++;
        
        
//     }
// }
// console.log(count);

// const countries = ["azerbaijan" , "norway" , "albania", "germany", "america"]
// let firtsLetter
// for (let i = 0; i < countries.length; i++) {
//     if (countries[i][0]=== 'a'&& countries[i][countries[i].length-1]=== "a") {
//         console.log(countries[i]);  
//     }
// }

// let n=427;

// while (n>0) {
//     let reminder= n % 10
//     console.log(reminder);
//     n= (n-reminder) / 10;
// }


// const scores= [ 60,75,88,75,93,45]
// let sum = 0;
// let max= scores[0]
// let min = scores[0]

// for (let i = 0; i < scores.length; i++) {
//     sum += scores[i]
//     if (max < scores[i]) {
//         max = scores[i]
        
        
//     }
// }
// console.log(max);

// for (let i = 0; i < scores.length; i++) {
//     if (min > scores[i]) {
//         min = scores[i]
        
        
//     }
// }
// console.log(min);


// let ortalama= (sum / scores.length)
// console.log(ortalama);
