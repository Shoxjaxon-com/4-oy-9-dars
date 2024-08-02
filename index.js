                                                                        // forEach
// 1-masala
// let arr = [1,2,3,4,5]
// let res = arr.forEach(function(v){
//     console.log(v*2); 
// }) 

// 2-masala
// let arr =["appple", 'banana','cherry']
// let res = arr.forEach(function(v){
//     console.log(v.toUpperCase());
// }) 

// 3-masala
// let arr = [1,2,3,4,5]
// let res =arr.forEach(function(v){
//     console.log(v+5);
// })

                                                                           //MAP
// 1-masala
// let arr =[1,2,3,4,5]
// let res = arr.map(function(v){
//     console.log(v*2);
// })

// 2-masala
// let arr =["appple", 'banana','cherry']
// let res = arr.map(function(v){
//     console.log(v.toUpperCase());
// }) 
// 3-masala
// 3-masala
// let arr = [1,2,3,4,5]
// let res =arr.map(function(v){
//     console.log(v+5);
// })

                                                                            // Filter
// 1-masala                                                                            
//  let arr =[1,2,3,4,5,6]
// let res = arr.filter(function(v){
//     return v % 2 == 0
// })
// console.log(res);

// 2-masala
// let arr =['apple', 'banana', 'cherry', 'date']
// let res = arr.filter(function(v){
//     return v.length > 5
// })
// console.log(res);

// 3-masala
// let arr =[12,17,18,19,21]
// let res = arr.filter(function(v){
//     return v >18
// })
// console.log(res);
                                                                                //FIND
// 1-masala
// let arr = [1,2,3,4,5,6,7,9,,10,11]
// let res = arr.find(function(v){
//     return v > 10
// })               
// console.log(res);

// SOME and EVERY
       
// // 1-masala
// let arr = [1,-2,-3,-4,-5,-6,-7,-8,]
// let res = arr.some(function(v){
//     return v > 0
// })
// console.log(res);

// 2-masala
// let arr = ['cat','dog', 'elephant']
// let res = arr.some(function(v){
//     return v.length > 5
// })
// console.log(res);

// 3-masala
let arr =[1,2,3]
let res = arr.every(function(v){
    return v >0
}) 
console.log(res);
