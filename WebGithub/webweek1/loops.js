const arr=["Hello",55,"Hi",44,"World"];

//for each loop
arr.forEach((item)=>{
    // console.log(item); 
    // output:
    // Hello
    // 55
    // Hi
    // 44
    // world
})
//for of loop
for (const elem of arr) {
   // console.log(elem)
    // output:
    // Hello
    // 55
    // Hi
    // 44
    // world
}

for (const key in arr) {
    console.log(key)
    //output's indexe's of array
    //0
    //1
    //2
    //3
    //4
    
}
 const advarr=[22,33,44,55,66];
const newarr=advarr.map((elem)=>{
    return elem*2;
    // output:arr=[ 44, 66, 88, 110, 132]
})
console.log(newarr)//maps over every element and multiplied all elements with two
//immutable, the change wasnt in the original array

const newarr2=advarr.filter((elem)=>{
    return elem>35;
    //output:arr=[44, 55, 66]
})
console.log(newarr2);// iterate over every element and filters out the elements on the basis of condition in body.
//immutable, because returns new array

const val_ans=advarr.reduce((acc,item)=>{
    return acc+item //output:singlevalue=220
})
console.log(val_ans)//it added up all the values and return total
