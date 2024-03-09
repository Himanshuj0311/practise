const fs=require("fs");

// fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
// if(err){
//     console.log(err)
// }
// else {
//     console.log(data)  
// }
// })
const path = require("path");
const filePath = path.join(__dirname, "lecture.txt");

let Data = fs.readFileSync(filePath, "utf-8");

// let Data=fs.readFileSync("./lecture.txt","utf-8")
try {
    let Data = fs.readFileSync("./lecture.txt", "utf-8");
    console.log("hello", Data);
} catch (err) {
    console.error("Error reading file:", err);
}

console.log("hello",Data)

let digits=[1,2,3,23]
let n = digits.length;
    for(let i = n-1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        } 
    }
    console.log("before unshift", digits);
    digits.unshift(1);
    console.log("after unshift", digits);
   // return digits;

   let str="hello";
let bag=""
   for(let i=str.length;i<=0;i--){
    bag+=str[i]
   }
   console.log(bag)

   num=[5, 10, 2, 8, 3]

   let max=0;
   for(let i=0;i<num.length;i++){
    if(nums[i]>max){
        num[i]=max
    }
   }
   console.log(max)

    str="level";
    bag="";
    for(let i=str.length;i>=0;i++){
        bag+=str[i]
    }

    for(let j=0;i<str.length;j++){
        if(str[j]==bag[j]){
            console.log(true)
        }
        else{console.log(false)}
    }

    arr=[1, 2, 3, 4, 3, 2, 1]
    const s= (arr)=>{
     let obj={};
     for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1;
        }
        else{
            obj[arr[i]]++
        }
     }
    }
    s(arr)