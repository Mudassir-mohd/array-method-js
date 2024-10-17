let arr=[1,2,3,null,4,5,56,true]

// array.length //

    console.log(arr[0])
    console.log(arr.length)

    for(i=0;i<=arr.length-1;i++){
        console.log(arr[i])
    }

// array.AT//
console.log(arr.at(2))
console.log(arr.at(3))
console.log(arr.at(4))

// array.join//
let arr2=[5,]
console.log(arr.join(arr2))

// // array.pop//
// arr.pop=[true,null]
// console.log(arr)

// array.slice//
console.log(arr.slice(1,4))
console.log(arr.slice(4,5))
console.log(arr.slice(2,4))

// Array.push//
arr.push("mohammad")
arr.push("mudassir")
arr.push("array")
console.log(arr)

// array.pop//
arr.pop=[true,null]
console.log(arr)

// array unshift//
arr.unshift("sure")
arr.unshift("ok")
arr.unshift("unshift")
console.log(arr)


// array shift//
arr.shift("sure")
arr.shift("ok")
arr.shift("unshift")
console.log(arr)

// arraysplice//
arr.splice(0,1,"hlo")
arr.splice(1,2,"hello")
arr.splice(2,4,"task")

//array sort//
arr2.sort()
console.log(arr)

// array concat //

let arr3=[555,666,777,222]
arr.concated_arr=arr.concat(arr3)
console.log(arr)



let arr5=[true,false,null,"mudassir"]
arr5[3]=4
console.log(arr5)




// PRINT EVEN NUMBERS IN ARRAY //

let arr6=[1,2,3,4,5,6,7,8,9,10]

for(i=0;i<arr6.length;i++){
    if(arr6[i]%2==0)
    console.log(arr6[i])
}

