
let arr=[14,72,65,27,93,4,39,88]
let small=Infinity
let secSmall=Infinity
for(let i=0;i<arr.length;i++){
   if(arr[i]<small){
    secSmall=small
    small=arr[i]
   }else if(arr[i]<secSmall&&small!=arr[i]){
    secSmall=arr[i]
   }
}
console.log(secSmall)