const ob1={
    "name":"",
    "age":33
}

ob1.name="Jello"
for (const key in ob1) { 
    console.log(key, ":", ob1[key]);
}

console.log(ob1["name"])