
let arr=[14,72,65,27,93,4,39,88]
let large=0
let secLarge=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>large){
        secLarge=large
        large=arr[i]
    }else if(arr[i]>secLarge&&large!=arr[i]){
    secLarge=arr[i]
    }
}

console.log(secLarge)
