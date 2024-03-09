// let a=2;
// let b=3;
// let c=5;
// if(a>b){
//     if(a>c){
//         console.log(a)
//     }
//     else{
//         console.log(c)
//     }
// }
// else{
//     if(b>c){
//         console.log(b)
//     }
//     else{
//         console.log(c)
//     }
// }

let row=5
let col=4;
for(i=1;i<=row;i++){
    let  bag="";
      for(j=1;j<=col;j++){
          bag=bag+"*"+" ";
      }console.log(bag)
          
      }

      for(let i=1;i<=row;i++){
        let con="";
        for(let j=1;j<=col;j++){
            if(i==1||i==row){
               // console.log("*"+"\n")
               con+="*"
            }
            else if(j==1||j==col){
               // console.log("*"+"\n")
               con+="*"

            }
            else{
                //console.log("")
                con+=" "

            }
        }
        console.log(con)
      }

      let n=9;

      for(let i=1;i<=n;i++){
        let ans="";
        for(let j=1;j<=i;j++){
            let index=i+j
            if(index%2==0){
                ans+="1"+" "
            }
            else{
                ans+="0"+" "
            }
        }
        console.log(ans)
      }


      for(let i=1;i<=3;i++){
        let c=" ";
        for(let j=1;j<=n;j++){
            if((i+j)%4==0 ||(i==2 && j%4==0)){
                c+="* "
            }
            else{
                c+="  "
            }
        }
        console.log(c)
      }


      let space=(2*n-1)/2
      for(let i=0;i<=n;i++){
      let s="";
      for(let j=1;j<=space;j++){
        s+="*"+" "
      }
      for(let j=1;j<=2*i-1;j++){
        s+="  "
      }
      space--
      console.log(s)
      }

n=54
      let flag=true;
      for(let i=2;i<Math.sqrt(n);i++){
        if(n%i==0){
            flag=false;
            break;
        }
      }

      if(flag){
        console.log("Prime")
      }
      else{
        console.log("Not Prime");
      }



     let  N=1234;
      let rev=0;
      while(N>0){
        let a=N%10
        rev=rev*10+a;
        N=Math.floor(N/10)
      }

      console.log(rev)

      // Ques7: Find Factorial of a Given Number

// Input a number from the user
//const num =35;

function fut(num){// Initialize factorial to 1
let factorial = 1;

// Calculate factorial
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
return factorial
}

// Print the result
//console.log(`The factorial of ${num} is ${factorial}`);


for(let i=0;i<N;i++){
    let f=""
    for(let j=0;j<=i;j++){
        let f=f+(fut(i)/(fut(j)*fut(i-j)))
    }
    console.log(f)

}


let arr=[1,4,2,5,3,3,6]
let length=arr.length;

for(let i=0;i<length-1;i++){
    for(let j=i+1;j<length;j++){
        if(arr[j]<arr[i]){
            let temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
        }
    }
}
console.log(arr)